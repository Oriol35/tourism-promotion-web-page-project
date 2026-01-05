import React, { useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import ActivityMenu from "../ActivityMenu/ActivityMenu";
import { activities } from "../../data/activities";
import styles from "./Planner.module.css";

// External file to format universally
import { formatDuration } from "../../utils/formats";

const Planner = () => {
  const [cart, setCart] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Split activities
  const seasonalActivities = activities.filter((a) => a.type === "seasonal");
  const allYearActivities = activities.filter((a) => a.type === "all-year");

  // --- ACTIONS ---
  const handleOpenMenu = (activity) => setSelectedActivity(activity);

  const handleAddToPlan = (activityWithSchedule) => {
    // First off, Check for Duplicate ID
    if (cart.find((item) => item.id === activityWithSchedule.id)) {
      return {
        success: false,
        message: "This activity is already in your plan!",
      };
    }

    // Overlapping detection logic:
    // If the new activity overlaps another we count it as invalid
    const newStart = new Date(
      `${activityWithSchedule.scheduledDate}T${activityWithSchedule.scheduledTime}`
    );
    const newEnd = new Date(
      newStart.getTime() + activityWithSchedule.duration * 60000
    );

    const overlap = cart.find((existingItem) => {
      const existingStart = new Date(
        `${existingItem.scheduledDate}T${existingItem.scheduledTime}`
      );
      const existingEnd = new Date(
        existingStart.getTime() + existingItem.duration * 60000
      );

      // We accept if (StartA < EndB) and (EndA > StartB)
      return newStart < existingEnd && newEnd > existingStart;
    });
    if (overlap) {
      return {
        success: false,
        message: `Time conflict! Overlaps with "${overlap.title}" (${overlap.scheduledTime}).`,
      };
    }

    // Add to cart in case it's safe
    setCart([...cart, activityWithSchedule]);
    return { success: true };
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // @brief This method manages to translate the created itinerary into an .ics (iCalendar) file format.
  // check this URL https://add-to-calendar-pro.com/articles/how-to-create-ics-file
  const handleDownload = () => {
    if (cart.length === 0) return;

    // Header of file
    let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Girona Tourism//Trip Planner//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;
    // Event list
    // We clear any disturbing symbols via the "replace()" function
    cart.forEach((item) => {
      const cleanDate = item.scheduledDate.replace(/-/g, "");
      const cleanTime = item.scheduledTime.replace(/:/g, "");
      const dtStart = `${cleanDate}T${cleanTime}00`;
      //Use URL or set an empty value
      const locationLink = item.locationUrl || "";
      const combinedDescription = `${item.description}\\n\\n | Map: ${locationLink}`;

      icsContent += `BEGIN:VEVENT
UID:${item.id}-${Date.now()}@gironatourism.com
SUMMARY:${item.title}
DTSTART:${dtStart}
DURATION:PT${item.duration}M
DESCRIPTION:${combinedDescription}
URL:${locationLink}
LOCATION:${item.locationName}, Girona
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
`;
    });
    // End of file
    icsContent += "END:VCALENDAR";
    // We transfer raw data into an immutable blob
    // https://developer.mozilla.org/en-US/docs/Web/API/Blob
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "my_girona_trip.ics");
    // We add the new link
    document.body.appendChild(link);
    // And we download from it before resetting it
    link.click();
    document.body.removeChild(link);
  };

  // --- SORTING LOGIC ---
  // Create a sorted copy of the cart to display
  // Why was this so hard to code :(
  const sortedCart = [...cart].sort((a, b) => {
    const dateA = new Date(`${a.scheduledDate}T${a.scheduledTime}`);
    const dateB = new Date(`${b.scheduledDate}T${b.scheduledTime}`);
    return dateA - dateB; // Ascending order (Earliest first)
  });

  return (
    <div className={styles.container}>
      {/* LEFT COLUMN: Scrollable Activities */}
      <div className={styles.activitiesColumn}>
        <h1>Explore Girona</h1>
        <p className={styles.indication}>
          Select activities to build your perfect itinerary.
        </p>
        <hr></hr>

        {/* Limited time Section */}
        <h2 className={styles.limitedTime}>• Limited Time Events</h2>
        <div className={styles.grid}>
          {seasonalActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onAdd={() => handleOpenMenu(activity)}
              isAdded={cart.some((item) => item.id === activity.id)}
            />
          ))}
        </div>
        {/* All Year Section */}
        <h2 className={styles.allYear}>• All year activities</h2>
        <div className={styles.grid}>
          {allYearActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onAdd={() => handleOpenMenu(activity)}
              isAdded={cart.some((item) => item.id === activity.id)}
            />
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Sticky Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Your Trip Plan</h2>
          <div className={styles.stats}>
            {cart.length} activities • Total:{" "}
            {formatDuration(
              cart.reduce((acc, item) => acc + item.duration, 0) // Filter and then format
            )}
          </div>
        </div>

        {/* The List */}
        <ul className={styles.tripList}>
          {sortedCart.length === 0 ? (
            <p className={styles.emptyList}>
              Your itinerary is empty. Click an activity on the left to start!
            </p>
          ) : (
            sortedCart.map((item) => (
              <li key={item.id} className={styles.tripItem}>
                <div className={styles.itemInfo}>
                  <span className={styles.itemDate}>
                    {/* Format: "Fri, May 12 - 14:30", US style*/}
                    {new Date(item.scheduledDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                    })}
                    {" — "} {item.scheduledTime}
                  </span>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemDuration}>
                    {formatDuration(item.duration)}
                  </div>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemove(item.id)}
                  title="Remove from plan"
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>

        <button
          className={styles.downloadBtn}
          onClick={handleDownload}
          disabled={cart.length === 0}
        >
          Download Itinerary
        </button>
      </div>

      {/* Activity popup input menu */}
      {selectedActivity && (
        <ActivityMenu
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
          onConfirm={handleAddToPlan}
        />
      )}
    </div>
  );
};

export default Planner;
