import React, { useState } from 'react';

import HubspotForm from 'react-hubspot-form';

const Beratung = (props) => {
  const [isHidden, toggleJetztAnmelden] = useState(true);
  return (
    <div id='beratung'>
      <button className='button' onClick={() => toggleJetztAnmelden(!isHidden)}>
        {props.buttonText}
      </button>

      <div
        id='jetzt-anmelden'
        className={isHidden ? 'isHidden' : 'isNotHidden'}
      >
        <button
          className='jetzt-anmelden-close'
          onClick={() => toggleJetztAnmelden(!isHidden)}
        >
          &#10539;
        </button>

        <div className='jetzt-anmelden-container'>
          <div className='jetzt-anmelden-left'>
            <h1>Hi, wie</h1>
            <h1>können wir</h1>
            <h1>
              dir <span>helfen?</span>
            </h1>
            <p>Am besten erreichst du uns an folgenden Tagen und Zeiten</p>
            <p>Montag - Freitag</p>
            <p>09:00 - 17:00 Uhr</p>
            <p>
              Unser Campus befindet sich im super7000 Coworking Space,
              Ratherstr. 25, 40476 Düsseldorf.
            </p>
          </div>
          <div className='jetzt-anmelden-right'>
            <HubspotForm
              portalId='5807040'
              formId='4fb004bc-0372-4848-b17d-923a1b059392'
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
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
            z-index: 9;
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
          .jetzt-anmelden-left p {
            margin-bottom: 2%;
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
            color: var(--super-white);
            background: none;
            font-weight: 300;
            font-size: 2.5em;
          }
          .jetzt-anmelden-close:hover {
            color: var(--super-green);
          }

          span {
            color: transparent;
            letter-spacing: 3px;
            -webkit-text-stroke-width: .5px;
            -webkit-text-stroke-color: var(--super-green);
          }

          .button {
            font-size: 14px;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 15px 0px;
            background: transparent;
            border: 1px solid var(--super-green);
            border-color: ${props.buttonStrokeColor};
            color: ${props.buttonTextColor};
            justify-self: center;
            display: inline-block;
            min-width: 23em;
            width: ${props.buttonWidth};
          }
          .button:hover {
            color: var(--super-lila);
            background: var(--super-green);
            cursor: pointer;
          }

          @media screen and (max-width: 768px) {

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
              color: var(--super-white);
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
              width: ${props.buttonWidth};
              min-width: 100%;
              margin: 0 auto;
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
