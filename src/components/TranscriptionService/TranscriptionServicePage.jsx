import React from "react";
import TranscriptionHero from "./TranscriptionHero";
import TranscriptionUserCentric from "./TranscriptionUserCentric";
import TranscriptionFlexSection from "./TranscriptionFlexSection";
import TranscriptionRelatedServices from "./TranscriptionRelatedServices";

const TranscriptionServicePage = () => {
  return (
    <main className="ts-page">
      <TranscriptionHero />
      <TranscriptionUserCentric />
      <TranscriptionFlexSection />
      <TranscriptionRelatedServices />
    </main>
  );
};

export default TranscriptionServicePage;
