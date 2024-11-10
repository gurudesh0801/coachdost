import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="intro-section">
        <h1>About Our LMS Platform</h1>
        <p>
          Welcome to our Learning Management System! Our platform is designed to
          empower learners and educators by providing seamless access to
          resources, structured learning paths, and interactive tools to enhance
          the learning experience.
        </p>
      </section>

      <section className="values-section">
        <div className="value-box">
          <h2>Easy Access</h2>
          <p>
            Access learning materials anytime, anywhere with our user-friendly
            platform.
          </p>
        </div>
        <div className="value-box">
          <h2>Engagement</h2>
          <p>
            We prioritize interactive learning to keep students engaged and
            motivated.
          </p>
        </div>
        <div className="value-box">
          <h2>Support</h2>
          <p>
            Our dedicated team provides continuous support to ensure a smooth
            learning experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
