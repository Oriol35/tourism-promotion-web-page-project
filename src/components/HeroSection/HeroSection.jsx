import React from "react";
import styles from "./HeroSection.module.css";

// Background
import onyarImg from "../../assets/images/onyar.jpg";

const HeroSection = () => {
  // Easiest way I found out to make a background image
  const backgroundStyle = {
    backgroundImage: `url(${onyarImg})`,
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.hero} style={backgroundStyle}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>GIRONA</h1>
        <p className={styles.subtitle}>Where rivers hum, stones speak</p>
        <button className={styles.btn} onClick={scrollToContent}>
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
