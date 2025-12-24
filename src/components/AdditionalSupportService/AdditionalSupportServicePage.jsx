import React from "react";
import AdditionalSupportHero from "./AdditionalSupportHero";
import AdditionalSupportUserCentric from "./AdditionalSupportUserCentric";
import AdditionalSupportFlex from "./AdditionalSupportFlex";
import AdditionalSupportRelatedServices from "./AdditionalSupportRelatedServices";
import CTA from "../HomePage/CTA";

const AdditionalSupportServicePage = ({ onOpenContact }) => {
  return (
    <main className="page-animate">
      <AdditionalSupportHero onOpenContact={onOpenContact} />
      <AdditionalSupportUserCentric />
      <AdditionalSupportFlex />
      <AdditionalSupportRelatedServices />
            <CTA />
    </main>
  );
};

export default AdditionalSupportServicePage;
