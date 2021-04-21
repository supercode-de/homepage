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
      <div id="bewerbungsprozess" className="lilaGitter">
        {this.props.oneComponent ? null : (
          <JetztAnmdelden
            toggleJetztAnmelden={this.toggleJetztAnmelden}
            isHidden={this.state.isHidden}
          />
        )}
        <span className="aside"> 4 x Super </span>

        <div className="twocolumn">
          <div className="center">
            <h2>
              Unser
              <span>Aufnahme&shy;prozess</span>
            </h2>
            <div className="flex">
              <div>
                <span className="super-green" id="one">01</span>
              </div>
              <div
                className="flex-hover kontakt"
                onClick={() => {
                  this.toggleJetztAnmelden();
                }}>
                <a>
                  Nimm Kontakt zu uns auf
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
                    Teste dich im kostenlosen Workshop
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
                    Kläre mit uns die Finanzierung
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
                    Starte deinen Kurs Web Development
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

        <style jsx>{`
            .flex {
              display: flex;
              font-size: 3.5em;
              color: #fff;
              line-height: 1.2em;
              position: relative;
              z-index: 1;
            }
            .center h2 {
              color: #fff;
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
              left: 3%;
              top: 60%;
              letter-spacing: 3px;
              color: #ffffff;
            }
            #bewerbungsprozess {
              padding: 5em 8%;
              position: relative;
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
            #one {
              letter-spacing: .3rem;
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
