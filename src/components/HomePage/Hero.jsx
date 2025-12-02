import React, { useEffect, useRef, useState } from "react";
import "../../appStyles/HomePageStyles/Hero.css";

// hero images
import imgMedical from "../../assets/hero/Medical.jpg";
import imgMedia from "../../assets/hero/Media.jpeg";
import imgLegalTrans from "../../assets/hero/Legal transcription.jpg";
import imgLegal from "../../assets/hero/Legal.jpg";
import imgFinancial from "../../assets/hero/Financial transcription .png";

import { Button } from "../Button/Button";

const images = [imgMedical, imgMedia, imgLegalTrans, imgLegal, imgFinancial];

// typing animation constants
const LINE1_TEXT = "Transcriptions That ";
const LINE2_TEXT = "Speak Your Accuracy";

const TYPING_TIME_PER_CHAR = 0.08;
const TYPING_TIME_LINE1 = LINE1_TEXT.length * TYPING_TIME_PER_CHAR;
const TYPING_TIME_LINE2 = LINE2_TEXT.length * TYPING_TIME_PER_CHAR;
const CURSOR_START_TIME = TYPING_TIME_LINE1 + 1 + TYPING_TIME_LINE2;

const Hero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") onOpenContact();
  };
const isMobile = window.innerWidth <= 720;

  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO-SCROLL
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children);
    if (!slides.length) return;

    let index = 0;
    const total = slides.length;

    const interval = setInterval(() => {
      index = (index + 1) % total;
      setActiveIndex(index);
      track.scrollTo({
        left: slides[index].offsetLeft,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // CLICK ON DOT MANUAL SCROLL
  const jumpTo = (i) => {
    const track = trackRef.current;
    const slides = Array.from(track.children);
    setActiveIndex(i);
    track.scrollTo({
      left: slides[i].offsetLeft,
      behavior: "smooth",
    });
  };

  const openCalendly = () => {
    window.open(
      "https://calendly.com/shashank-incrediquosolutions/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        {/* LEFT */}
        <div className="hero__content">
          <h1 className="hero__title typewriter-multi-line">
            <span
              className="line-1"
              style={{
                "--line-char-count": LINE1_TEXT.length,
                "--line-time": `${TYPING_TIME_LINE1}s`,
                "--line-delay": `1s`,
              }}
            >
              {LINE1_TEXT}
            </span>
            <span
              className="line-2"
              style={{
                "--line-char-count": LINE2_TEXT.length,
                "--line-time": `${TYPING_TIME_LINE2}s`,
                "--line-delay": `${TYPING_TIME_LINE1 + 1}s`,
              }}
            >
              {LINE2_TEXT}
              <span
                className="cursor-visual"
                style={{ "--cursor-start": `${CURSOR_START_TIME}s` }}
              ></span>
            </span>
          </h1>

          <p className="hero__subtitle">
            IncrediQuo Solutions offers professional transcription services with
            exceptional accuracy. Whether it's corporate meetings, academic
            lectures, market research, podcasts, or legal discussions, we
            deliver high-quality transcripts that are precise, secure, and fast.
          </p>

          {/* ---- BUTTONS ---- */}
          <div className="hero__buttons">
            {/* Get Started */}
            <div onClick={handleGetStarted}>
              <Button
                name="Get Started"
                paddingXL="8.6vw"
                paddingXM="24.5vw"
                widthL="10.87vw"
                widthM="30.3vw"
                bacgrounClr="#022447"
                bacgrounArrow="#ffffff"
                colorArrow="#022447"
                colorText="#ffffff"
                colorTextHover="#022447"
              />
            </div>

            {/* Schedule Appointment (Calendly) */}
            <div onClick={openCalendly}>
              <Button
                name="Schedule Appointment"
                // paddingXL="14vw"
                paddingXM="22vw"
                widthL="15.8vw"
                // widthM="48vw"
                  paddingXL={isMobile ? "14vw" : "14vw"}
    // paddingXM={isMobile ? "22vw" : "22vw"}
    // widthL={isMobile ? "44vw" : "15.8vw"}
    widthM={isMobile ? "48vw" : "44vw"}
                bacgrounClr="#022447"
                bacgrounArrow="#ffffff"
                colorArrow="#022447"
                colorText="#ffffff"
                colorTextHover="#022447"
              />
            </div>
          </div>
        </div>

        {/* RIGHT — SCROLLABLE IMAGES */}
        <div className="hero__image">
          <div className="hero__image-track" ref={trackRef}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="hero__image-main"
                alt={`Slide ${i}`}
              />
            ))}
          </div>

          {/* POINTER DOTS */}
          <div className="hero__dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`hero__dot ${
                  activeIndex === i ? "active" : ""
                }`}
                onClick={() => jumpTo(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
