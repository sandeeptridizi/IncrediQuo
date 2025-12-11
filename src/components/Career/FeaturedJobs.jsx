import React, { useEffect, useState } from "react";
import "../../appStyles/Career/FeaturedJobs.css";
import careersData from "./careersData";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { database, ref, get } from "../../Firebase/firebase";

const FeaturedJobs = ({ openPopup }) => {
    const navigate = useNavigate();
  const [careers, setCareers] = useState([]);

  console.log(careers,"careers");

  useEffect(() => {
    const fetchCareers = async () => {
      const careersRef = ref(database, "careers"); // Reference to the "careers" node in the database
      try {
        const snapshot = await get(careersRef); // Fetch data from Firebase
        if (snapshot.exists()) {
          const data = snapshot.val();
          const careerList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setCareers(careerList); // Set the state with fetched data
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCareers();
  }, []);

  return (
<section className="featured">
  <h2 className="featured__title">Active Jobs</h2>

  {/* Show "No jobs found" if empty */}
  {careers.length === 0 ? (
    <p className="no-jobs-text">No jobs found</p>
  ) : (
    <div className="featured__list">
      {careers.map((job) => (
        <div className="jobcard" key={job.id}>

          <div className="jobcard__left">
            <h4 className="jobcard__title">{job.JobTitle}</h4>

            <div className="jobcard__meta-inline">
              <svg className="jobcard__loc-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 4a6 6 0 0 0-6 6c0 4.2 6 10 6 10s6-5.8 6-10a6 6 0 0 0-6-6z" />
              </svg>
              <span className="jobcard__location-text">{job.Location}</span>
            </div>
          </div>

          <div className="jobcard__right">
            <div className="job-btn job-btn--primary">
              <Button name="Apply Now" />
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
