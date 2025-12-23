import React from "react";
import "../../appStyles/HomePageStyles/BannerStats.css";
import { Button } from "../Button/Button";

const LINE1_TEXT = "Flexible Work Modes Designed for Your"; 
const LINE2_TEXT = " Every Deadline"; 
const TYPING_TIME_PER_CHAR = 0.08; 
const TYPING_TIME_LINE1 = LINE1_TEXT.length * TYPING_TIME_PER_CHAR; 
const TYPING_TIME_LINE2 = LINE2_TEXT.length * TYPING_TIME_PER_CHAR; 
const INITIAL_DELAY = 0.9; 

const BannerStats = ({ onOpenContact }) => {
  const handleClick = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact(); 
    }
  };

  const CURSOR_START_TIME = INITIAL_DELAY + TYPING_TIME_LINE1 + TYPING_TIME_LINE2; 

  return (
    <section className="banner">
      <div className="banner__inner">
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
            <span
              className="line-1"
              style={{
                '--line-char-count': LINE1_TEXT.length,
                '--line-time': `${TYPING_TIME_LINE1}s`,
                '--line-delay': `${INITIAL_DELAY + 0.1}s`,
              }}
            >
              {LINE1_TEXT}
            </span>
            
            <span
              className="line-2"
              style={{
                '--line-char-count': LINE2_TEXT.length,
                '--line-time': `${TYPING_TIME_LINE2}s`,
                '--line-delay': `${TYPING_TIME_LINE1 + INITIAL_DELAY + 0.1}s`,
              }}
            >
              {LINE2_TEXT}
              <span 
                className="cursor-visual"
                style={{ 
                    '--cursor-start': `${CURSOR_START_TIME + 0.1}s`, 
                }}
              />
            </span>
          </h2>

          <p>
            IncrediQuo Solutions provides legal and arbitration transcription services for law firms, arbitral institutions, courts, and dispute resolution providers worldwide. We deliver accurate transcripts for hearings, court proceedings, depositions, mediations, witness examinations, oral submissions, and procedural conferences, fully compliant with jurisdiction-specific formatting, confidentiality, and turnaround requirements. We also support the financial sector, media and broadcast, education, research, and other industries.
          </p>

          <div onClick={handleClick} className="home_hero_button_flesible">
            <Button
              name="Get Started"
              paddingXL="8.6vw"
              paddingXM="24.5vw" 
              widthL="10.9vw"    
              widthM="30.3vw"   
              bacgrounClr="#ffffff"
              bacgrounArrow="#022447"
              colorArrow="#ffffff"
              colorText="#022447"
              colorTextHover="#ffffff"
            />
          </div>
        </div>

        <div className="banner__ticker">
          <div className="banner__ticker-track">
            <span>Real-time</span>
            <span>Near Real-time</span>
            <span>24-hours</span>
            <span>Custom / As per Client Requirement</span>

            {/* duplicate items for infinite loop */}
            <span>Real-time</span>
            <span>Near Real-time</span>
            <span>24-hours</span>
            <span>Custom / As per Client Requirement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerStats;
