// src/components/HomePage/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../../appStyles/HomePageStyles/Navbar.css";
import Logo from "../../assets/LOGO2.png";
import { Button } from "../Button/Button";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close services dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
  }, [location]);

  const openCalendly = () => {
    window.open(
      "https://calendly.com/shashank-incrediquosolutions/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* ---------- TOP ROW (Logo + Hamburger For Mobile) ---------- */}
      <div className="navbar__top-row">
        <NavLink to="/" className="navbar__logo">
          <img src={Logo} alt="Logo" />
        </NavLink>

        {/* Desktop Nav */}
        <div className="navbar__links-row">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>

          <div
            className={`dropdown ${isServicesOpen ? "open" : ""}`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className="dropdown__title">Services</span>
            <div className="dropdown__menu">
              <NavLink to="/services/transcription">
                Transcription Services
              </NavLink>
              <NavLink to="/services/closed-captioning">
                Closed Captioning & Subtitling
              </NavLink>
              <NavLink to="/services/summarization">Summarization</NavLink>
              <NavLink to="/services/additional-support">
                Additional Support
              </NavLink>
            </div>
          </div>

          <NavLink to="/blogs">News & Insights</NavLink>
          <NavLink to="/careers">Careers</NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="contact-buttons-container">
          <div onClick={openCalendly}>
            <Button
              name="Schedule Appointment"
              widthM="44vw"
              bacgrounClr="#022447"
              bacgrounArrow="#fff"
              colorArrow="#022447"
              colorText="#fff"
            />
          </div>

          <div onClick={() => navigate("/contact")}>
            <Button name="Contact Us" />
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        {/* <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenu(true)}
        >
          <HiMenu size={34} />
        </button> */}
        {/* MOBILE HAMBURGER / CLOSE BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenu(!isMobileMenu)}
        >
          {isMobileMenu ? <HiX size={34} /> : <HiMenu size={34} />}
        </button>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      <div className={`mobile-menu ${isMobileMenu ? "open" : ""}`}>

        <div className="mobile-nav-links">
          <NavLink to="/" onClick={() => setIsMobileMenu(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsMobileMenu(false)}>
            About
          </NavLink>

          {/* Mobile Services Dropdown */}
          <details className="mobile-dropdown">
            <summary>Services</summary>
            <NavLink
              to="/services/transcription"
              onClick={() => setIsMobileMenu(false)}
            >
              Transcription Services
            </NavLink>
            <NavLink
              to="/services/closed-captioning"
              onClick={() => setIsMobileMenu(false)}
            >
              Closed Captioning & Subtitling
            </NavLink>
            <NavLink
              to="/services/summarization"
              onClick={() => setIsMobileMenu(false)}
            >
              Summarization
            </NavLink>
            <NavLink
              to="/services/additional-support"
              onClick={() => setIsMobileMenu(false)}
            >
              Additional Support
            </NavLink>
          </details>

          <NavLink to="/blogs" onClick={() => setIsMobileMenu(false)}>
            News & Insights
          </NavLink>
          <NavLink to="/careers" onClick={() => setIsMobileMenu(false)}>
            Careers
          </NavLink>
        </div>

        {/* MOBILE Buttons BELOW logo */}
        <div className="mobile-contact-buttons">
                    <button name="Contact Us" onClick={() => navigate("/contact")}>Contact Us</button>

          <button name="Schedule Appointment" onClick={openCalendly} >Schedule Appointment</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
