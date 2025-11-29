import React from "react";
import heroIllustration from "../../assets/services/Additionalsupport.png";
import "../../appStyles/Services/TranscriptionHero.css";

import BulbIcon from "../../assets/services/ServiceIcon.png";
import BulbIcon2 from "../../assets/services/Icon1.png";
import { Button } from "../Button/Button";

const AdditionalSupportHero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact();
    }
  };

  return (
    <section className="ts-hero">
      <div className="ts-hero__inner">
        <div className="ts-hero__left">
          <img src={heroIllustration} alt="Additional Support illustration" className="ts-hero__image" />
        </div>

        <div className="ts-hero__right">
          <p className="ts-hero__eyebrow">Additional Support</p>

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

          {/* <button className="ts-hero__cta" onClick={handleGetStarted}>
            Get Started
          </button> */}
            <div onClick={handleGetStarted}>
                      {/* <Button name="Get Started" /> */}
                                                                     <Button
              name="Get Started"
              paddingXL="8.6vw"
              paddingXM="24.5vw" // ← mobile padding
              widthL="10.8vw" // ← THIS IS KEY: let content decide width
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

export default AdditionalSupportHero;
