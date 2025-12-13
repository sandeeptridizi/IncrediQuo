// Careers.jsx
import React, { useState } from "react";
import "../../appStyles/Career/Careers.css";

import CareerHero from "./CareerHero";
import HowItWorks from "./HowItWorks";
import FeaturedJobs from "./FeaturedJobs";
import BottomSection from "./BottomSection";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const Careers = ({ onOpenContact }) => {
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
      <FeaturedJobs
        openPopup={openPopup}
        onOpenContact={onOpenContact} // ✅ PASS HERE
      />
      <BottomSection />

      {selectedJob && (
        <div className="job-modal__overlay" onClick={closePopup}>
          <div className="job-modal" onClick={(e) => e.stopPropagation()}>
            <button className="job-modal__close" onClick={closePopup}>
              ✕
            </button>

            <h2 className="job-modal__title">{selectedJob.JobTitle}</h2>
            <p className="job-modal__meta">
              📍 Location: {selectedJob.Location}
            </p>
            {/* <p className="job-modal__desc">{selectedJob.JobDiscription}</p> */}
            <p className="job-modal__desc">
              {selectedJob?.JobDiscription && parse(selectedJob.JobDiscription)}
            </p>
            {/* <p className="job-modal__meta">
              📅 Date Posted: {selectedJob.date}
            </p> */}
          </div>
        </div>
      )}
      {/* {selectedJob && (
        <JobDetailsPopup job={selectedJob} onClose={closePopup} />
      )} */}
    </div>
  );
};

export default Careers;
