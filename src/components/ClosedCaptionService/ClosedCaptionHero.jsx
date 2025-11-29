import React, { useState, useEffect } from "react";
import heroIllustration from "../../assets/services/ClosedCaptionServicePage.png";
import "../../appStyles/Services/TranscriptionHero.css";

import BulbIcon from "../../assets/services/ServiceIcon.png";
import BulbIcon2 from "../../assets/services/Icon1.png";
import { Button } from "../Button/Button";

// Reusable Typewriter Component
const Typewriter = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, delay, text]);

  // Use a span for progressive display to ensure it fits the line correctly
  return (
    <span className="ts-hero__eyebrow-text">
      {displayText}
    </span>
  );
};


const ClosedCaptionHero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact();
    }
  };

  const animatedText = "Closed Captioning & Subtitling";
  const typingDelay = 75; // Milliseconds per character

  return (
    <section className="ts-hero">
      <div className="ts-hero__inner">

        {/* LEFT — illustration */}
        <div className="ts-hero__left">
          <img
            src={heroIllustration}
            alt="Closed captioning & subtitling illustration"
            className="ts-hero__image"
          />
        </div>

        {/* RIGHT — text */}
        <div className="ts-hero__right">
          
          {/* Applying Typewriter to the eyebrow text */}
          <p className="ts-hero__eyebrow">
            <Typewriter text={animatedText} delay={typingDelay} />
          </p>

          <h1 className="ts-hero__title">
            Precision Captioning & Subtitles for a Truly Inclusive Audience
          </h1>

          <p className="ts-hero__description">
            Make your videos accessible, accurate, and globally ready with our
            expertly crafted captions and multilingual subtitles. We ensure
            clarity, timing precision, and compliance so every viewer
            understands your story.
          </p>
          <div className="vg-container">
            <div className="vg-card">
              <div className="innerIMg_bulb">
                <img src={BulbIcon} alt="Vision" className="vg-icon" />
              </div>
              <div className="vg-text">
                <h4>Our Vision</h4>
                <p>Making every word clear, accurate, and dependable</p>
              </div>
            </div>

            <div className="vg-card">
              <div className="innerIMg_bulb">
                <img src={BulbIcon2} alt="Goal" className="vg-icon" />
              </div>
              <div className="vg-text">
                <h4>Our Goal</h4>
                <p>Delivering fast, precise language solutions every time</p>
              </div>
            </div>
          </div>

          {/* <button className="ts-hero__cta" onClick={handleGetStarted}>
            Get Started
          </button> */}
                 <div onClick={handleGetStarted}>
                      {/* <Button name="Get Started" /> */}
                                                                     <Button
              name="Get Started"
              paddingXL="8.6vw"
              paddingXM="24.5vw" // ← mobile padding
              widthL="10.9vw" // ← THIS IS KEY: let content decide width
              widthM="30.3vw" // ← auto width on mobile too
              bacgrounClr="#022447"
              bacgrounArrow="#ffffff"
              colorArrow="#022447"
              colorText="#ffffff"
              colorTextHover="#022447"
            />
                    </div>
        </div>
      </div>
    </section>
  );
};

export default ClosedCaptionHero;
