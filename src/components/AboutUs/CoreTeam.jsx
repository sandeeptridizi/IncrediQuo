import React from "react";
import "../../appStyles/AboutUs/CoreTeam.css";

// import images
import Member1 from "../../assets/Abouthero/1.png";
import Member2 from "../../assets/Abouthero/2.png";

const CoreTeam = () => {
  const team = [
    {
      id: 1,
      img: Member1,
      name: "Shashank Paturi",
      role: "Co Founder and Director",
      bio: "Shashank drives the strategic vision and growth initiatives for IncrediQuo-Solutions, focusing on emerging technology adoption in transcription services.",
    },
    {
      id: 2,
      img: Member2,
      name: "Ramani Srikiran",
      role: "Co Founder and Director",
      bio: "Ramani oversees the operational efficiency and quality assurance framework, ensuring all services meet the highest standards of accuracy and reliability.",
    },
  ];

  return (
    <section className="core-team snap-section">
      <div className="core-team__inner">
        <h2>Our Founders</h2>

        <div className="core-team__grid">
          {team.map((member) => (
            <article key={member.id} className="core-team__card">
              {/* NEW: Use a container for the flipping content */}
              <div className="core-team__flipper">
                
                {/* FRONT FACE: Image and initial text overlay */}
                <div className="core-team__front">
                  <div className="core-team__image-wrap">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="core-team__overlay">
                    <p className="core-team__name">{member.name}</p>
                    <p className="core-team__role">{member.role}</p>
                  </div>
                </div>

                {/* BACK FACE: Bio details */}
                <div className="core-team__back">
                  <p className="core-team__back-name">{member.name}</p>
                  <p className="core-team__back-role">{member.role}</p>
                  <p className="core-team__bio-text">{member.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;