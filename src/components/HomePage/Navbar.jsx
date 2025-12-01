import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../../appStyles/HomePageStyles/Navbar.css";
import Logo from "../../assets/logo.png";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { PiPhoneCall } from "react-icons/pi";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navbarClass = `navbar ${scrolled ? 'scrolled' : ''}`; // Add 'scrolled' class here

  return (
    // Use the dynamic class name
    <header className={navbarClass}>
      {/* 1. TOP ROW: Logo and Contact Button */}
      <div className="navbar__top-row">
        {/* LOGO NAME REMOVED */}
        <NavLink to="/" className="navbar__logo">
          <img src={Logo} alt="Logo" />
          {/* <span>IncrediQuo-Solutions</span> <-- REMOVED */}
        </NavLink>

        <div
          className="navbar__button contact-button-wrapper"
          onClick={() => navigate("/contact")}
          style={{ cursor: "pointer" }}
        >
          <div className="phone-icon-container">
            <PiPhoneCall className="ringing-phone-icon" />
          </div>
          <Button name="Contact Us" />
        </div>
      </div>
      {/* 2. BOTTOM ROW: Navigation Links */}
      <nav className="navbar__links-row">
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
    </header>
  );
};

export default Navbar;