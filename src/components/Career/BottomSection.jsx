import React from "react";
import { Link } from "react-router-dom";   // 👈 added
import "../../appStyles/Career/BottomSection.css";

const BottomSection = () => {
  return (
    <div className="career-bottom">
      <div className="dot-pattern"></div>

      <p>
        Our approach is rooted in a deep understanding of your needs. We support
        you with tools, expert guidance and tailored resources, then connect you
        with a top-rated OJO network agent so you’re confident and equipped for
        each step.
      </p>

      {/* ABOUT US button → goes to /about */}
      <Link to="/about" className="bottom-btn">
        ABOUT US
      </Link>
    </div>
  );
};

export default BottomSection;
