// src/components/ClosedCaptionService/ClosedCaptionUserCentric.jsx
import React from "react";
import "../../appStyles/Services/ClosedCaptionUserCentric.css";

/* === ICONS UPDATED TO MATCH DESIGN === */

const BroadcastIcon = () => (
  <svg viewBox="0 0 24 24">
    {/* headband */}
    <path d="M7 10a5 5 0 0 1 10 0" />
    {/* left ear cup */}
    <rect x="6" y="10" width="2.4" height="6" rx="1.1" />
    {/* right ear cup */}
    <rect x="15.6" y="10" width="2.4" height="6" rx="1.1" />
  </svg>
);

const StreamingIcon = () => (
  <svg viewBox="0 0 24 24">
    {/* base line */}
    <path d="M4 19h16" />
    {/* bars */}
    <rect x="5.2" y="11" width="2.3" height="6" rx="0.8" />
    <rect x="10.1" y="9" width="2.3" height="8" rx="0.8" />
    <rect x="15" y="7" width="2.3" height="10" rx="0.8" />
    {/* trending arrow on top */}
    <path d="M6 7.5 9 5l3 2.5 4-3" />
    <path d="M16 4.5h2v2" />
  </svg>
);

const DigitalMediaIcon = () => (
  <svg viewBox="0 0 24 24">
    {/* outer device */}
    <rect x="7" y="5" width="10" height="14" rx="1.8" />
    {/* top small bar */}
    <rect x="9" y="7" width="6" height="2" rx="0.6" />
    {/* three vertical blocks */}
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
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </p>

        <div className="cc-usercentric__grid">
          {/* Broadcast */}
          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <BroadcastIcon />
            </div>
            <h3>Broadcast</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </article>

          {/* Streaming */}
          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <StreamingIcon />
            </div>
            <h3>Streaming</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </article>

          {/* Digital Media */}
          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <DigitalMediaIcon />
            </div>
            <h3>Digital Media</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ClosedCaptionUserCentric;
