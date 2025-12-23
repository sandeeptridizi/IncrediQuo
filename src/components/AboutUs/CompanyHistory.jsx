import React from "react";
import "../../appStyles/AboutUs/CompanyHistory.css";
const animateText = (word) => {

  return word.split('').map((char, index) => (
    <span 
      key={index} 
      className="animated-letter"
    >
      {char}
    </span>
  ));
};

const CompanyHistory = () => {
  return (
    <section className="history">
      <div className="history__inner">
        <div className="history__logo-animation">
          <div className="logo-word">
            {animateText("IncrediQuo")}
          </div>
        </div>
       

        <div className="history__content">
          <h2>About IncrediQuo Solutions</h2>

          <p className="history__para">
            IncrediQuo Solutions is built on the belief that every word carries
            weight, meaning, and impact. As a trusted partner in transcription,
            captioning, summarisation, and language support, we combine human
            intelligence with modern technology to deliver precision-driven
            results for clients across industries. Our name IncrediQuo, reflects
            our core philosophy: Incredible Quality, backed by credibility,
            clarity, and consistency.
          </p>

          <p className="history__para">
            We understand that every client comes with unique needs, timelines,
            and expectations. That’s why our approach is deeply collaborative
            and quality-centric. From real-time transcription to
            industry-specific documentation, every project is handled by trained
            professionals who ensure accuracy, confidentiality, and compliance
            at every step. Whether you're a legal firm needing airtight
            transcripts, a media house requiring broadcast-ready captions, or a
            business seeking fast and reliable summarisation, we provide
            solutions that elevate your workflow and empower better
            decision-making.
          </p>

          <p className="history__para">
            At IncrediQuo Solutions, we don’t just deliver files, we deliver
            confidence, reliability, and measurable value. Our flexible working
            modes, transparent process system, and commitment to excellence make
            us the preferred choice for clients who demand nothing short of
            exceptional linguistic clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;






