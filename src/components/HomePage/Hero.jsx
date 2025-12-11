import React, { useEffect, useRef, useState } from "react";
import "../../appStyles/HomePageStyles/Hero.css";
import imgMedical from "../../assets/hero/Medical.jpg";
import imgMedia from "../../assets/hero/Media.jpeg";
import imgLegalTrans from "../../assets/hero/Legal transcription.jpg";
import imgLegal from "../../assets/hero/Legal.jpg";
import imgFinancial from "../../assets/hero/Financial transcription .png";
import { Button } from "../Button/Button";

const images = [imgMedical, imgMedia, imgLegalTrans, imgLegal, imgFinancial];
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

  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  // collect original slides (before cloning)
  const originalSlides = Array.from(track.children);
  if (originalSlides.length === 0) return;

  const originalCount = originalSlides.length;

  // clone slides to create seamless loop
  originalSlides.forEach((node) => {
    const clone = node.cloneNode(true);
    track.appendChild(clone);
  });

  // compute slide width (including gap)
  const computed = getComputedStyle(track);
  const gap = parseFloat(computed.gap || computed.columnGap) || 18;
  const slideWidth = originalSlides[0].offsetWidth + gap;

  // make sure start at beginning
  track.scrollLeft = 0;
  track.style.scrollBehavior = "smooth";

  let isResetting = false;
  let autoInterval = null;

  // helper to update active index (0..originalCount-1)
  const updateActiveFromScroll = () => {
    const rawIndex = Math.round(track.scrollLeft / slideWidth);
    // keep within original range
    const idx = rawIndex % originalCount;
    setActiveIndex(idx < 0 ? 0 : idx);
  };

  // auto-scroll one slide forward every 3s
  autoInterval = setInterval(() => {
    // don't try to scroll while we're mid-reset
    if (isResetting) return;
    track.scrollBy({ left: slideWidth, behavior: "smooth" });
  }, 3000);

  // listener to detect when we've passed the original set
  const onScroll = () => {
    updateActiveFromScroll();

    // if we've scrolled past half (original set length), reset seamlessly
    if (!isResetting && track.scrollLeft >= track.scrollWidth / 2) {
      isResetting = true;

      // compute new position: subtract half of scrollWidth (the original set)
      const newLeft = track.scrollLeft - track.scrollWidth / 2;

      // turn off smooth, jump instantly, then turn smooth back on
      track.style.scrollBehavior = "auto";
      track.scrollLeft = newLeft;

      // next frame re-enable smooth and clear resetting flag
      requestAnimationFrame(() => {
        // small timeout to ensure the instant jump is painted
        requestAnimationFrame(() => {
          track.style.scrollBehavior = "smooth";
          isResetting = false;
        });
      });
    }
  };

  track.addEventListener("scroll", onScroll, { passive: true });

  // initial active index set
  updateActiveFromScroll();

  return () => {
    clearInterval(autoInterval);
    track.removeEventListener("scroll", onScroll);
    // optional: remove clones if component unmounts (keeps DOM clean)
    // remove last originalCount children (the clones)
    for (let i = 0; i < originalCount; i++) {
      const last = track.lastElementChild;
      if (last) track.removeChild(last);
    }
  };
}, []); // eslint-disable-line react-hooks/exhaustive-deps



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
              Free Sample Transcript - Get a short sample transcript absolutely
              free. It is the easiest way to see our accuracy and attention to
              detail before you commit
            </p>

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
