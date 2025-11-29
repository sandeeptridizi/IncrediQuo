// src/components/HomePage/Hero.jsx
import React from "react";
import "../../appStyles/HomePageStyles/Hero.css";
import heroIllustration from "../../assets/hero/hero-illustration.png";
import heroWave from "../../assets/hero/Frame 2301.png"; // <-- waveform image
import { Button } from "../Button/Button";

const Hero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact();
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Transcriptions That Speak Your Accuracy</h1>
          <p className="hero__subtitle">
            IncrediQuo Solutions offers professional transcription services with
            exceptional accuracy. Whether it's corporate meetings, academic
            lectures, market research, podcasts, or legal discussions, we
            deliver high-quality transcripts that are precise, secure, and fast.
          </p>

          <div onClick={handleGetStarted}>
            <Button name="Get Started" />
          </div>
        </div>

        <div className="hero__image">
          {/* main illustration */}
          <img
            src={heroIllustration}
            alt="Hero Illustration"
            className="hero__image-main"
          />

          {/* waveform overlay (108 x 82 in Figma) */}
          <img
            src={heroWave}
            alt="Audio waveform"
            className="hero__wave"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
