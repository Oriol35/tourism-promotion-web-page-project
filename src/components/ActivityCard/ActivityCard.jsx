import React from "react";
import styles from "./ActivityCard.module.css";

// Interface file
import { formatDuration } from "../../utils/formats";

const ActivityCard = ({ activity, onAdd, isAdded }) => {
  return (
    <div className={styles.card}>
      <img src={activity.image} alt={activity.title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{activity.title}</h3>
        <p className={styles.description}>{activity.description}</p>

        <div className={styles.footer}>
          <span className={styles.duration}>
            ⏱ {formatDuration(activity.duration)}
          </span>
          <button
            className={styles.addBtn}
            onClick={() => onAdd(activity)}
            disabled={isAdded}
          >
            {isAdded ? "Added ✓" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
