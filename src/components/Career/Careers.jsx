// Careers.jsx
import React, { useState } from "react";
import "../../appStyles/Career/Careers.css";

import CareerHero from "./CareerHero";
import HowItWorks from "./HowItWorks";
import FeaturedJobs from "./FeaturedJobs";
import BottomSection from "./BottomSection";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const openPopup = (job) => {
    setSelectedJob(job);
  };

  const closePopup = () => {
    setSelectedJob(null);
  };

  return (
    <div className="careers-page page-animate" id="careers">
      <CareerHero />
      <HowItWorks />

      {/* pass function to child */}
      <FeaturedJobs openPopup={openPopup} />

      <BottomSection />

      {selectedJob && (
        <div className="job-modal__overlay" onClick={closePopup}>
          <div className="job-modal" onClick={(e) => e.stopPropagation()}>
            <button className="job-modal__close" onClick={closePopup}>
              ✕
            </button>

            <h2 className="job-modal__title">{selectedJob.title}</h2>

            <p className="job-modal__desc">{selectedJob.description}</p>

            <p className="job-modal__meta">
              📍 Location: {selectedJob.location}
            </p>
            {/* <p className="job-modal__meta">
              📅 Date Posted: {selectedJob.date}
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
