import React, { useEffect } from "react";
import TermsHero from "./TermsHero";
import TermsContent from "./TermsContent";

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); 

  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  );
};

export default TermsPage;
