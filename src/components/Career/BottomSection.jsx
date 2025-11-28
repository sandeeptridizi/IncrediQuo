import React from "react";
import { Link } from "react-router-dom";   // 👈 added
import "../../appStyles/Career/BottomSection.css";

const BottomSection = () => {
  return (
    <div className="career-bottom">
      <div className="dot-pattern"></div>

      <p>
        We’re a precision-driven transcription and language support company built on trust, accuracy, and innovation. Learn how our expertise adds value to every client we serve.
      </p>

      {/* ABOUT US button → goes to /about */}
      <Link to="/about" className="bottom-btn">
        ABOUT US
      </Link>
    </div>
  );
};

export default BottomSection;
