// src/components/AboutUs/AboutPage.jsx
import React from "react";
import AboutHero from "./AboutHero";
import HowItWorks from "./HowItWorks";
import CompanyHistory from "./CompanyHistory";
import CoreTeam from "./CoreTeam";
import CTA from "../HomePage/CTA";

// ✅ import shared layout CSS
import "../../appStyles/AppLayout.css";

const AboutPage = ({ onOpenContact }) => {
  return (
    <main className="app-layout page-animate">
      <div className="app-layout__content">
        {/* pass onOpenContact down */}
        <AboutHero onOpenContact={onOpenContact} />
        <HowItWorks />
        <CompanyHistory />
        <CoreTeam />
        {/* pass the same handler to CTA like on Home page */}
        <CTA onOpenContact={onOpenContact} />
      </div>
    </main>
  );
};

export default AboutPage;
