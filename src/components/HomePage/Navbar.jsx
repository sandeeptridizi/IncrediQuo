// src/components/HomePage/Navbar.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../../appStyles/HomePageStyles/Navbar.css";
import Logo from "../../assets/logo2.png";
import { Button } from "../Button/Button";
// import { PiPhoneCall } from "react-icons/pi"; // Remove if icon is no longer used

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Removed isPopupOpen state and related refs/hooks as the phone icon/popup is gone.
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close services menu when route changes
  useEffect(() => {
    setIsServicesOpen(false);
  }, [location]);

  // Click outside handlers: Only for Services dropdown now
  useEffect(() => {
    const handleDocClick = (e) => {
      // close services dropdown if click outside dropdownRef
      if (isServicesOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("touchstart", handleDocClick);
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("touchstart", handleDocClick);
    };
  }, [isServicesOpen]);

  // Removed toggleServices - we will use mouseEnter/Leave directly in JSX

  // Calendly function
  const openCalendly = () => {
    window.open(
      "https://calendly.com/shashank-incrediquosolutions/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navbarClass = `navbar ${scrolled ? "scrolled" : ""}`;

  return (
    <header className={navbarClass}>
      <div className="navbar__top-row">
        {/* LOGO */}
        <NavLink to="/" className="navbar__logo" title="Go to home">
          <img src={Logo} alt="IncrediQuo logo" />
        </NavLink>

        {/* NAVIGATION LINKS */}
        <div className="navbar__links-row" aria-label="Primary navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>

          {/* 👇 CHANGE 2: Dropdown on Hover Only */}
          <div 
            className={`dropdown ${isServicesOpen ? "open" : ""}`} 
            ref={dropdownRef}
            onMouseEnter={() => setIsServicesOpen(true)} // Open on hover
            onMouseLeave={() => setIsServicesOpen(false)} // Close on leave
          >
            <span
              className="dropdown__title"
              role="button"
              tabIndex={0}
              aria-haspopup="menu"
              aria-expanded={isServicesOpen}
            >
              Our Services
            </span>

            <div className="dropdown__menu" role="menu" aria-hidden={!isServicesOpen}>
              <NavLink to="/services/transcription" onClick={() => setIsServicesOpen(false)}>Transcription Services</NavLink>
              <NavLink to="/services/closed-captioning" onClick={() => setIsServicesOpen(false)}>Closed Captioning &amp; Subtitling</NavLink>
              <NavLink to="/services/summarization" onClick={() => setIsServicesOpen(false)}>Summarization</NavLink>
              <NavLink to="/services/additional-support" onClick={() => setIsServicesOpen(false)}>Additional Support</NavLink>
            </div>
          </div>

          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/careers">Careers</NavLink>
        </div>
        
      
        <div className="contact-buttons-container">
  
          <div onClick={openCalendly}>
            <Button
              name="Schedule Appointment"
              paddingXL="14vw"
              widthL="15.8vw"
              widthM="44vw" // Keeping a single sensible width for M
              bacgrounClr="#022447"
              bacgrounArrow="#ffffff"
              colorArrow="#022447"
              colorText="#ffffff"
              colorTextHover="#022447"
            />
          </div>
          
       <div onClick={() => navigate("/contact")}>
              <Button 
                name="Contact Us" 
              />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;