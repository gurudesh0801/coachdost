import React from "react";
import "./About.css";
import { FaTrophy } from "react-icons/fa";
import mentorImage from "../../assets/images/image1.png"; // Replace with your image path
import img1 from "../../assets/images/icon-champion.png"; // Replace with your image path

const About = () => {
  return (
    <section className="mentor-section">
      <div className="mentor-image-wrapper">
        <img src={mentorImage} alt="Mentor" className="mentor-image" />
      </div>

      <div className="mentor-content">
        <div className="mentor-awards">
          <span role="img" aria-label="trophy">
            <img src={img1} alt="" />
          </span>
        </div>
        <h2>Learn With Our Best Mentor</h2>
        <p>
          We present competent and professional teachers and teaching staff in
          their fields. That way we can learn with the system and structured
          according to standardization.
        </p>
        <button className="mentor-button">See all mentors</button>
      </div>
    </section>
  );
};

export default About;
