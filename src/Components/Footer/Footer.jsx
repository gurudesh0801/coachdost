// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            Your LMS platform for easy learning and skill development. Our
            mission is to empower educators and students with seamless online
            tools and resources.
          </p>
        </div>

        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>Email: support@lmsplatform.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <div className="footer-social">
            <a href="#facebook" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#twitter" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">
        &copy; {new Date().getFullYear()} LMS Platform. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
