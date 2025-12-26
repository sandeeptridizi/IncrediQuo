import React from "react";
import "../../appStyles/Services/TranscriptionUserCentric.css";
import headphones from "../../assets/services/headphones.png";
import Board from "../../assets/services/Iconimage.png";
import Group from "../../assets/services/Group.png";
import favorite from "../../assets/services/favorite.png";
import archive from "../../assets/services/archive.png";
// --- simple line icons using inline SVGs ---
const LegalIcon = () => (
  <svg viewBox="0 0 24 24" className="ts-usercentric__icon-svg">
    <path d="M5 11a7 7 0 0 1 14 0" />
    <rect x="4" y="11" width="4" height="7" rx="1" />
    <rect x="16" y="11" width="4" height="7" rx="1" />
  </svg>
);

const FinancialIcon = () => (
  <svg viewBox="0 0 24 24" className="ts-usercentric__icon-svg">
    <path d="M4 19h16" />
    <rect x="5" y="11" width="3" height="6" rx="0.8" />
    <rect x="10.5" y="8" width="3" height="9" rx="0.8" />
    <rect x="16" y="6" width="3" height="11" rx="0.8" />
  </svg>
);

const MedicalIcon = () => (
  <svg viewBox="0 0 24 24" className="ts-usercentric__icon-svg">
    <rect x="6" y="4" width="12" height="16" rx="1.8" />
    <path d="M10 9h4" />
    <path d="M12 7v4" />
    <path d="M9 15h6" />
  </svg>
);

const MediaIcon = () => (
  <svg viewBox="0 0 24 24" className="ts-usercentric__icon-svg">
    <rect x="4" y="6" width="16" height="12" rx="1.5" />
    <path d="M10 10.5 14 13l-4 2.5z" />
    <path d="M8 19h8" />
  </svg>
);

const AcademicIcon = () => (
  <svg viewBox="0 0 24 24" className="ts-usercentric__icon-svg">
    <path d="M3 9.5 12 5l9 4.5-9 4.5z" />
    <path d="M7 11.8V16l5 3 5-3v-4.2" />
    <circle cx="4" cy="14" r="0.7" />
  </svg>
);

const TranscriptionUserCentric = () => {
  return (
    <section className="ts-usercentric">
      <div className="ts-usercentric__inner">
        <h2 className="ts-usercentric__title">Our Transcription Services</h2>
        <p className="ts-usercentric__subtitle">
          Smart, reliable, and high-quality solutions for every need
        </p>

        {/* top row: 3 columns */}
        <div className="ts-usercentric__grid ts-usercentric__grid--top">
          <article className="ts-usercentric__item">
            <div className="ts-usercentric__icon">
              {/* <LegalIcon /> */}
              <img src={headphones} alt="legal" />
            </div>
            <h3>Legal Transcription</h3>
            <p>
              Court hearings, arbitrations, depositions, ODR sessions, and legal
              correspondences.
            </p>
          </article>
          <article className="ts-usercentric__item">
            <div className="ts-usercentric__icon ts-usercentric__icon--small">
              <img src={archive} alt="legal" />
            </div>
            <h3>Media Transcription</h3>
            <p>Interviews, podcasts, documentaries, TV and radio content.</p>
          </article>
          <article className="ts-usercentric__item">
            <div className="ts-usercentric__icon">
              <img src={Group} alt="legal" />
            </div>
            <h3> Finance Transcription</h3>
            <p>Earnings calls, analyst briefings, audits, financial reports.</p>
          </article>
        </div>

        <hr className="ts-usercentric__divider" />

        {/* bottom row: 2 columns, centered */}
        <div className="ts-usercentric__grid ts-usercentric__grid--bottom">
          <article className="ts-usercentric__item">
            <div className="ts-usercentric__icon">
              <img src={favorite} alt="legal" />
            </div>
            <h3>Healthcare Transcription</h3>
            <p>
              Medical reports, patient interviews, doctor dictations, and
              clinical documentation.
            </p>
          </article>
          <article className="ts-usercentric__item">
            <div className="ts-usercentric__icon ts-usercentric__icon--small">
              <img src={Board} alt="legal" />
            </div>
            <h3>Academic Transcription</h3>
            <p>
              Lectures, focus group discussions, student
              interviews, dissertations.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TranscriptionUserCentric;
