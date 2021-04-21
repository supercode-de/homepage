// import Link from "next/link";
import React, { Component } from "react";

import JetztAnmdelden from "./JetztAnmelden";

class Auflistung extends Component {
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
      <div id="auflistung" className="blueGitter">
        {this.props.oneComponent ? null : (
          <JetztAnmdelden
            toggleJetztAnmelden={this.toggleJetztAnmelden}
            isHidden={this.state.isHidden}
          />
        )}

        <div className="twocolumn">
          <div className="center">
            <div className="flex">
              <div>
                <span className="super-green">01</span>
              </div>
              <div className="flex-hover">
                <a>
                  <div>
                    <span className="super-stroke">immer 2</span> Trainer*innen
                  </div>
                </a>
              </div>
              <img src="./img/kontakt.jpg" alt="" />
            </div>
            <div className="flex">
              <div>
                <span className="super-green">02</span>
              </div>
              <div className="flex-hover">
                <a>
                  <div>modern, praxisnah und zertifiziert</div>
                </a>
              </div>
              <img src="./img/workshop.jpg" alt="" />
            </div>

            <div className="flex">
              <div>
                <span className="super-green">03</span>
              </div>
              <div className="flex-hover">
                <a>
                  <div>
                    <span className="super-stroke">Online</span> und/oder{" "}
                    <span className="super-stroke">vor Ort</span>
                  </div>
                </a>
              </div>
              <img src="./img/finanzierung.jpg" alt="" />
            </div>

            <div className="flex">
              <div>
                <span className="super-green">04</span>
              </div>
              <div className="flex-hover">
                <a>
                  <div>
                    kleine <span className="super-stroke">Lerngruppen</span>
                  </div>
                </a>
              </div>
              <img src="./img/losGehts.jpg" alt="" />
            </div>

            <div className="flex">
              <div>
                <span className="super-green">05</span>
              </div>
              <div className="flex-hover">
                <a>
                  <div>
                    <span className="super-stroke">Faire</span>{" "}
                    Finanzierungs&shy;möglichkeiten
                  </div>
                </a>
              </div>
              <img src="./img/losGehts.jpg" alt="" />
            </div>

            <div className="flex">
              <div>
                <span className="super-green">06</span>
              </div>
              <div className="flex-hover">
                <a>
                  <div>
                    Wir begleiten dich{" "}
                    <span className="super-stroke">von Anfang bis Ende</span>
                  </div>
                </a>
              </div>
              <img src="./img/losGehts.jpg" alt="" />
            </div>
          </div>
        </div>

        <style jsx>{`
            #auflistung {
              padding: 6em 8%;
              position: relative;
            }

            .twocolumn {
              display: grid;
              grid-template-columns: 100%;
            }

            .center {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .flex {
              display: flex;
              font-size: 4em;
              font-weight: 600;

              color: #fff;
              line-height: 1.2em;
              position: relative;
              z-index: 1;
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

            .super-stroke {
              color: transparent;
              letter-spacing: 2px;
              -webkit-text-stroke-width: 0.5px;
              -webkit-text-stroke-color: #fff;
              font-weight: 300;
            }

            .super-green {
              color: transparent;
              letter-spacing: 2px;

              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: var(--super-green);
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
              text-decoration-color: var(--super-green);
            }
            .kontakt:hover {
              cursor: pointer;
            }
            @media (max-width: 1040px) {
              .flex {
                font-size: 2.5em;
                line-height: 1.2em;
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
            }

            @media (max-width: 568px) {
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
                overflow-wrap: break-word;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Auflistung;
