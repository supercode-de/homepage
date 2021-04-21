import React, { useState } from "react";
//import './jetzt-anmelden.css'

import HubspotForm from "react-hubspot-form";

const Beratung = (props) => {
  const [isHidden, toggleJetztAnmelden] = useState(true);
  return (
    <div id="beratung">
      <button className="button" onClick={() => toggleJetztAnmelden(!isHidden)}>
        {props.buttonText}
      </button>

      <div
        id="jetzt-anmelden"
        className={isHidden ? "isHidden" : "isNotHidden"}
      >
        <button
          className="jetzt-anmelden-close"
          onClick={() => toggleJetztAnmelden(!isHidden)}
        >
          &#10539;
        </button>

        <div className="jetzt-anmelden-container">
          <div className="jetzt-anmelden-left">
            <h1>Hi, wie</h1>
            <h1>können wir</h1>
            <h1>
              dir <span>helfen?</span>
            </h1>
            <p>Am besten erreichst du uns an folgenden Tagen und Zeiten</p>
            <p>Montag - Freitag</p>
            <p>09:00 - 17:00 Uhr</p>
            <p>
              Unser Campus befindet sich im super7000 Coworking Space, Ratherstr. 25, 40476 Düsseldorf.
            </p>
          </div>
          <div className="jetzt-anmelden-right">
            <HubspotForm
              portalId="5807040"
              formId="4fb004bc-0372-4848-b17d-923a1b059392"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
          #jetzt-anmelden {
            position: fixed;
            padding: 20px;
            background: var(--super-black);
            top: 0;
            bottom: 0;
            color: var(--super-green);
            overflow-y: scroll;
            transition: all 0.5s;
            width: 100%;
            z-index: 99999;
          }
          .isHidden {
            right: -100%;
          }
          .isNotHidden {
            right: 0;
          }
          .hbspt-form {
            width: 500px;
          }

          .jetzt-anmelden-container {
            padding: 150px 10%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
          }
          .jetzt-anmelden-close {
            top: 60px;
            right: 50px;
            cursor: pointer;
            position: absolute;
            box-shadow: none;
            border: none;
            border-radius: 0;
            padding: 0;
            margin: 0;
            color: #f0f0f0;
            background: none;
            font-weight: 300;
            font-size: 2.5em;
          }
          .jetzt-anmelden-close:hover {
            color: var(--super-green);
          }
          .jetzt-anmelden-left h1 {
            font-size: 4.3em;
            font-style: normal;
            font-weight: 800;
            margin: 0;
            line-height: 1em;
            letter-spacing: -1.5px;
          }
          .jetzt-anmelden-left p {
            font-size: 1.1em;
            line-height: 1.08;
            font-weight: 400;
            letter-spacing: 2px;
            margin-bottom: 14px;
            line-height: 24px;
          }
          span {
            color: transparent;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: var(--super-green);
          }

          .button {
            font-family: "Fira Sans", sans-serif;
            font-size: 14px;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 15px 0px;
            background: transparent;
            border: 1px solid var(--super-green);
            color: ${props.buttonTextColor};
            justify-self: center;
            display: inline-block;
            min-width: 23em;
          }
          .button:hover {
            color: var(--super-lila);
            background: var(--super-green);
            cursor: pointer;
          }

          // .button {
          //     background:none;
          //     display: inline-block;
          //     color: #fff;
          //     text-decoration: none;
          //     text-transform: uppercase;
          //     padding: 5px 35px;
          //     border: 1px solid var(--super-green);
          //     font-size: 0.7em;
          //     font-weight: 600;
          //     line-height: 1.5em;
          //     margin: 10px;
          //     letter-spacing: 2px;
          //     transition: top 0.5s linear, box-shadow 0.5s linear, left 0.5s linear;
          //     box-shadow: 0 0 0 0 transparent;
          //     position: relative;
          //     top: 0;
          //     left: 0;
          //     text-align: center;
          //     min-width: 100px;
          // }
          // .button:hover {
          //     // margin: 10px 5px 15px 10px;
          //     // margin: 10px 10px 15px 15px;
          //     box-shadow: -5px 5px 0 0 #fff;
          //     top: -5px;
          //     left: 5px;
          // }
          @media screen and (max-width: 768px) {
            .jetzt-anmelden-left h1 {
              font-size: 3.3em;
            }
            .jetzt-anmelden-container {
              padding: 5% 10%;
              display: block;
            }
            .hbspt-form {
              width: 500px;
            }

            .jetzt-anmelden-close {
              top: 60px;
              right: 20px;
              cursor: pointer;
              position: absolute;
              box-shadow: none;
              border: none;
              border-radius: 0;
              padding: 0;
              margin: 0;
              color: #f0f0f0;
              background: none;
              font-weight: 300;
              font-size: 4em;
              height: 4vmax;
              min-height: 50px;
              width: 4vmax;
              min-width: 50px;
            }
          }

          @media (max-width: 568px) {
            .jetzt-anmelden-left h1 {
              font-size: 2.3em;
            }
            .jetzt-anmelden-container {
              padding: 10% 10%;
              display: block;
            }
            .hbspt-form {
              width: 400px;
            }
          }
          @media (max-width: 468px) {
            .button {
              font-size: 1.2em;
              width: 16em;
              min-width: 0;
            }
          }
          @media (max-width: 400px) {
            .jetzt-anmelden-container {
              padding: 10% 5%;
              display: block;
            }
            .hbspt-form {
              width: 350px;
            }
          }
          @media (max-width: 350px) {
            .jetzt-anmelden-container {
              padding: 12% 5%;
              display: block;
            }
            .hbspt-form {
              width: 300px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Beratung;
