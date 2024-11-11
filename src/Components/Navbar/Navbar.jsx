import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false); // Close the search pop-up after search
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>

      <div className="navbar-center">
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Solution</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="#appointment">Appointment</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <button onClick={toggleSearch} className="navbar-search-icon">
          <FiSearch size={25} color="#1d3557" />
        </button>
        <button className="navbar-login">Login</button>
        <button className="navbar-signup">Sign Up</button>
      </div>

      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div>

      {/* Enhanced Search Pop-up */}
      {isSearchOpen && (
        <div className="search-popup">
          <form onSubmit={handleSearch} className="search-popup-form">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          <button className="close-popup" onClick={toggleSearch}>
            &times;
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
