import React from "react";

import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

/* 
  This footer serves the purpose of giving more info about the page. You can
  also navigate through pages. As you can see I also embedded Temps de flors
  and City council as links. I thought it was appropiate.
*/
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About */}
        <div className={styles.column}>
          <h3>Visit Girona</h3>
          <p>
            {" "}
            <i>
              "Experience the history, culture, and gastronomy of one of
              Catalonia's most beautiful cities"
            </i>
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/planner">Trip Planner</Link>
          <a
            href="https://tempsdeflors.girona.cat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Temps de Flors
          </a>
          <a
            href="https://www.girona.cat"
            target="_blank"
            rel="noopener noreferrer"
          >
            City Council
          </a>
        </div>

        {/* Contact/Project Info */}
        <div className={styles.column}>
          <h3>Project Info</h3>
          <i>
            <p>Tourism Promotion Web Page project, made with ReactJS</p>
            <p>Multimedia and UI, 2026</p>
            <p>Oriol Bermejo i Cuadros</p>
          </i>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} Girona Tourism Project. Some rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
