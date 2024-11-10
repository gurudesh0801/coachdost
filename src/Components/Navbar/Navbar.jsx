import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css"; // Your CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/">CoachDost</Link> {/* Use Link for routing */}
        </div>
      </div>

      <div className="navbar-center">
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link> {/* Use Link instead of <a> */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Use Link instead of <a> */}
          </li>
          <li>
            <Link to="/services">Services</Link> {/* Use Link instead of <a> */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Use Link instead of <a> */}
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <button className="navbar-login">Login</button>
        <button className="navbar-signup">Sign Up</button>
      </div>

      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
