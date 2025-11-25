import React from "react";
import SummarizationHero from "./SummarizationHero";
import SummarizationUserCentric from "./SummarizationUserCentric";
import SummarizationFlex from "./SummarizationFlex";
import SummarizationRelatedServices from "./SummarizationRelatedServices";
import CTA from "../HomePage/CTA";

const SummarizationServicePage = () => {
  return (
    <>
      <SummarizationHero />
      <SummarizationUserCentric />
      <SummarizationFlex />
      <SummarizationRelatedServices />
    </>
  );
};

export default SummarizationServicePage;
