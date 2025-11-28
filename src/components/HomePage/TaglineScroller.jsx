// src/components/HomePage/TaglineScroller.jsx
import React, { useEffect, useState } from "react";
import "../../appStyles/HomePageStyles/TaglineScroller.css";

const lines = [
  {
    text: "Human Precision + Smart Technology = 99% Accuracy Every Time",
    className: "tagline-text tagline-text--muted",
    rowClass: "tagline-row tagline-row--top"
  },
  {
    text: "Trusted Transcription & Language Solutions Delivered with Speed, Clarity, and Consistency",
    className: "tagline-text tagline-text--highlight",
    rowClass: "tagline-row tagline-row--middle"
  },
  {
    text: "Secure, Scalable, and Quality-Driven Services Built for Businesses of Every Size",
    className: "tagline-text tagline-text--muted",
    rowClass: "tagline-row tagline-row--bottom"
  }
];

const TaglineScroller = () => {
  const [activeAnimations, setActiveAnimations] = useState([false, false, false]);

  useEffect(() => {
    // Start animations with 5-second gaps
    lines.forEach((_, index) => {
      setTimeout(() => {
        setActiveAnimations((prev) => {
          const copy = [...prev];
          copy[index] = true;
          return copy;
        });
      }, index * 2000); // 5 sec difference between lines
    });
  }, []);

  return (
    <section className="tagline-section">
      {lines.map((item, index) => (
        <div key={index} className={item.rowClass}>
          <div className={`tagline-track ${activeAnimations[index] ? "animate" : ""}`}>
            <span className={item.className}>{item.text}</span>
            {/* Duplicate for smooth infinite scrolling */}
            <span className={item.className}>{item.text}</span>
                        <span className={item.className}>{item.text}</span>

          </div>
        </div>
      ))}
    </section>
  );
};

export default TaglineScroller;
