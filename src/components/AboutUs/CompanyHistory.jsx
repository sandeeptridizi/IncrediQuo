import React from "react";
import "../../appStyles/AboutUs/CompanyHistory.css";
import CompanyImg from "../../assets/Abouthero/Company.jpg"; // 👈 import image

const CompanyHistory = () => {
  return (
    <section className="history">
      <div className="history__inner">
        <div className="history__content">
          <h2>Company history</h2>

          <p className="history__para">
            Hipster ipsum tattooed brunch I&apos;m baby. Raw iceland keytar
            master pinterest try-hard sustainable mustache. Loko fashion
            keffiyeh jean put vexillologist wolf. Plaid chambray health shaman
            diy silicon.
          </p>

          <p className="history__para">
            Hipster ipsum tattooed brunch I&apos;m baby. Wolf vegan drinking
            flannel bun tacos cliche flexitarian. Authentic coloring scenester
            kogi bodega cold-pressed carry etsy lo-fi. Vegan hexagon artisan
            unicorn freegan book kinfolk keffiyeh bottle listicle.
          </p>

          <p className="history__para">
            + raclette sativa yoga vegan. Tumblr copper meggings retro trust
            cliche tacos coloring next. Brunch franzen thundercats echo mishka
            cleanse woke direct.
          </p>

          <p className="history__para">
            Bun stumptown diy seitan they mixtape. Goth twee polaroid.
          </p>
        </div>

        {/* IMAGE instead of placeholder */}
        <div className="history__image">
          <img src={CompanyImg} alt="Company team" />
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
