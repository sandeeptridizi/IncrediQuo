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
    },
    {
      id: 2,
      img: Member2,
      name: "Ramani Srikiran",
      role: "Co Founder and Director",
    },
  ];

  return (
    <section className="core-team">
      <div className="core-team__inner">
        <h2>Our Founders</h2>

        <div className="core-team__grid">
          {team.map((member) => (
            <article key={member.id} className="core-team__card">
              <div className="core-team__image-wrap">
                <img src={member.img} alt={member.name} />
              </div>

              {/* text overlay on image */}
              <div className="core-team__overlay">
                <p className="core-team__name">{member.name}</p>
                <p className="core-team__role">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
