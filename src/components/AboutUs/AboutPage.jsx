import React from "react";
import AboutHero from "./AboutHero";
import HowItWorks from "./HowItWorks";
import CompanyHistory from "./CompanyHistory";
import CoreTeam from "./CoreTeam";
import CTA from "../HomePage/CTA";
import "../../appStyles/AppLayout.css";

const AboutPage = ({ onOpenContact }) => {
  return (
    <main className="app-layout page-animate">
      <div className="app-layout__content">
        
        <AboutHero onOpenContact={onOpenContact} />
        <HowItWorks />
        <CompanyHistory />
        <CoreTeam />
        <CTA onOpenContact={onOpenContact} />
      </div>
    </main>
  );
};

export default AboutPage;
