// src/components/HomePage/Hero.jsx
import React from "react";
import "../../appStyles/HomePageStyles/Hero.css";
import heroIllustration from "../../assets/hero/hero-illustration.png";

const Hero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact(); // this will show the ContactSection popup
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Transcriptions That Speak Your Accuracy</h1>
          <p className="hero__subtitle">
            IncrediQuo Solutions offers professional transcription services with exceptional accuracy. Whether it's corporate meetings, academic lectures, market research, podcasts, or legal discussions, we deliver high-quality transcripts that are precise, secure, and fast.
          </p>
          <button className="hero__button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>

        <div className="hero__image">
          <img src={heroIllustration} alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
