import React, { useState } from "react";
import styles from "./ActivityMenu.module.css";

// External functions from interface
import { formatDuration } from "../../utils/formats";

/*A modal interface that allows the user to view details of an activity
  and schedule it for a specific date and time.

  activity - The activity data object (title, image, duration, type, etc.).
             Look at "src/data/activities.js"
  onClose - Callback to close this menu without saving.
  onConfirm - Callback for adding the activity to the page. 
  
  > Returns an object { success: boolean, message: string }.
*/
const ActivityMenu = ({ activity, onClose, onConfirm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  if (!activity) return null; // We need one

  // We need to know what type of activity we're working with
  const isSeasonal = activity.type === "seasonal";

  // --- VALIDATION LOGIC ---
  const handleAddToItinerary = () => {
    // Are fields filled?
    if (!date || !time) {
      alert("Please select a date and time!");
      return;
    }

    // DATE VALIDATION (Manual Typing Check)
    if (isSeasonal) {
      // String comparison inside margins?
      if (
        date < activity.availableDates.start ||
        date > activity.availableDates.end
      ) {
        alert(
          `Invalid Date!\nThis seasonal event is only available from ${activity.availableDates.start} to ${activity.availableDates.end}.`
        );
        return; // Stop here
      }
    }

    // TIME VALIDATION (Operating Hours)
    // Let's assume activities are generally open 08:00 - 23:00
    const OPENING_TIME = "08:00";
    const CLOSING_TIME = "23:00";

    if (time < OPENING_TIME || time > CLOSING_TIME) {
      alert(
        `Invalid Time!\nPlease select a time between ${OPENING_TIME} and ${CLOSING_TIME}.`
      );
      return; // Stop here
    }

    // Send to Planner
    const result = onConfirm({
      ...activity,
      scheduledDate: date,
      scheduledTime: time,
    });

    // Check response from Planner (an alert might jump if there's an issue)
    if (result && !result.success) {
      alert(result.message);
    } else {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <img
          src={activity.image}
          alt={activity.title}
          className={styles.image}
        />

        <div className={styles.content}>
          <h2>{activity.title}</h2>

          <div className={styles.metaRow}>
            <span className={styles.tag}>
              {isSeasonal ? "Seasonal Event" : "All Year"}
            </span>
            <span className={styles.duration}>
              ⏱ {formatDuration(activity.duration)}
            </span>
          </div>

          <p>{activity.description}</p>

          <div className={styles.controls}>
            <h3>Schedule Your Visit</h3>

            {/* Date Input - Sadly depends on your webpage region 
            and if you are non english speaker the input might not be
            at the same format than in the output*/}
            <div className={styles.inputGroup}>
              <label>Select Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                /* UI Restriction (Picker) */
                min={isSeasonal ? activity.availableDates.start : undefined}
                max={isSeasonal ? activity.availableDates.end : undefined}
              />
              {isSeasonal && (
                <small
                  style={{
                    display: "block",
                    marginTop: "5px",
                    color: "#e62222ff",
                    fontWeight: "bold",
                  }}
                >
                  Available only from {activity.availableDates.start} to{" "}
                  {activity.availableDates.end}
                </small>
              )}
            </div>

            {/* Hour Input */}
            <div className={styles.inputGroup}>
              <label>Select Time:</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                min="08:00"
                max="23:00"
              />
              <small style={{ color: "#7f8c8d", fontSize: "0.8rem" }}>
                Operating hours: 08:00 - 23:00
              </small>
            </div>

            <div className={styles.actionRow}>
              <button className={styles.addBtn} onClick={handleAddToItinerary}>
                Confirm & Add to Itinerary
              </button>

              <a
                href={activity.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapBtn}
              >
                Open Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityMenu;
