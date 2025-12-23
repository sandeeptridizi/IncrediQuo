// src/components/SummarizationService/SummarizationServicePage.jsx
import React from "react";
import SummarizationHero from "./SummarizationHero";
import SummarizationUserCentric from "./SummarizationUserCentric";
import SummarizationFlex from "./SummarizationFlex";
import SummarizationRelatedServices from "./SummarizationRelatedServices";
import CTA from "../HomePage/CTA";

const SummarizationServicePage = ({ onOpenContact }) => {
  return (
    <main className="page-animate">
      <SummarizationHero onOpenContact={onOpenContact} />
      <SummarizationUserCentric />
      <SummarizationFlex />
      <SummarizationRelatedServices />
      <CTA />
    </main>
  );
};

export default SummarizationServicePage;
