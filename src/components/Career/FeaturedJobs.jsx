import React, { useEffect, useState } from "react";
import "../../appStyles/Career/FeaturedJobs.css";
import careersData from "./careersData";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { database, ref, get } from "../../Firebase/firebase";

const FeaturedJobs = ({ openPopup, onOpenContact, filters, careers = [] }) => {
  const navigate = useNavigate();

  const formatDate = (dateStr) => {
    if (!dateStr) return "Recently";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleApplyJob = (job) => {
    if (typeof onOpenContact === "function") {
      onOpenContact();
    }
  };
  console.log(careers, "careers");

  // useEffect(() => {
  //   const fetchCareers = async () => {
  //     const careersRef = ref(database, "careers"); // Reference to the "careers" node in the database
  //     try {
  //       const snapshot = await get(careersRef); // Fetch data from Firebase
  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         const careerList = Object.keys(data).map((key) => ({
  //           id: key,
  //           ...data[key],
  //         }));
  //         setCareers(careerList); // Set the state with fetched data
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchCareers();
  // }, []);

  const filteredJobs = careers.filter((job) => {
    console.log("Filtering job:", job.JobTitle, "with filters:", filters);

    const matchLocation = filters.location
      ? job.Location?.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    const matchTitle = filters.title
      ? job.JobTitle?.toLowerCase().includes(filters.title.toLowerCase())
      : true;

    return matchLocation && matchTitle;
  });

  return (
    <section className="featured">
      <h2 className="featured__title">Active Jobs</h2>

      {/* Show "No jobs found" if empty */}

      {filteredJobs.length === 0 ? (
        <p className="no-jobs-text">No jobs found</p>
      ) : (
        <div className="featured__list">
          {filteredJobs.map((job) => (
            <div className="jobcard" key={job.id}>
              <div className="jobcard__left">
                <h4 className="jobcard__title">{job.JobTitle}</h4>

                <div className="jobcard__meta-inline">
                  <div className="jobcard__location">
                    <svg className="jobcard__loc-icon" viewBox="0 0 24 24">
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 4a6 6 0 0 0-6 6c0 4.2 6 10 6 10s6-5.8 6-10a6 6 0 0 0-6-6z" />
                    </svg>
                    <span className="jobcard__location-text">{job.Location}</span>
                  </div>
                  <div className="jobcard__date">
                    <svg className="jobcard__date-icon" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>Posted on {formatDate(job.PostDate)}</span>
                  </div>
                </div>
              </div>

              <div className="jobcard__right">
                <div
                  className="job-btn job-btn--primary"
                  onClick={() => handleApplyJob(job)}
                >
                  <Button
                    name="Apply Job"
                    paddingXL="8.6vw"
                    paddingXM="24.5vw"
                    widthL="10.21vw"
                    widthM="3.3vw"
                    bacgrounClr="#022447"
                    bacgrounArrow="#ffff"
                    colorArrow="#022447"
                    colorText="#ffff"
                    colorTextHover="#022447"
                  />
                </div>

                <button
                  className="job-btn job-btn--outline"
                  onClick={() => openPopup(job)}
                >
                  DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedJobs;
