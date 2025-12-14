import React, { useState, useEffect } from "react"; // <-- Import useState and useEffect
import heroIllustration from "../../assets/services/SummarizationHero.png";
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


const SummarizationHero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact();
    }
  };

  const animatedText = "Summarization"; // <-- The text to be animated
  const typingDelay = 75; // Milliseconds per character

  return (
    <section className="ts-hero">
      <div className="ts-hero__inner">
        {/* LEFT: Illustration */}
        <div className="ts-hero__left">
          <img
            src={heroIllustration}
            alt="Summarization service illustration"
            className="ts-hero__image"
          />
        </div>

        {/* RIGHT: Text content */}
        <div className="ts-hero__right">
          {/* Applying Typewriter to the eyebrow text */}
          <p className="ts-hero__eyebrow">
            <Typewriter text={animatedText} delay={typingDelay} />
          </p>

          <h1 className="ts-hero__title">
            Precision Summaries That Save Time & Deliver Clarity
          </h1>

          <p className="ts-hero__description">
            Our Summarisation Service transforms lengthy, complex content into
            clear, concise, and insightful summaries, without losing meaning,
            context, or critical details. We help you extract the essential
            information you need for faster decision-making, smoother workflows,
            and smarter content consumption across every industry.
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
          <div onClick={handleGetStarted} className="service_button_mobile">
            {/* <Button name="Get Started" /> */}
                        <Button
              name="Get Started"
              paddingXL = "8.6vw"
              paddingXM = "24.5vw"
              widthL = "10.81vw"
              widthM = "30.3vw"
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

export default SummarizationHero;