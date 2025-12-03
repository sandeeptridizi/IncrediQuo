// src/components/HomePage/Navbar.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../../appStyles/HomePageStyles/Navbar.css";
import Logo from "../../assets/logo.png";
import { Button } from "../Button/Button";
import { PiPhoneCall } from "react-icons/pi";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // clearer name
  const dropdownRef = useRef(null);
  const contactRef = useRef(null);
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

  // Click outside handlers (single consolidated handler)
  useEffect(() => {
    const handleDocClick = (e) => {
      // close contact popup if click outside contactRef
      if (isPopupOpen && contactRef.current && !contactRef.current.contains(e.target)) {
        setIsPopupOpen(false);
      }

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
  }, [isPopupOpen, isServicesOpen]);

  // Toggle Services (keyboard friendly)
  const toggleServices = useCallback(() => {
    setIsServicesOpen((p) => !p);
  }, []);

  // When clicking the contact wrapper we want to navigate to /contact
  // BUT only if the click target is not the phone icon / popup or interactive child.
  const handleContactWrapperClick = (e) => {
    // If click comes from inside the phone popup or icon, do nothing (they handle themselves)
    if (contactRef.current && contactRef.current.contains(e.target)) {
      // If it was an actual click on the wrapper area outside interactive children,
      // we still allow navigation below. The `contains` check lets us detect inner clicks.
      const clickedInteractive = e.target.closest(".icon-popup-trigger-area, .contact-number-popup, .phone-icon-container, .ringing-phone-icon");
      if (clickedInteractive) {
        return; // do not navigate
      }
    }
    // navigate to contact page
    navigate("/contact");
  };

  // Icon click toggles popup and prevents navigation
  const handleIconToggle = (e) => {
    e.stopPropagation();
    setIsPopupOpen((p) => !p);
  };

  // keyboard handlers for popup toggle
  const handleIconKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsPopupOpen((p) => !p);
    }
  };

  const navbarClass = `navbar ${scrolled ? "scrolled" : ""}`;

  return (
    <header className={navbarClass}>
      <div className="navbar__top-row">
        <NavLink to="/" className="navbar__logo" title="Go to home">
          <img src={Logo} alt="IncrediQuo logo" />
        </NavLink>

        <div
          className="navbar__button contact-button-wrapper"
          onClick={handleContactWrapperClick}
          ref={contactRef}
          role="button"
          aria-label="Open contact / go to contact page"
        >
          <div
            className="icon-popup-trigger-area"
            onClick={handleIconToggle}
            onKeyDown={handleIconKey}
            onMouseEnter={() => setIsPopupOpen(true)}
            onMouseLeave={() => setIsPopupOpen(false)}
            tabIndex={0}
            role="button"
            aria-haspopup="true"
            aria-expanded={isPopupOpen}
            title="Show phone number"
          >
            <div className="phone-icon-container" aria-hidden="true">
              <PiPhoneCall className="ringing-phone-icon" />
            </div>

            <div className={`contact-number-popup ${isPopupOpen ? "show" : ""}`} role="dialog" aria-hidden={!isPopupOpen}>
              <div className="popup-caret" />
              <span className="contact-number">+91 9849668819</span>
            </div>
          </div>

          <Button name="Contact Us" />
        </div>
      </div>

      <nav className="navbar__links-row" aria-label="Primary navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>

        <div className={`dropdown ${isServicesOpen ? "open" : ""}`} ref={dropdownRef}>
          <span
            className="dropdown__title"
            onClick={toggleServices}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleServices(); } }}
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
      </nav>
    </header>
  );
};

export default Navbar;
