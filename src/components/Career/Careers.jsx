// Careers.jsx
import React, { useEffect, useState } from "react";
import "../../appStyles/Career/Careers.css";

import CareerHero from "./CareerHero";
import HowItWorks from "./HowItWorks";
import FeaturedJobs from "./FeaturedJobs";
import BottomSection from "./BottomSection";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { get, ref } from "firebase/database";
import { database } from "../../Firebase/firebase";

const Careers = ({ onOpenContact }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({ location: "", title: "" });
  const [careers, setCareers] = useState([]);

  const [locations, setLocations] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchCareers = async () => {
      const snapshot = await get(ref(database, "careers"));
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val());
        setCareers(data);

        // 🔹 UNIQUE LOCATIONS
        const uniqueLocations = [
          ...new Set(data.map((job) => job.Location).filter(Boolean)),
        ];

        // 🔹 UNIQUE TITLES
        const uniqueTitles = [
          ...new Set(data.map((job) => job.JobTitle).filter(Boolean)),
        ];

        setLocations(uniqueLocations);
        setTitles(uniqueTitles);
      }
    };

    fetchCareers();
  }, []);

   const handleSearch = (searchData) => {
    setFilters(searchData);
  };

  const openPopup = (job) => {
    setSelectedJob(job);
  };

  const closePopup = () => {
    setSelectedJob(null);
  };

  return (
    <div className="careers-page page-animate" id="careers">
      <CareerHero 
      onSearch={setFilters}
        locations={locations}
        titles={titles}
        />
      

      {/* pass function to child */}
      <FeaturedJobs
        openPopup={openPopup}
        onOpenContact={onOpenContact}
        filters={filters}
         careers={careers}
      />
      <HowItWorks />

      
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
