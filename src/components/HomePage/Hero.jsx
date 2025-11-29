// src/components/HomePage/Hero.jsx
import React from "react";
import "../../appStyles/HomePageStyles/Hero.css";
import heroIllustration from "../../assets/hero/hero-illustration.png";
import { Button } from "../Button/Button";

const LINE1_TEXT = "Transcriptions That "; // 20 characters
const LINE2_TEXT = "Speak Your Accuracy"; // 19 characters

// Define animation times 
const TYPING_TIME_PER_CHAR = 0.08; // 80ms per character
const TYPING_TIME_LINE1 = LINE1_TEXT.length * TYPING_TIME_PER_CHAR; // 1.6s
const TYPING_TIME_LINE2 = LINE2_TEXT.length * TYPING_TIME_PER_CHAR; // 1.52s

const Hero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact(); // this will show the ContactSection popup
    }
  };

  // Cursor blinking starts after all typing is done (Line 1 delay + Line 1 time + Line 2 time)
  const CURSOR_START_TIME = TYPING_TIME_LINE1 + 1 + TYPING_TIME_LINE2; 

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title typewriter-multi-line">
            {/* LINE 1 */}
            <span
              className="line-1"
              style={{
                '--line-char-count': LINE1_TEXT.length,
                '--line-time': `${TYPING_TIME_LINE1}s`,
                '--line-delay': `1s`, // Start after 1 second
              }}
            >
              {LINE1_TEXT}
            </span>
            {/* LINE 2 - Now includes the dedicated cursor element */}
            <span
              className="line-2"
              style={{
                '--line-char-count': LINE2_TEXT.length,
                '--line-time': `${TYPING_TIME_LINE2}s`,
                '--line-delay': `${TYPING_TIME_LINE1 + 1}s`, // Start after line 1 finishes
              }}
            >
              {LINE2_TEXT}
              {/* Dedicated cursor element that starts blinking after the total typing time */}
              <span 
                className="cursor-visual"
                style={{ 
                    '--cursor-start': `${CURSOR_START_TIME}s`,
                }}
              ></span>
            </span>
          </h1>
          <p className="hero__subtitle">
            IncrediQuo Solutions offers professional transcription services with exceptional accuracy. Whether it's corporate meetings, academic lectures, market research, podcasts, or legal discussions, we deliver high-quality transcripts that are precise, secure, and fast.
          </p>
          <div onClick={handleGetStarted}>
            <Button name="Get Started" />
          </div>
        </div>

        <div className="hero__image">
          <img src={heroIllustration} alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;