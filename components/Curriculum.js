import React, { useState } from "react";
//import './jetzt-anmelden.css'

import HubspotForm from "react-hubspot-form";

const Beratung = (props) => {
  const [isHidden, toggleJetztAnmelden] = useState(true);
  return (
    <div id="curriculum">
      <button className="button" onClick={() => toggleJetztAnmelden(!isHidden)}>
        {props.buttonText}
      </button>

      <div
        className={isHidden ? "isHidden" : "isNotHidden"}
        // onClick={() => toggleJetztAnmelden(!isHidden)}
      >
        <div
          id="curriculum-popup-container"
          // onClick={(e) => {
          //   e.preventDefault();
          // }}
          // onBlur={() => toggleJetztAnmelden(!isHidden)}
        >
          <div id="curriculum-popup">
            <button
              className="popup-close"
              onClick={() => toggleJetztAnmelden(!isHidden)}
            >
              &#10539;
            </button>
            <div className="curriculum-popup-content">
              <div className="curriculum-popup-image">
                <img src="img/SuperCode Curriculum.jpg" alt="" />
              </div>
              <div className="curriculum-popup-input">
                <h1>
                  Curriculum <br /> herunter- <br />
                  <span className="super">laden</span>
                </h1>
                <HubspotForm
                  portalId="5807040"
                  formId="5c9d4947-7d51-448d-845a-231155f27380"
                  onSubmit={() => console.log("Submit!")}
                  onReady={(form) => console.log("Form ready!")}
                  loading={<div>Loading...</div>}
                  className="email-newsletter-form"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .button {
            margin: 2em 1em 0;
            font-family: "Fira Sans", sans-serif;
            font-style: normal;

            font-size: 0.7em;
            font-weight: 600;
            line-height: 1.5em;
            text-align: center;
            // letter-spacing: 2px;
            letter-spacing: 3.5px;
            text-transform: uppercase;
            padding: 10px 0;

            background: transparent;
            border: 1px solid #3dd7ac;
            text-decoration: none;
            color: ${props.buttonTextColor};
            justify-self: center;
            display: inline-block;
            min-width: 23em;
            text-align: center;
          }
          .button:hover {
            color: #5d3ede;
            background: #3dd7ac;
            cursor: pointer;
          }

          .isHidden {
            display: none;
          }
          .isNotHidden {
            display: block;
          }

          #curriculum-popup-container {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            // background: #07002140;
          }

          #curriculum-popup {
            background: #070021;
            color: #fff;
            position: relative;
            width: calc(100vw / 12 * 7);
            padding: 40px;
            border: 1px solid #3dd7ac;
          }
          .popup-close {
            top: 0;
            right: 0;
            cursor: pointer;
            position: absolute;
            box-shadow: none;
            border: none;
            border-radius: 0;
            padding: 0;
            margin: 0;
            color: #3dd7ac;
            background: none;
            font-weight: 300;
            font-size: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
          }
          .popup-close:hover {
            color: #3dd7ac;
          }

          .curriculum-popup-content {
            display: grid;
            grid-template-columns: 3fr 2fr;
            gap: 30px;
          }

          .curriculum-popup-image {
            display: flex;
            min-height: 550px;
          }
          .curriculum-popup-image img {
            width: 100%;
            object-fit: cover;
          }
          .curriculum-popup-input {
            width: 100%;
          }
          iframe {
            width: 100% !important;
            box-sizing: border-box;
          }

          h1 {
            font-family: "Neue_Machina_Regular_400";
            font-size: 2.5em;
            line-height: 1.2em;
            color: #fff;
            margin: 0 0 5vh;
            text-transform: uppercase;
            font-weight: 300;
          }
          h1 span.super {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #fff;
            font-weight: 300;
          }

          @media (max-width: 1020px) {
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 3.3em;
            }
            .curriculum-popup-content {
              grid-template-columns: 1fr;
            }

            .curriculum-popup-image {
              display: none;
            }
          }
          @media (max-width: 620px) {
            #curriculum-popup {
              width: calc(100vw / 12 * 9);
              padding: 40px 0;
            }
            .curriculum-popup-input {
              margin: auto;
              width: 90%;
            }
            .iframe {
              // width: 80vw !important;
            }
          }

          @media (max-width: 568px) {
            h1 {
              font-size: 2.3em;
            }
          }
          @media (max-width: 468px) {
            .button {
              font-size: 1.2em;
              width: 16em;
              min-width: 0;
            }
            #curriculum-popup {
            }
          }
          @media (max-width: 400px) {
          }
          @media (max-width: 350px) {
            // .hbspt-form {
            //   width: 300px;
            // }
          }
        `}
      </style>
    </div>
  );
};

export default Beratung;
