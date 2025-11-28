// src/components/HomePage/TaglineScroller.jsx
import React from "react";
import "../../appStyles/HomePageStyles/TaglineScroller.css";

const TaglineScroller = () => {
  return (
    <section className="tagline-section">
      {/* Row 1 */}
      <div className="tagline-row tagline-row--top">
        <div className="tagline-track">
          <span className="tagline-text tagline-text--muted">
            Human Precision + Smart Technology = 99% Accuracy Every Time
          </span>
          
        </div>
      </div>

      {/* Row 2 (highlighted gradient line) */}
      <div className="tagline-row tagline-row--middle">
        <div className="tagline-track">
          <span className="tagline-text tagline-text--highlight">
           Trusted Transcription & Language Solutions Delivered with Speed, Clarity, and Consistency
          </span>
          
        </div>
      </div>

      {/* Row 3 */}
      <div className="tagline-row tagline-row--bottom">
        <div className="tagline-track">
          <span className="tagline-text tagline-text--muted">
            Secure, Scalable, and Quality-Driven Services Built for Businesses of Every Size
          </span>
          
        </div>
      </div>
    </section>
  );
};

export default TaglineScroller;
