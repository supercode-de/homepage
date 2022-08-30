import FaqSectionAccCard from "./FaqSectionAccCard";
import faqdata from "../../data/faqdata";

import { useState } from "react";

const FaqSection = () => {
  const [expanded, setExpanded] = useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <section className="faqSection">
      <div className="wrap" id="faq">
        <h2>
          <span className="headlines_stroke">FAQ</span>
        </h2>
        <div className="faqSection__accordion">
          {faqdata.map((faqItem, index) => (
            <FaqSectionAccCard
              expanded={expanded}
              handleChange={handleChange}
              key={index}
              frage={faqItem.frage}
              antwort={faqItem.antwort}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
