import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

// You can freely navigate between the two pages with the provided links.
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        VISIT GIRONA
      </Link>
      <div className={styles.pages}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/planner" className={styles.link}>
          Trip Planner
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
