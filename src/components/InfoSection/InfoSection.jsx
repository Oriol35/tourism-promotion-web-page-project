import React from "react";
import styles from "./InfoSection.module.css";

/* An abstraction to information divided into sections.

The thing is that you only need text and some kind of media (images, audio, video).
I've makde it so you can display information in a generic way in order to "standarize"
each presented section. Depending of the amout of media the format changes slightly.

Check "src/data/content.jsx" for more details
*/
const InfoSection = ({ title, text, image, image2, video, audio, alt }) => {
  return (
    <div className={styles.section}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text}>{text}</div>

        {/* Audio Player */}
        {audio && (
          <div style={{ marginTop: "20px" }}>
            <p>
              <strong>Listen to the atmosphere:</strong>
            </p>
            <audio controls src={audio} style={{ width: "100%" }}>
              Audio element not supported. Please change browsers.
            </audio>
          </div>
        )}
      </div>

      <div className={styles.mediaContent}>
        {/* Video */}
        {video ? (
          <video controls loop className={styles.image} poster={image}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : /* check forst for Two images */
        image && image2 ? (
          <div className={styles.doubleImageGrid}>
            <img src={image} alt={alt} className={styles.image} />
            <img
              src={image2}
              alt={`${alt} (view 2)`}
              className={styles.image}
            />
          </div>
        ) : (
          /* Single Image if else */
          <img src={image} alt={alt} className={styles.image} />
        )}
      </div>
    </div>
  );
};

export default InfoSection;
