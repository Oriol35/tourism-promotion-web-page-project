import React from "react";

import { useLayoutEffect } from "react"; // Used to reset scroll with page changes: https://react.dev/reference/react/useLayoutEffect
import { useLocation } from "react-router-dom"; // Used to navigate between pages seamelessly: https://reactrouter.com/api/hooks/useLocation#summary

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import FloatingBtn from "./components/FloatingBtn/FloatingBtn";
import HeroSection from "./components/HeroSection/HeroSection";
import InfoSection from "./components/InfoSection/InfoSection";
import Footer from "./components/Footer/Footer";
import Planner from "./components/Planner/Planner";

/* Styles - As you can see I took a module-oriented approach
  That way you first make it work and then style it through classes
  Every component is styled like this. It's quite convenient.
  https://www.w3schools.com/react/react_css_modules.asp
*/
import styles from "./App.module.css";

// Data (Home page info sections. Includes text, audio, video and images)
// Used to fill up InfoSection components. See line 65
import { homeSections } from "./data/content";

// This is made to ensure every time we load pages we scroll on top
// This might be critical to some extent, but in this case it's still optimal
const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the route changes
  }, [location]); // But only if it changed

  return null;
};

const Home = () => (
  <div>
    <HeroSection />

    <div className={styles.mainContent}>
      {/* Introduction Text */}
      <div className={styles.introSection}>
        <h2 className={styles.introTitle}>Discover Girona</h2>
        <p className={styles.introText}>
          Situated at the confluence of <b>4 rivers</b> (Ter, Onyar, Galligants
          and Güell), the city of Girona offers a plethora of activities to
          experience and places to visit.
          <br />
          <br />
          From ancient pre-Roman architecture to huge festivals and funfairs,{" "}
          <b>each corner of this city has some story to tell.</b> Girona offers
          an array of restaurants, from Michelin-starred fine dining to charming
          bars. The city's ambient changes constantly and makes it a{" "}
          <b>great place to visit at almost any time of the year</b>.
          <br />
          <br />
          Please scroll through this digital guide down below to discover this
          city's charm.
        </p>
      </div>

      {/* Render all sections from the data file! */}
      {homeSections.map((section) => (
        <InfoSection
          key={section.id}
          title={section.title}
          text={section.text}
          image={section.image}
          image2={section.image2}
          video={section.video}
          audio={section.audio}
          alt={section.alt}
        />
      ))}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className={styles.appContainer}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
        </Routes>
        <Footer />
        <FloatingBtn />
      </div>
    </Router>
  );
}

export default App;
