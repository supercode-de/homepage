import { useState } from 'react';
import Popup from 'reactjs-popup';
import HubspotForm from 'react-hubspot-form';

const Typeform = (props) => {
  return (
    <>
      <Popup
        trigger={<button className='button'>Jetzt anmelden</button>}
        position='center'
      >
        <div id='curriculum-popup'>
          <div className='curriculum-popup-content'>
              <div className='curriculum-popup-input'>
                <h1 className='three-lines'>
                  Für die Warteliste <span className='super'>anmelden</span>
                  <p>Unsere MicroCamps gehen 2023 an den Start. Wenn du das nicht verpassen willst, melde dich fix bei unserem Newsletter an! 😉</p>
                </h1>

                <HubspotForm
                  portalId='5807040'
                  formId={props.wartelisteLinkFormID}
                  onSubmit={() => console.log('Submit!')}
                  onReady={(form) => console.log('Form ready!')}
                  loading={<div>Loading...</div>}
                  className='email-newsletter-form'
                />
              </div>
          </div>
        </div>
      </Popup>
      <style jsx>{`

        .button {
          font-family: var(--ff-reg-bold);
          font-size: var(--fs-500);
          color: var(--super-lila);
          background: var(--super-green);
          outline: none;
          border: none;
          padding: 15px 30px;
          margin-top: 20px;
          border-radius: 5rem;
          cursor: pointer;
        }
        .button:hover {
          opacity: 0.8;
        }
        #curriculum-popup {
          background: var(--super-black);
          color: var(--super-white);
          padding: 5%;
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          width: 70%;
          color: var(--super-green);
          z-index: 9;
        }

        .curriculum-popup-input {
          width: 100%;
          overflow-y: hidden;
          z-index: 9;
        }
        .curriculum-popup-input h1 {
          margin-bottom: 20px;
        }
        .curriculum-popup-input p{
          color: var(--super-white);
          margin-top: 16px;
        }
        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .button {
            font-size: 1.1em;
          }
        }
        @media (max-width: 620px) {
          .curriculum-popup-input {
            margin: auto;
            width: 90%;
          }
        }
        @media (max-width: 500px) {
          .button {
            width: 100%;
          }
        }
        @media (max-width: 468px) {
          .button {
            font-size: 1.2em;
            width: 16em;
            min-width: 0;
          }
        }
        @media (max-width: 425px) {
          .button {
            width: 100%;
          }
          #curriculum-popup {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default Typeform;
