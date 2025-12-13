// src/components/HomePage/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../appStyles/HomePageStyles/Footer.css";

import vector from "../../assets/footer/Vector.png";
import twitter from "../../assets/footer/twitter.png";

const Footer = () => {
  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* -------- BRAND + ADDRESS (LEFT) -------- */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo" onClick={handleNavClick}>
              <img
                src={vector}
                alt="IncrediQuo-Solutions logo"
                className="footer-logo-icon"
              />
              <span className="footer-logo-text">IncrediQuoSolutions</span>
            </Link>

            <p className="footer-description">
              Your trusted partner for precision
              <br />
              transcription and media support services.
            </p>

            <div className="footer-social-group">
              <a
                href="https://www.linkedin.com/company/incrediquo-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                in
              </a>

              <a
                href="https://x.com/IncrediQuo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  className="footer-social-icon"
                />
              </a>
            </div>

            {/* <p className="footer-copy-left">©2025 IncrediQuo Solutions</p> */}
          </div>

          {/* -------- RIGHT: columns + bottom links -------- */}
          <div className="footer-right">
            <div className="footer-links">
              <div className="footer-column footer-column--services">
                <h4 className="footer-heading">Services</h4>
                <ul>
                  <li>
                    <Link
                      to="/services/transcription"
                      className="footer-link"
                      onClick={handleNavClick}
                    >
                      Transcription
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/closed-captioning"
                      className="footer-link"
                      onClick={handleNavClick}
                    >
                      Closed Captioning & Subtitling
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/summarization"
                      className="footer-link"
                      onClick={handleNavClick}
                    >
                      Summarization
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/additional-support"
                      className="footer-link"
                      onClick={handleNavClick}
                    >
                      Additional Support
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-column footer-column--quikers">
                <h4 className="footer-heading">Quikers</h4>
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="footer-link"
                      onClick={handleNavClick}
                    >
                      Home Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="footer-link"
                      onClick={handleNavClick}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/careers"
                      className="footer-link"
                      onClick={handleNavClick}
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blogs"
                      className="footer-link"
                      onClick={handleNavClick}
                    >
                      News & Insights
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-column footer-column--contact">
                <h4 className="footer-heading">Contact Us</h4>
                <ul>
                  <li className="footer-address">+91 9849668819</li>
                  <li className="footer-address">
                    info@incrediquosolutions.com
                  </li>
                  <li className="footer-address2">
                    B-1003, Level-10, B-Block, The Platina Building, Gachibowli, Hyderabad - 500032, India
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom links (privacy/terms) placed below columns, right-aligned */}
            {/* <div className="footer-bottom-links">
              <Link
                to="/privacy-policy"
                className="footer-bottom-link"
                onClick={handleNavClick}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="footer-bottom-link"
                onClick={handleNavClick}
              >
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
        <div className="footer-bottom">
                      <p className="footer-copy-left">©2025 IncrediQuo Solutions</p>

          <div className="footer-bottom-links">
              <Link
                to="/privacy-policy"
                className="footer-bottom-link"
                onClick={handleNavClick}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="footer-bottom-link"
                onClick={handleNavClick}
              >
                Terms of Service
              </Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
