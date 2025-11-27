// src/components/AboutUs/AboutPage.jsx
import React from "react";
import AboutHero from "./AboutHero";
import HowItWorks from "./HowItWorks";
import CompanyHistory from "./CompanyHistory";
import CoreTeam from "./CoreTeam";
import CTA from "../HomePage/CTA";

// ✅ import shared layout CSS
import "../../appStyles/AppLayout.css";

const AboutPage = () => {
  return (
    <main className="app-layout page-animate">
      <div className="app-layout__content">
        <AboutHero />
        <HowItWorks />
        <CompanyHistory />
        <CoreTeam />
        <CTA /> {/* Reused CTA */}
      </div>
    </main>
  );
};

export default AboutPage;
