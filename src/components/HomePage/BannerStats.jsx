// BannerStats.jsx
import React from "react";
import "../../appStyles/HomePageStyles/BannerStats.css";
import { Button } from "../Button/Button";

const LINE1_TEXT = "Flexible Work Modes Designed for Your"; // 36 characters
const LINE2_TEXT = "Every Deadline"; // 14 characters

// Define animation times 
const TYPING_TIME_PER_CHAR = 0.08; // 80ms per character
const TYPING_TIME_LINE1 = LINE1_TEXT.length * TYPING_TIME_PER_CHAR; // 2.88s
const TYPING_TIME_LINE2 = LINE2_TEXT.length * TYPING_TIME_PER_CHAR; // 1.12s
const INITIAL_DELAY = 0.9; // Matches the fadeUp animation time

const BannerStats = ({ onOpenContact }) => {
  const handleClick = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact(); // open popup like Hero
    }
  };

  // Cursor blinking starts after all typing is done (Initial Delay + Line 1 time + Line 2 time)
  const CURSOR_START_TIME = INITIAL_DELAY + TYPING_TIME_LINE1 + TYPING_TIME_LINE2; 

  return (
    <section className="banner">
      <div className="banner__inner">
        {/* LEFT SIDE PILL STRIPES */}
        <div className="banner__stripes">
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
        </div>

        <div className="banner__text">
          <h2 className="typewriter-multi-line">
            {/* LINE 1 */}
            <span
              className="line-1"
              style={{
                '--line-char-count': LINE1_TEXT.length,
                '--line-time': `${TYPING_TIME_LINE1}s`,
                '--line-delay': `${INITIAL_DELAY + 0.1}s`, // Start after fadeUp + small stagger
              }}
            >
              {LINE1_TEXT}
            </span>
            {/* LINE 2 - Includes the zero-width cursor element */}
            <span
              className="line-2"
              style={{
                '--line-char-count': LINE2_TEXT.length,
                '--line-time': `${TYPING_TIME_LINE2}s`,
                // Start Line 2 animation right after Line 1 time + Line 1 delay
                '--line-delay': `${TYPING_TIME_LINE1 + INITIAL_DELAY + 0.1}s`, 
              }}
            >
              {LINE2_TEXT}
              {/* Dedicated cursor element at the end of the last line */}
              <span 
                className="cursor-visual"
                style={{ 
                    '--cursor-start': `${CURSOR_START_TIME + 0.1}s`, // Start blinking right after typing is done
                }}
              ></span>
            </span>
          </h2>
          <p>
            At IncrediQuo Solutions, we adapt to your pace not the other way
            around. Whether you need fast, real-time accuracy or structured
            delivery, our flexible service modes ensure your transcription and
            language solutions arrive exactly when you need them.
          </p>
          <div onClick={handleClick}>
            <Button
              name="Get Started"
              paddingXL="8.6vw"
              paddingXM="24.5vw"
              widthL="10.7vw"
              widthM="30.3vw"
              bacgrounClr="#ffff"
              bacgrounArrow="#022447"
              colorArrow="#ffff"
              colorText="#022447"
              colorTextHover="#ffff"
            />
          </div>
        </div>

        <div className="banner__ticker">
          <div className="banner__ticker-track">
            <span>24 Hours</span>
            <span>Real-time</span>
            <span>Custom / As per Client Requirement</span>

            {/* duplicate items for infinite loop */}
            <span>24 Hours</span>
            <span>Real-time</span>
            <span>Custom / As per Client Requirement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerStats;