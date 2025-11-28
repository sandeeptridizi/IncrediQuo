import React from "react";
import "../../appStyles/Services/ClosedCaptionUserCentric.css";
import headphones from "../../assets/services/headphones.png";
import Board from "../../assets/services/Iconimage.png";
import Group from "../../assets/services/Group.png";
import favorite from "../../assets/services/favorite.png";
import archive from "../../assets/services/archive.png";
/* === ICONS UPDATED TO MATCH DESIGN === */

const BroadcastIcon = () => (
  <svg viewBox="0 0 24 24" className="cc-icon" width="39.6" height="44">
    <path d="M7 10a5 5 0 0 1 10 0" />
    <rect x="6" y="10" width="2.4" height="6" rx="1.1" />
    <rect x="15.6" y="10" width="2.4" height="6" rx="1.1" />
  </svg>
);

const StreamingIcon = () => (
  <svg viewBox="0 0 24 24" className="cc-icon" width="39.6" height="44">
    <path d="M4 19h16" />
    <rect x="5.2" y="11" width="2.3" height="6" rx="0.8" />
    <rect x="10.1" y="9" width="2.3" height="8" rx="0.8" />
    <rect x="15" y="7" width="2.3" height="10" rx="0.8" />
    <path d="M6 7.5 9 5l3 2.5 4-3" />
    <path d="M16 4.5h2v2" />
  </svg>
);

const DigitalMediaIcon = () => (
  <svg viewBox="0 0 24 24" className="cc-icon" width="39.6" height="44">
    <rect x="7" y="5" width="10" height="14" rx="1.8" />
    <rect x="9" y="7" width="6" height="2" rx="0.6" />
    <rect x="9" y="11" width="1.7" height="4" rx="0.5" />
    <rect x="11.7" y="11" width="1.7" height="4" rx="0.5" />
    <rect x="14.4" y="11" width="1.7" height="4" rx="0.5" />
  </svg>
);

const ClosedCaptionUserCentric = () => {
  return (
    <section className="cc-usercentric">
      <div className="cc-usercentric__inner">
        <h2 className="cc-usercentric__title">Make every step user-centric</h2>
        <p className="cc-usercentric__subtitle">
            Smart, reliable, and high-quality solutions for every need
        </p>

        <div className="cc-usercentric__grid">
          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <img src={headphones} alt="legal"/>
            </div>
            <h3>Broadcast</h3>
            <p>
             Delivering broadcast-ready captions and subtitles that meet industry standards for clarity, speed, and accuracy.
            </p>
          </article>

          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <img src={Group} alt="legal"/>
            </div>
            <h3>Streaming</h3>
            <p>
              High-precision captions and subtitles optimized for OTT and on-demand platforms to enhance accessibility and viewer engagement.
            </p>
          </article>

          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <img src={Board} alt="legal"/>
            </div>
            <h3>Digital Media</h3>
            <p>
              Fast, accurate captioning and subtitling for all digital content—from social videos to promos crafted for global reach and compliance.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ClosedCaptionUserCentric;
