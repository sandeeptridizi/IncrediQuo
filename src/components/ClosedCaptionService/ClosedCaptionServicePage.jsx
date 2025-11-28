// src/components/ClosedCaptionService/ClosedCaptionServicePage.jsx
import React from "react";
import ClosedCaptionHero from "./ClosedCaptionHero";
import ClosedCaptionUserCentric from "./ClosedCaptionUserCentric";
import TranscriptionFlexSection from "../TranscriptionService/TranscriptionFlexSection";
import ClosedCaptionRelatedServices from "./ClosedCaptionRelatedServices";
import CTA from "../HomePage/CTA";

const ClosedCaptionServicePage = ({ onOpenContact }) => {
  return (
    <main className="ts-page page-animate">
      <ClosedCaptionHero onOpenContact={onOpenContact} />
      <ClosedCaptionUserCentric />
      <TranscriptionFlexSection />
      <ClosedCaptionRelatedServices />
            <CTA />
    </main>
  );
};

export default ClosedCaptionServicePage;
