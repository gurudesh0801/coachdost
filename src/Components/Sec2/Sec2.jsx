import React from "react";
import "./Sec2.css";

const Sec2 = () => {
  return (
    <div className="page-container">
      <div className="content">
        <h1>We Grow and Become The Biggest</h1>
        <p>
          We provide solutions to problems for the demands of market needs with
          quality services and learning materials that make this company
          community large and able to reach many sectors.
        </p>
        <div className="features">
          <div className="feature">
            <h3>Verified</h3>
            <p>Verified Ecourse</p>
          </div>
          <div className="feature">
            <h3>Easiest</h3>
            <p>Have Easy Access</p>
          </div>
          <div className="feature">
            <h3>Powerful</h3>
            <p>Effective & Efficient</p>
          </div>
        </div>
        <button className="cta-button">See more features</button>
      </div>
      <div className="images">
        <div className="image-box"></div>
        <div className="image-box"></div>
        <div className="image-box"></div>
      </div>
    </div>
  );
};

export default Sec2;
