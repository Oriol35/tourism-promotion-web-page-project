/*    THIS FILE IS USED TO STORE UNIVERSAL FUNCTIONS   */

/* But for some reason I ended up puttin only ONE function. But the idea is to DRY (Don't Repeat Yourself) */

// @brief This function turns some amount of minutes in "Xh Ymin" format
export const formatDuration = (duration) => {
  if (duration >= 60) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    // If o'clock, return only hours
    if (minutes === 0) return `${hours}h`;

    return `${hours}h ${minutes}min`;
  }
  return `${duration}min`;
};
