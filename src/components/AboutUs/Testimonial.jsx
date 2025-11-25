import React from "react";
import "../../appStyles/AboutUs/Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial__inner">
        <p className="testimonial__quote">
          “Using this platform has completely changed the way I approach my
          daily habits. The guidance is clear and easy to follow, which made
          staying consistent so much easier. I feel more in control of my
          routine and my progress. Each small step added up to noticeable
          improvements. The support and insights kept me motivated along the
          way. I genuinely feel healthier and more confident every day.”
        </p>

        <div className="testimonial__author">
          <span className="testimonial__name">Leo Markdo</span>
          <span className="testimonial__role">Co-Founder of Company</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
