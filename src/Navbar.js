import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          {/* <img src="path-to-your-logo.png" alt="Logo" className="logo" /> */}
          <div className="navbar-links">
            <span className="navbar-link active">Home</span>
            <span className="navbar-link">Movies</span>
          </div>
        </div>
        <div className="navbar-icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-bars" onClick={toggleMenu}></i>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <i className="fas fa-times close-icon" onClick={toggleMenu}></i>
        </div>
        <ul className="sidebar-links">
          <li>About Us</li>
          <li>Trailers</li>
          <li>News & Press</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
