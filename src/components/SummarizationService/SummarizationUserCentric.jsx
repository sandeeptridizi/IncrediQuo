// src/components/SummarizationService/SummarizationUserCentric.jsx
import React from "react";
import "../../appStyles/Services/SummarizationUserCentric.css";

// Simple line icons
const LegalIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="6" y="9" width="12" height="9" rx="1.5" />
    <path d="M9 12h6" />
    <path d="M11 14.5h2" />
    <path d="M8 9V7h8v2" />
  </svg>
);

const MeetingsIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="5" y="4" width="14" height="16" rx="2" />
    <path d="M9 3v3" />
    <path d="M15 3v3" />
    <path d="M8 11h3" />
    <path d="M13 11h3" />
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

// ✅ new icon that looks like a bar chart + trend line (like your design)
const InterviewsIcon = () => (
  <svg viewBox="0 0 24 24">
    {/* baseline */}
    <path d="M4 18h16" />
    {/* bars */}
    <rect x="6" y="11" width="2" height="5" rx="0.7" />
    <rect x="10" y="9" width="2" height="7" rx="0.7" />
    <rect x="14" y="7" width="2" height="9" rx="0.7" />
    {/* trend line */}
    <path d="M6 8.5 9 7l3 2 4-3" />
  </svg>
);

const SummarizationUserCentric = () => {
  return (
    <section className="cc-usercentric">
      <div className="cc-usercentric__inner">
        <h2 className="cc-usercentric__title">Make every step user-centric</h2>
        <p className="cc-usercentric__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </p>

        {/* TOP ROW */}
        <div className="cc-usercentric__grid cc-usercentric__grid--top">
          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <LegalIcon />
            </div>
            <h3>Legal proceedings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </article>

          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <MeetingsIcon />
            </div>
            <h3>Meetings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </article>
        </div>

        {/* BOTTOM ROW */}
        <div className="cc-usercentric__grid cc-usercentric__grid--bottom">
          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <ReportsIcon />
            </div>
            <h3>Reports</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </article>

          <article className="cc-usercentric__item">
            <div className="cc-usercentric__icon">
              <InterviewsIcon />
            </div>
            <h3>Interviews</h3>
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

export default SummarizationUserCentric;
