import Link from "next/link";
import React, { Component } from "react";

import JetztAnmdelden from "./JetztAnmelden";

class Bewerbungsprozess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
  }

  toggleJetztAnmelden = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    return (
      <div id="bewerbungsprozess">
        {this.props.oneComponent ? null : (
          <JetztAnmdelden
            toggleJetztAnmelden={this.toggleJetztAnmelden}
            isHidden={this.state.isHidden}
          />
        )}
        <span className="aside"> 4 x SUPER </span>

        <div className="twocolumn">
          <div className="center">
            <h2>
              Unser
              <span>Aufnahme&shy;prozess</span>
            </h2>
            <div className="flex">
              <div>
                <span className="super-green">01</span>
              </div>
              <div
                className="flex-hover kontakt"
                onClick={() => {
                  this.toggleJetztAnmelden();
                }}
              >
                <a>
                  <div>Nimm Kontakt zu uns auf</div>
                </a>
              </div>
              <img
                src="./webp/kontakt.webp"
                alt="SuperCode Full Stack Developer Lernen Bildungsgutschein, Frauen Fullstack Programmieren Kostenlos lernen"
              />
            </div>

            <div className="flex">
              <div>
                <span className="super-green">02</span>
              </div>
              <div className="flex-hover">
                <Link href="/workshops">
                  <a>
                    <div>Teste dich im kostenlosen Workshop</div>
                  </a>
                </Link>
              </div>
              <img
                src="./webp/workshop.webp"
                alt="Programmieren Weiterbildungsangebote Düsseldorf, SuperCode Programmieren Lernen Bootcamp"
              />
            </div>

            <div className="flex">
              <div>
                <span className="super-green">03</span>
              </div>
              <div className="flex-hover">
                <Link href="#finanzierung">
                  <a>
                    <div>Kläre mit uns die Finanzierung</div>
                  </a>
                </Link>
              </div>
              <img
                src="./webp/finanzierung.webp"
                alt="Fortbildung Frontend Web-Designern Entwicklern, Full Stack Developer Lernen Bildungsgutschein"
              />
            </div>

            <div className="flex">
              <div>
                <span className="super-green">04</span>
              </div>
              <div className="flex-hover">
                <Link href="/kurse">
                  <a>
                    <div>Starte deinen Kurs Web Development</div>
                  </a>
                </Link>
              </div>
              <img
                src="./webp/losGehts.webp"
                alt="SuperCode Weiterbildung Codingschule Düsseldorf, IT Umschulung Förderung Arbeitsargentur"
              />
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .flex {
              display: flex;
              font-family: "Neue_Machina_Regular_400";
              font-size: 3.5em;
              color: #fff;
              line-height: 1.2em;
              position: relative;
              z-index: 1;
            }
            .center h2 {
              font-family: "Neue_Machina_Regular_400";
              font-size: 4.4em;
              line-height: 1.2em;
              color: #fff;
              text-transform: uppercase;
            }
            .center h2 span {
              display: block;
              color: transparent;
              font-weight: 400;
              letter-spacing: 3px;
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: #ffffff;
            }

            .aside {
              position: absolute;
              transform: rotate(-90deg);
              transform-origin: left;
              color: #fff;
              font-weight: 300;
              left: 3%;
              top: 60%;
              font-family: "Poppins", sans-serif;
              font-style: normal;
              font-weight: normal;
              font-size: 12px;
              line-height: 18px;
              letter-spacing: 3px;
              text-transform: uppercase;
              color: #ffffff;
            }
            #bewerbungsprozess {
              padding: 5em 8%;

              position: relative;
              background-color: #5d3ede;
              background-image: linear-gradient(
                  to right,
                  rgba(255, 255, 255, 0.25) 0,
                  rgba(255, 255, 255, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                ),
                linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.25) 0,
                  rgba(255, 255, 255, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                );
              background-position: 0 0, 0 0;
              background-size: calc(100vw / 12) calc(100vw / 12);
            }
            .twocolumn {
              display: grid;
              grid-template-columns: 100%;
            }

            .flex img {
              max-width: 0;
              transform: translateY(-40%);
              right: 50px;
              position: absolute;
            }

            .flex-hover:hover + img {
              max-width: 600px;
              z-index: -1;
            }

            .center {
              display: flex;
              flex-direction: column;
              justify-content: center;
              font-weight: 400;
            }
            .super-stroke {
              color: transparent;
              letter-spacing: 2px;
              -webkit-text-stroke-width: 2px;
              -webkit-text-stroke-color: #fff;
              font-weight: 300;
            }

            .super-green {
              color: transparent;
              letter-spacing: 2px;

              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: #30e1b9;
              font-weight: 200;
              font-size: 0.7em;
              padding-right: 20px;
            }

            a {
              text-decoration: none;
              color: #fff;
            }
            a:hover {
              text-decoration: line-through;
              text-decoration-color: #30e1b9;
            }
            .kontakt:hover {
              cursor: pointer;
            }
            @media (max-width: 1040px) {
              .flex {
                font-size: 2.5em;
                line-height: 1.2em;
              }
              .center h2 {
                font-size: 3.2em;
              }
            }
            @media (max-width: 768px) {
              .center h2 {
                font-size: 3.5em;
              }
              p {
                font-size: 2em;
                margin-bottom: 50px;
              }
              .super-stroke {
                color: transparent;
                letter-spacing: 2px;
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: #fff;
                font-weight: 300;
              }
            }

            @media (max-width: 568px) {
              img {
                display: none;
              }
              .twocolumn {
                grid-template-columns: 100%;
              }
            }
            @media (max-width: 468px) {
              .center h2 {
                font-size: 3em;
              }
            }
            @media (max-width: 370px) {
              .center h2 {
                font-size: 2.5em;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Bewerbungsprozess;
