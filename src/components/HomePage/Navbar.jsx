// src/components/HomePage/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../../appStyles/HomePageStyles/Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // close dropdown after clicking a link
  const handleServiceClick = () => {
    setIsServicesOpen(false);
  };

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img src={Logo} alt="Logo" />
        <span>IncrediQuo-Solutions</span>
      </NavLink>

      <nav className="navbar__links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>

        {/* OUR SERVICES DROPDOWN */}
        <div
          className={`dropdown ${isServicesOpen ? "open" : ""}`}
          ref={dropdownRef}
        >
          <span
            className="dropdown__title"
            onClick={() => setIsServicesOpen((prev) => !prev)}
          >
            Our Services
          </span>

          <div className="dropdown__menu">
            <NavLink
              to="/services/transcription"
              onClick={handleServiceClick}
            >
              Transcription Services
            </NavLink>
            <NavLink
              to="/services/closed-captioning"
              onClick={handleServiceClick}
            >
              Closed Captioning &amp; Subtitling
            </NavLink>
            <NavLink
              to="/services/summarization"
              onClick={handleServiceClick}
            >
              Summarization
            </NavLink>
            <NavLink
              to="/services/additional-support"
              onClick={handleServiceClick}
            >
              Additional Support
            </NavLink>
          </div>
        </div>

        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/careers">Careers</NavLink>
      </nav>

      <NavLink to="/contact" className="navbar__button">
        Contact Us
      </NavLink>
    </header>
  );
};

export default Navbar;
