import React, { useState, useEffect } from "react"; // <-- Import useState and useEffect
import heroIllustration from "../../assets/transcription/Mask group.png";
import "../../appStyles/Services/TranscriptionHero.css";

// Icons used in cards
import BulbIcon from "../../assets/services/ServiceIcon.png";
import BulbIcon2 from "../../assets/services/Icon1.png";
import { Button } from "../Button/Button";

// Typewriter Component for the animation
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

  // Only returns the progressively displayed text
  return (
    <span className="ts-hero__eyebrow-text">
      {displayText}
    </span>
  );
};


const TranscriptionHero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact(); // open popup modal
    }
  };

  const animatedText = "Transcription Services";
  const typingDelay = 75; // Milliseconds per character (Slightly slower for eyebrow)

  return (
    <section className="ts-hero">
      <div className="ts-hero__inner">

        {/* LEFT — Illustration */}
        <div className="ts-hero__left">
          <img
            src={heroIllustration}
            alt="Transcription service illustration"
            className="ts-hero__image"
          />
        </div>

        {/* RIGHT — Text */}
        <div className="ts-hero__right">
          
          {/* APPLYING TYPEWRITER HERE */}
          <p className="ts-hero__eyebrow">
            <Typewriter text={animatedText} delay={typingDelay} />
          </p>

          <h1 className="ts-hero__title">
            Precision-Driven Language
            <br />
            Services You Can Trust
          </h1>
          <p className="ts-hero__description">
            IncrediQuo Solutions delivers high-accuracy transcription,
            captioning, summarisation, and language support designed for modern
            business needs. Fast, reliable, and powered by expert professionals.
          </p>

          {/* CARDS */}
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

          {/* CTA BUTTON */}
          {/* <button className="ts-hero__cta" onClick={handleGetStarted}>
            Get Started
          </button> */}
                <div onClick={handleGetStarted}>
            <Button name="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranscriptionHero;
