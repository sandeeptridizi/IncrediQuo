import React from "react";
import "../../appStyles/Services/AdditionalSupportUserCentric.css";
import headphones from "../../assets/services/headphones.png";
import Board from "../../assets/services/Iconimage.png";
import Group from "../../assets/services/Group.png";
import favorite from "../../assets/services/favorite.png";
import archive from "../../assets/services/archive.png";
/* Icons */
const TimecodingIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="7" />
    <path d="M12 9v4l2 2" />
    <path d="M5 5.5 7 7" />
  </svg>
);

const ExhibitIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 19h16" />
    <rect x="5" y="11" width="3" height="6" rx="0.8" />
    <rect x="10.5" y="8" width="3" height="9" rx="0.8" />
    <rect x="16" y="6" width="3" height="11" rx="0.8" />
  </svg>
);

const QualityIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="5" y="6" width="14" height="12" rx="2" />
    <path d="M9 10h6" />
    <path d="M9 13h4" />
    <path d="M7 6V4h3" />
  </svg>
);

const AdditionalSupportUserCentric = () => {
  return (
    <section className="as-usercentric">
      <div className="as-usercentric__inner">
        <h2 className="as-usercentric__title">Our Additional Support Services</h2>
        <p className="as-usercentric__subtitle">
          Smart, reliable, and high-quality solutions for every need
        </p>

        <div className="as-usercentric__grid">
          <article className="as-usercentric__item">
            <div className="as-usercentric__icon">
              <img src={headphones} alt="legal"/>
            </div>
            <h3>Timecoding &amp; Speaker Labels</h3>
            <p>
              Accurate timestamps and clear speaker identification to keep your transcripts organized and easy to navigate.
            </p>
          </article>

          <article className="as-usercentric__item">
            <div className="as-usercentric__icon">
              <img src={Group} alt="legal"/>
            </div>
            <h3>Exhibit Marking &amp; Indexing</h3>
            <p>
              Systematic labeling and indexing of exhibits for seamless reference in legal, corporate, or research-based workflows.
            </p>
          </article>

          <article className="as-usercentric__item">
            <div className="as-usercentric__icon">
              <img src={Board} alt="legal"/>
            </div>
            <h3>Quality Review &amp; Proofing</h3>
            <p>
              Thorough proofreading and multi-level checks to ensure your files are polished, precise, and error-free.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSupportUserCentric;
