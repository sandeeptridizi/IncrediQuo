// src/components/AboutUs/HowItWorks.jsx
import React from "react";
import "../../appStyles/AboutUs/HowItWorks.css";

const HowItWorks = () => {
  const items = [
    {
      number: "1",
      title1: "Smart Intake &",
      title2: "Requirement Mapping",
      text:
        "We analyze your project needs, industry context, and format requirements to ensure every file is processed with the right expertise and workflow.",
    },
    {
      number: "2",
      title1: "Expert Execution with",
      title2: "Quality Controls",
      text:
        "Our trained linguistic specialists and transcription professionals work with advanced tools to deliver accurate, consistent, and compliant outputs across all services.",
    },
    {
      number: "3",
      title1: "Final Review & Secure",
      title2: "Delivery",
      text:
        "Each project undergoes multi-layered checks before being delivered through a secure, timely, and client-preferred channel for a seamless experience.",
    },
  ];

  return (
    <section className="how">
      <div className="how__inner">
        <h2>How does IncrediQuo Solutions work</h2>

        <div className="how__grid">
          {items.map((item) => (
            <article key={item.number} className="how__item">
              <div className="how__number">{item.number}</div>

              <h3>
                {item.title1}
                <br />
                {item.title2}
              </h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
