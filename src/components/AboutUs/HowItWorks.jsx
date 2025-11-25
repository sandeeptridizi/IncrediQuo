import React from "react";
import "../../appStyles/AboutUs/HowItWorks.css";

const HowItWorks = () => {
  const items = [
    {
      number: "1",
      title: "Lorem Ipsum",
      text:
        "Figma ipsum component variant main layer. Team text auto pixel thumbnail. Arrow pen selection duplicate prototype bullet variant.",
    },
    {
      number: "2",
      title: "Lorem Ipsum",
      text:
        "Crypto ipsum bitcoin ethereum dogecoin litecoin. IOTA algorand ave kusama BitTorrent. EOS ox TRON bancor polkadot kava crypto.",
    },
    {
      number: "3",
      title: "Lorem Ipsum",
      text:
        "Pirate ipsum argh bounty warp jack. Tales lugsail plate man jones fathom. Aft topsail topgallant sheet warp warp gangway.",
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
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
