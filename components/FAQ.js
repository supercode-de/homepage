import Collapsible from "./FAQItem"
import faqData from './data/faq'
import { useWindowSize } from './functions/windowSize'
import React, { Component } from 'react';

class FAQ extends Component {
  state = {}

  componentDidMount() {
    this.setState({ width: window.innerWidth / 12 });
  }

  render() {
    return (
      <div id="faq">
        <span className="aside">FAQ Yourself</span>
        {faqData.map((faq, i) =>
          <Collapsible trigger={faq.question} key={i} > <p>{faq.answer}</p></Collapsible>
        )
        }
        <style jsx>{`
                #faq {
                    padding: 10vh ${this.state.width * 2}px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    position: relative;
                    background-color: #03000F;
                    background-image:
                      linear-gradient(
                        to right,
                        rgba(255, 0, 0, 0.25) 0,
                        rgba(255, 0, 0, 0.25) 1px,
                        transparent 1px,
                        transparent 100%
                      ),
                      linear-gradient(
                        to bottom,
                        rgba(255, 0, 0, 0.25) 0,
                        rgba(255, 0, 0, 0.25) 1px,
                        transparent 1px,
                        transparent 100%
                      )
                    ;
                    background-position: 0 0, 0 0;
                    background-size: ${this.state.width}px ${this.state.width}px;
                }
                .aside {
                    position: absolute;
                    transform: rotate(-90deg);
                    transform-origin: left;
                    left: calc(${this.state.width}px - .5em);
                    top: 30vh;
                    color: #3DD7AC
                  }
                  @media (max-width: 768px) {
                    #faq {
                      display: block;
                      padding:10px
                    }
                    .aside{
                      display:none
                    }
                  }
            `}</style>
      </div >
    );
  }
}



export default FAQ;