// src/components/HomePage/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../appStyles/HomePageStyles/Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* -------- LEFT BRAND BLOCK -------- */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <img src={logo} alt="Logoipsum logo" />
              </div>
              <span className="footer-logo-text">Logoipsum</span>
            </div>

            <p className="footer-description">
              Lorem Ipsum Content is the Dummy text
              <br />
              which is for the web content
            </p>

            <button className="footer-social">in</button>

            <p className="footer-copy-left">©2022 IncrediQuo Solutions</p>
          </div>

          {/* -------- RIGHT LINK COLUMNS -------- */}
          <div className="footer-links">
            {/* Services group */}
            <div className="footer-column footer-column--services">
              <h4 className="footer-heading">Services</h4>
              <ul>
                <li>Transcription</li>
                <li>Closed Captioning &amp; Subtitling</li>
                <li>Summarization</li>
                <li>Additional Support</li>
              </ul>
            </div>

            {/* Quikers group + privacy/terms */}
            <div className="footer-column footer-column--quikers">
              <h4 className="footer-heading">Quikers</h4>
              <ul>
                <li>
                  <Link to="/" className="footer-link">
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="footer-link">
                    Careers
                  </Link>
                </li>
                <li>
                  <span className="footer-link">Blogs</span>
                </li>
              </ul>

              <div className="footer-bottom-links">
                <Link
                  to="/privacy-policy"
                  className="footer-bottom-link privacy-policy"
                >
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="footer-bottom-link">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
