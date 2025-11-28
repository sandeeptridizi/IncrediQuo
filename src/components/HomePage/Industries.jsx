import React from "react";
import "../../appStyles/HomePageStyles/Industries.css";

import legalIcon from "../../assets/industries/legal.png";
import financeIcon from "../../assets/industries/finance.png";
import medicalIcon from "../../assets/industries/medical.png";
import mediaIcon from "../../assets/industries/media.png";

const industries = [
  {
    id: "01",
    title: "Legal & Dispute Resolution",
    desc: "Accurate, confidential transcripts that support clarity and case strength.",
    icon: legalIcon,
  },
  {
    id: "02",
    title: "Financial & Investment",
    desc: "Precision-driven documentation for high-stakes financial communication",
    icon: financeIcon,
  },
  {
    id: "03",
    title: "Medical & Healthcare",
    desc: "Reliable medical transcripts with strict accuracy and compliance",
    icon: medicalIcon,
  },
  {
    id: "04",
    title: "Media, Broadcast & Production",
    desc: "Fast, polished content delivery tailored for media workflows",
    icon: mediaIcon,
  },
];

const Industries = () => {
  return (
    <section className="section industries">
      <div className="industries-container">
        <h2 className="section__title industries-title">Our Industries</h2>

        <div className="industries-grid">
          {industries.map((item) => (
            <article key={item.id} className="industry-card">
              <div className="industry-card__top">
                <div className="industry-card__icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="industry-card__number">{item.id}</div>
              </div>

              <h3 className="industry-card__title">{item.title}</h3>

              <div className="industry-card__underline">
                <span className="line-main" />
                <span className="line-sub" />
              </div>

              <p className="industry-card__desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
