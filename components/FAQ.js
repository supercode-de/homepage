import Collapsible from "./FAQItem";
import faqData from "./data/faq";
import React, { Component } from "react";

class FAQ extends Component {
  render() {
    return (
      <div id="faq" className="--background-grid__black-red--lines">
        <span className="aside">FAQ Yourself</span>
        {faqData.map((faq, i) => (
          <Collapsible trigger={faq.question} key={i}>
            {" "}
            <p>{faq.answer}</p>
          </Collapsible>
        ))}
        <style jsx>{`
          #faq {
            padding: 10vh calc(100vw / 12 * 2);
            display: grid;
            grid-template-columns: 1fr 1fr;
            position: relative;
          }
          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            left: calc(100vw / 12 - 0.5em);
            top: 30vh;
            color: #3dd7ac;
          }
          @media (max-width: 768px) {
            #faq {
              display: block;
              padding: 10px;
            }
            .aside {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default FAQ;
