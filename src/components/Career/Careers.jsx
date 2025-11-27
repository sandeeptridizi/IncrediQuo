// src/components/Career/Careers.jsx
import React from "react";
import "../../appStyles/Career/Careers.css";

import CareerHero from "./CareerHero";
import HowItWorks from "./HowItWorks";
import FeaturedJobs from "./FeaturedJobs";
import BottomSection from "./BottomSection";

const Careers = () => {
  return (
    <div className="careers-page page-animate" id="careers">
      <CareerHero />
      <HowItWorks />
      <FeaturedJobs />
      <BottomSection />
    </div>
  );
};

export default Careers;
