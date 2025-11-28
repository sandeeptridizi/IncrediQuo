import React from "react";
import "../../appStyles/Career/FeaturedJobs.css";
import careersData from "./careersData";

const FeaturedJobs = () => {
  return (
    <section className="featured">
      <h2 className="featured__title">Active Jobs</h2>

      <div className="featured__list">
        {careersData.map((job) => (
          <div className="jobcard" key={job.id}>
            {/* LEFT: title + location on one line */}
            <div className="jobcard__left">
              <h4 className="jobcard__title">{job.title}</h4>

              <div className="jobcard__meta-inline">
                <svg
                  className="jobcard__loc-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 4a6 6 0 0 0-6 6c0 4.2 6 10 6 10s6-5.8 6-10a6 6 0 0 0-6-6z" />
                </svg>
                <span className="jobcard__location-text">
                  {job.location}
                </span>
              </div>
            </div>

            {/* RIGHT: buttons */}
            <div className="jobcard__right">
              <button className="job-btn job-btn--primary">APPLY NOW</button>
              <button className="job-btn job-btn--outline">DETAILS</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
