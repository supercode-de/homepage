import Collapsible from "./FAQItem";
import faqData from "./data/faq";
import { useWindowSize } from "./functions/windowSize";
import React, { Component } from "react";

class FAQ extends Component {
  state = {};

  componentDidMount() {
    this.setState({ width: window.innerWidth / 12 });
  }

  render() {
    return (
      <div id="faq" className="blueGitter">
        <h2>FAQ</h2>

        <div className="grid">
          <span className="aside">FAQ Yourself</span>
          {faqData.map((faq, i) => (
            <Collapsible trigger={faq.question} key={i}>
              {" "}
              <p>{faq.answer}</p>
            </Collapsible>
          ))}
        </div>

        <style jsx>{`
          #faq {
            padding: 10px calc(100vw / 12) 50px;
            position: relative;
          }
          h2 {
            margin-bottom: 50px;
            margin-left: -2%;
            display: block;
            color: transparent;
            font-weight: 400;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: var(--super-green);
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0 5%;
          }

          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            left: 2em;
            top: 50%;
            color: #fff;
          }

          @media (max-width: 1040px) {
          }
          @media (max-width: 768px) {
            #faq {
              padding: 10px ${this.state.width / 2}px 50px;
            }
            .grid {
              display: block;
              padding: 10px;
            }
            .aside {
              display: none;
            }
          }
          @media (max-width: 468px) {
          }
        `}</style>
      </div>
    );
  }
}

export default FAQ;
