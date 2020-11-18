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
      <div id="faq">
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
            padding: 40px ${this.state.width * 2}px;

            position: relative;
            background-color: #070021;
            background-image: linear-gradient(
                to right,
                rgba(230, 230, 230, 0.25) 0,
                rgba(230, 230, 230, 0.25) 1px,
                transparent 1px,
                transparent 100%
              ),
              linear-gradient(
                to bottom,
                rgba(230, 230, 230, 0.25) 0,
                rgba(230, 230, 230, 0.25) 1px,
                transparent 1px,
                transparent 100%
              );
            background-position: 0 0, 0 0;
            background-size: ${this.state.width}px ${this.state.width}px;
          }
          h2 {
            font-size: 4em;
            letter-spacing: 2px;
            margin-bottom: 50px;
            display: block;
            color: transparent;
            font-weight: 400;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #3dd7ac;
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            left: 2em;
            top: 50%;
            color: #fff;
          }
          @media (max-width: 768px) {
            .grid {
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
