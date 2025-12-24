// src/components/TranscriptionService/TranscriptionServicePage.jsx
import React from "react";
import TranscriptionHero from "./TranscriptionHero";
import TranscriptionUserCentric from "./TranscriptionUserCentric";
import TranscriptionFlexSection from "./TranscriptionFlexSection";
import TranscriptionRelatedServices from "./TranscriptionRelatedServices";
import CTA from "../HomePage/CTA";

const TranscriptionServicePage = ({ onOpenContact }) => {
  return (
    <main className="ts-page page-animate">
      <TranscriptionHero onOpenContact={onOpenContact} />
      <TranscriptionUserCentric />
      <TranscriptionFlexSection />
      <TranscriptionRelatedServices />
            <CTA />
    </main>
  );
};

export default TranscriptionServicePage;
