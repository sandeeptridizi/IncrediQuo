
import React, { useEffect, useState } from "react";
import "../../appStyles/HomePageStyles/TaglineScroller.css";
import taglineWave from "../../assets/hero/Frame 2301.png"; 

const lines = [
  {
    text: "Human Precision + Smart Technology = 99% Accuracy Every Time",
    className: "tagline-text tagline-text--muted",
    rowClass: "tagline-row tagline-row--top",
  },
  {
    text: "Trusted Transcription & Language Solutions Delivered with Speed, Clarity, and Consistency",
    className: "tagline-text tagline-text--highlight",
    rowClass: "tagline-row tagline-row--middle",
  },
  {
    text: "Secure, Scalable, and Quality-Driven Services Built for Businesses of Every Size",
    className: "tagline-text tagline-text--muted",
    rowClass: "tagline-row tagline-row--bottom",
  },
];

const TaglineScroller = () => {
  const [activeAnimations, setActiveAnimations] = useState([
    false,
    false,
    false,
  ]);

  useEffect(() => {
    lines.forEach((_, index) => {
      setTimeout(() => {
        setActiveAnimations((prev) => {
          const copy = [...prev];
          copy[index] = true;
          return copy;
        });
      }, index * 2000);
    });
  }, []);

  return (
    <section className="tagline-section">
      {lines.map((item, index) => (
        <div key={index} className={item.rowClass}>
          <div
            className={`tagline-track ${
              activeAnimations[index] ? "animate" : ""
            }`}
          >
            {[0, 1, 2].map((i) => (
              <span className="tagline-item" key={i}>
                <span className={item.className}>{item.text}</span>
                {/* <img
                 src={taglineWave}
                  alt="audio wave"
                  className="tagline-wave"
                /> */}
                <img
                  src={taglineWave}
                  alt="audio wave"
                  className={`tagline-wave ${
                    index === 1 ? "wave-pink" : "wave-blue"
                  }`}
                />
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TaglineScroller;
