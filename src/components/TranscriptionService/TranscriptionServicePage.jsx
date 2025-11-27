// src/components/TranscriptionService/TranscriptionServicePage.jsx
import React from "react";
import TranscriptionHero from "./TranscriptionHero";
import TranscriptionUserCentric from "./TranscriptionUserCentric";
import TranscriptionFlexSection from "./TranscriptionFlexSection";
import TranscriptionRelatedServices from "./TranscriptionRelatedServices";

const TranscriptionServicePage = ({ onOpenContact }) => {
  return (
    <main className="ts-page page-animate">
      <TranscriptionHero onOpenContact={onOpenContact} />
      <TranscriptionUserCentric />
      <TranscriptionFlexSection />
      <TranscriptionRelatedServices />
    </main>
  );
};

export default TranscriptionServicePage;
