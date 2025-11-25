import React from "react";
import "../../appStyles/AboutUs/CoreTeam.css";

// import images
import Member1 from "../../assets/Abouthero/1.png";
import Member2 from "../../assets/Abouthero/2.png";
import Member3 from "../../assets/Abouthero/3.png";

const CoreTeam = () => {
  const team = [
    {
      id: 1,
      img: Member1,
      name: "Albert Flores",
      role: "Founder of GearUp",
    },
    {
      id: 2,
      img: Member2,
      name: "Leslie Alexander",
      role: "Co-Founder of Womenia",
    },
    {
      id: 3,
      img: Member3,
      name: "Courtney Henry",
      role: "Founder of CH Beauty",
    },
  ];

  return (
    <section className="core-team">
      <div className="core-team__inner">
        <h2>Core Team Members</h2>

        <div className="core-team__grid">
          {team.map((member) => (
            <article key={member.id} className="core-team__card">
              <div className="core-team__image-wrap">
                {/* just the image – no extra overlay, so no double design */}
                <img src={member.img} alt={member.name} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
