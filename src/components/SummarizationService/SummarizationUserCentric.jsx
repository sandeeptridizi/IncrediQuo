// src/components/SummarizationService/SummarizationUserCentric.jsx
import React from "react";
import "../../appStyles/Services/SummarizationUserCentric.css";
import headphones from "../../assets/services/headphones.png";
import Board from "../../assets/services/board.png";
import Group from "../../assets/services/Group.png";
import favorite from "../../assets/services/favorite.png";
import archive from "../../assets/services/archive.png";

const LegalIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M7 10v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8" />
    <path d="M9 10V7h6v3" />
    <path d="M9 14h6" />
    <path d="M11 16h2" />
  </svg>
);

const MeetingsIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="5" y="4" width="14" height="16" rx="2" />
    <path d="M9 3v3" />
    <path d="M15 3v3" />
    <path d="M8 11h8" />
    <path d="M8 15h5" />
  </svg>
);

const ReportsIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="7" y="4" width="10" height="16" rx="1.5" />
    <path d="M9.5 9h5" />
    <path d="M9.5 12h5" />
    <path d="M9.5 15h3" />
  </svg>
);

const InterviewsIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 18h16" />
    <rect x="6" y="11" width="2" height="5" rx="0.7" />
    <rect x="10" y="9" width="2" height="7" rx="0.7" />
    <rect x="14" y="7" width="2" height="9" rx="0.7" />
    <path d="M6 8.5 9 7l3 2 4-3" />
  </svg>
);

const SummarizationUserCentric = () => {
  return (
    <section className="cc-usercentric">
      <div className="cc-usercentric__inner">
        <h2 className="cc-usercentric__title">Our Summarization Services</h2>
        <p className="cc-usercentric__subtitle">
          Smart, reliable, and high-quality solutions for every need
        </p>

        <div className="cc-usercentric__grid cc-usercentric__grid--top">
          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <img src={headphones} alt="legal"/>
            </div>
            <h3>Legal proceedings</h3>
            <p>
              Clear, concise summaries of complex legal documents, hearings, and case files to support faster review and informed decisions.
            </p>
          </article>

          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <img src={Board} alt="legal"/>
            </div>
            <h3>Meetings</h3>
            <p>
              Accurate meeting summaries that capture key discussions, action items, and decisions for easy reference and team alignment.
            </p>
          </article>
        </div>

        <hr className="cc-usercentric__divider" />

        <div className="cc-usercentric__grid cc-usercentric__grid--bottom">
          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <img src={archive} alt="legal"/>
            </div>
            <h3>Reports</h3>
            <p>
              Well-structured summaries that distill lengthy reports into essential insights, saving time without losing clarity or context.
            </p>
          </article>

          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <img src={Group} alt="legal"/>
            </div>
            <h3>Interviews</h3>
            <p>
              Focused summaries of interviews that highlight core responses, themes, and takeaways for efficient analysis and documentation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SummarizationUserCentric;
