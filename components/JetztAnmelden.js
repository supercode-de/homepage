import React from 'react';
//import './jetzt-anmelden.css'
import HubspotForm from 'react-hubspot-form';

const JetztAnmelden = (props) => {
  return (
    <div
      id='jetzt-anmelden'
      className={props.isHidden ? 'isHidden' : 'isNotHidden'}
    >
      <button
        className='jetzt-anmelden-close'
        onClick={props.toggleJetztAnmelden}
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
          <p> Du erreichst uns am besten an folgenden Tagen und Zeiten</p>
          <p>Montag - Freitag</p>
          <p>09:00 - 17:00 Uhr</p>
          <p>
            Unser Campus befindet sich im super7000 Coworking Space - der Mutter
            aller Coworking Spaces. Die genaue Adresse lautet
          </p>
          <p>Ratherstr. 25</p>
          <p>40476 Düsseldorf</p>
        </div>
        <div className='jetzt-anmelden-right'>
          <HubspotForm
            portalId='5807040'
            formId='4fb004bc-0372-4848-b17d-923a1b059392'
            onSubmit={() => console.log('Submit! :-P')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
          />
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
            transition: all 0.5s;
            width: 100%;
            overflow-y: scroll;
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
            padding: 50px 10%;
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
            color: var(--super-white);
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
            margin-bottom: 14px;
            line-height: 24px;
          }
          span {
            color: transparent;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: var(--super-green);
          }
          @media screen and (max-width: 768px) {
            #jetzt-anmelden {
              overflow-y: scroll;
            }

            .jetzt-anmelden-container {
              padding: 5% 10%;
              display: block;
            }
            .hbspt-form {
              width: 500px;
            }

            .jetzt-anmelden-close {
              top: 30px;
              right: 30px;
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

          @media screen and (max-width: 568px) {
            .jetzt-anmelden-container {
              padding: 10% 10%;
              display: block;
            }
            .hbspt-form {
              width: 400px;
            }
          }
          @media screen and (max-width: 400px) {
            .jetzt-anmelden-container {
              padding: 10% 5%;
              display: block;
            }
            .hbspt-form {
              width: 350px;
            }
          }
          @media screen and (max-width: 350px) {
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

export default JetztAnmelden;
