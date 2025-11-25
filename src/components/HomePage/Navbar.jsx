// src/components/HomePage/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../appStyles/HomePageStyles/Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* LEFT: logo + text */}
      <Link to="/" className="navbar__logo">
        <img src={Logo} alt="Logo" />
        <span>LogoIpsum</span>
      </Link>

      {/* CENTER: links */}
      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {/* Our Services dropdown */}
        <div className="dropdown">
          <span className="dropdown__title">Our Services</span>
          <div className="dropdown__menu">
            <Link to="/services/transcription">Transcription Services</Link>
            <Link to="/services/closed-captioning">
              Closed Captioning &amp; Subtitling
            </Link>
            <Link to="/services/summarization">Summarization</Link>
            <Link to="/services/additional-support">Additional Support</Link>
          </div>
        </div>

        <a href="#blogs">Blogs</a>

        {/* 🔥 Careers link updated */}
        <Link to="/careers">Careers</Link>
      </nav>

      {/* RIGHT: Contact Us goes to /contact */}
      <Link to="/contact" className="navbar__button">
        Contact Us
      </Link>
    </header>
  );
};

export default Navbar;
