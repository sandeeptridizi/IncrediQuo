// src/components/ClosedCaptionService/ClosedCaptionServicePage.jsx
import React from "react";
import ClosedCaptionHero from "./ClosedCaptionHero";
import ClosedCaptionUserCentric from "./ClosedCaptionUserCentric";
import TranscriptionFlexSection from "../TranscriptionService/TranscriptionFlexSection";
import ClosedCaptionRelatedServices from "./ClosedCaptionRelatedServices";

const ClosedCaptionServicePage = ({ onOpenContact }) => {
  return (
    <main className="ts-page page-animate">
      <ClosedCaptionHero onOpenContact={onOpenContact} />
      <ClosedCaptionUserCentric />
      <TranscriptionFlexSection />
      <ClosedCaptionRelatedServices />
    </main>
  );
};

export default ClosedCaptionServicePage;
