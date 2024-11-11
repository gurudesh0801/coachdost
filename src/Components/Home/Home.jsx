// HeroSection.js

import React from "react";
import "./Home.css";
import image from "../../assets/images/girlimg.png";
import About from "../About/About";
import Sec2 from "../Sec2/Sec2";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Upgrade Yourself, and Prepare a Better Future
          </h1>
          <p className="hero-subtitle">
            Something bigger to achieve your dreams so we provide all of these
            great things for you.
          </p>
          <div className="hero-buttons">
            <button className="get-started">Get Started</button>
            <button className="watch-video">
              <span className="play-icon">▶</span> Watch Video
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h2>9,500+</h2>
              <p>Education Partners</p>
            </div>
            <div className="stat-item">
              <h2>10K</h2>
              <p>Active Students</p>
            </div>
            <div className="stat-item">
              <h2>24/7</h2>
              <p>All Day Consultation</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={image} alt="Hero" />
        </div>
      </div>
      <About />
      <Sec2 />
    </>
  );
};

export default Home;
