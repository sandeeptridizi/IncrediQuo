import React, { useEffect, useRef, useState } from "react";
import "../../appStyles/HomePageStyles/Hero.css";
import imgMedical from "../../assets/hero/Medical.jpg";
import imgMedia from "../../assets/hero/Media.jpeg";
import imgLegalTrans from "../../assets/hero/Legal transcription.jpg";
import imgLegal from "../../assets/hero/Legal.jpg";
import imgFinancial from "../../assets/hero/Financial transcription .png";
import { Button } from "../Button/Button";
import imgLegal1 from "../../assets/hero/Legal1.png";
import imgLegal2 from "../../assets/hero/Legal2.png";
import imgLegal5 from "../../assets/hero/Legal5.png";
const images = [
imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,


imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,

imgLegal2,
imgMedical,
imgLegal,
imgMedia,
imgLegal5,
imgLegalTrans,
imgLegal1,
imgFinancial,
];
const LINE1_TEXT = "Transcriptions That ";
const LINE2_TEXT = "Speak Your Accuracy";

const TYPING_TIME_PER_CHAR = 0.08;
const TYPING_TIME_LINE1 = LINE1_TEXT.length * TYPING_TIME_PER_CHAR;
const TYPING_TIME_LINE2 = LINE2_TEXT.length * TYPING_TIME_PER_CHAR;
const CURSOR_START_TIME = TYPING_TIME_LINE1 + 1 + TYPING_TIME_LINE2;

const Typewriter = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return <span className="about-hero__highlight2">{displayText}</span>;
};

const Hero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") onOpenContact();
  };

  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);  

  const loopImages = [...images, ...images]; // double images

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slideWidth = track.clientWidth; // important!!!

    track.scrollTo({
      left: activeIndex * slideWidth,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const animatedText = "Free Sample Transcript ";
  const typingDelay = 50;

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
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

          <div className="hero__buttons">
            <p className="hero__sample-text">
              {/* <span className="transciptColorchnage">Free Sample Transcript
              </span> */}
              <Typewriter text={animatedText} delay={typingDelay} />
            </p>
            <p className="hero__sample-text2">
              Get a short sample transcript absolutely free. It is the easiest
              way to see our accuracy and attention to detail before you commit
            </p>

            <div onClick={handleGetStarted} className="home_hero_getstart_button">
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
          </div>
        </div>

        <div className="hero__image">
          <div className="hero__image-wrapper">
            <div className="hero__image-bg"></div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
