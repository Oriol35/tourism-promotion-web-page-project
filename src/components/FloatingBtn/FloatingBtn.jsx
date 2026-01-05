import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./FloatingBtn.module.css";

const FloatingBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // useState to make the hint https://legacy.reactjs.org/docs/hooks-state.html
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Wait 1 second before showing the hint
    const showTimer = setTimeout(() => {
      setShowHint(true);
    }, 1000);

    // Hide the hint automatically after 7 seconds (1s delay + 6s visible)
    const hideTimer = setTimeout(() => {
      setShowHint(false);
    }, 7000);

    // Clear all
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // We won't see the button inside the planner
  if (location.pathname === "/planner") {
    return null;
  }

  return (
    <div className={styles.container}>
      {/* Hint INDICATOR - look into the CSS */}
      <div
        className={`${styles.hintWrapper} ${showHint ? styles.visible : ""}`}
      >
        <div className={styles.hintText}>
          Plan your trip here! <span className={styles.arrow}>▶</span>
        </div>
      </div>

      {/* Your Button */}
      <button
        className={`${styles.floatBtn} ${showHint ? styles.pulsing : ""}`}
        onClick={() => navigate("/planner")}
        aria-label="Go to Planner"
      >
        📅
      </button>
    </div>
  );
};

export default FloatingBtn;
