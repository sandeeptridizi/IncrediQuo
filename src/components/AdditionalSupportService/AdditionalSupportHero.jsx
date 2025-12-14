import React, { useState, useEffect } from "react"; 
import heroIllustration from "../../assets/services/Additionalsupport.png";
import "../../appStyles/Services/TranscriptionHero.css";

import BulbIcon from "../../assets/services/ServiceIcon.png";
import BulbIcon2 from "../../assets/services/Icon1.png";
import { Button } from "../Button/Button";

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
  }, [currentIndex, delay, text]);
  return (
    <span className="ts-hero__eyebrow-text">
      {displayText}
    </span>
  );
};

const AdditionalSupportHero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact();
    }
  };

  const animatedText = "Additional Support"; 
  const typingDelay = 75; 

  return (
    <section className="ts-hero">
      <div className="ts-hero__inner">
        <div className="ts-hero__left">
          <img src={heroIllustration} alt="Additional Support illustration" className="ts-hero__image" />
        </div>

        <div className="ts-hero__right">
          
          <p className="ts-hero__eyebrow">
            <Typewriter text={animatedText} delay={typingDelay} />
          </p>

          <h1 className="ts-hero__title">
            Reliable Language Support Beyond Transcription
          </h1>

          <p className="ts-hero__description">
            Get comprehensive assistance tailored to your content needs—quality
            checks, formatting support, linguistic enhancements, and specialized
            documentation to ensure every file you deliver is polished,
            accurate, and ready for use.
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

          <div onClick={handleGetStarted} className="service_button_mobile">
            <Button
  name="Get Started"
  paddingXL = "8.6vw"
  paddingXM = "24.5vw"
  widthL = "10.85vw"
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

export default AdditionalSupportHero;