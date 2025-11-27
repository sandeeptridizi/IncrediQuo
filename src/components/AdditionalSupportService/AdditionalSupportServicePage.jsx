// src/components/AdditionalSupportService/AdditionalSupportServicePage.jsx
import React from "react";
import AdditionalSupportHero from "./AdditionalSupportHero";
import AdditionalSupportUserCentric from "./AdditionalSupportUserCentric";
import AdditionalSupportFlex from "./AdditionalSupportFlex";
import AdditionalSupportRelatedServices from "./AdditionalSupportRelatedServices";

const AdditionalSupportServicePage = ({ onOpenContact }) => {
  return (
    <main className="page-animate">
      <AdditionalSupportHero onOpenContact={onOpenContact} />
      <AdditionalSupportUserCentric />
      <AdditionalSupportFlex />
      <AdditionalSupportRelatedServices />
    </main>
  );
};

export default AdditionalSupportServicePage;
