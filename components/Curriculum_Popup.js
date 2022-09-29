import Popup from 'reactjs-popup';
import HubspotForm from 'react-hubspot-form';

const Typeform = (props) => {
  return (
    <>
      <Popup
        trigger={<button className='button'>{props.buttonText}</button>}
        position='center'
      >
        <div id='curriculum-popup'>
          <div className='curriculum-popup-content'>

            <div className='curriculum-popup-input'>
              <h1 className='three-lines'>
                Curriculum <br /> herunter- <br />
                <span className='super'>laden</span>
              </h1>
              <h1 className='one-line'>
                Curriculum herunter<span className='super'>laden</span>
              </h1>
              <HubspotForm
                portalId='5807040'
                // formId="5c9d4947-7d51-448d-845a-231155f27380"
                formId={props.hubspot}
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
            width: ${props.width};
            font-size: 0.875em;
            background: transparent;
            outline: none;
            border: 1px solid var(--super-green);
            color: var(--super-white);
            color: ${props.buttonColor};
            padding: 15px 30px;
            letter-spacing: 1px;
            text-transform: uppercase;
            border-radius: 5rem;
            margin-bottom: 1rem;
        }
        .button:hover {
          color: var(--super-lila);
          background: var(--super-green);
          cursor: pointer;
        }

        #curriculum-popup {
          background: var(--super-blue);
          color: var(--super-white);
          width: calc(100vw / 12 * 8);
          padding: 40px;
          border: 1px solid var(--super-green);
          position: fixed;
          left: 50%;
          top: 7%;
          width: 500px;
          color: var(--super-green);
          z-index: 9999;
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
          color: var(--super-green);
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
          color: var(--super-green);
        }
    
        .curriculum-popup-content {
          display: grid;
          // grid-template-columns: 2fr 2fr;
          grid-template-columns: 1fr;
          gap: 30px;
          overflow: hidden;
          z-index:9999;
          // max-height: calc(70vh - 80px);
        }

        .curriculum-popup-image {
          display: flex;
        }
        .curriculum-popup-image img {
          width: 100%;
          object-fit: cover;
        }
        .curriculum-popup-input {
          width: 100%;
          overflow-y: hidden;
          z-index:9999;
        }
        iframe {
          width: 100% !important;
          box-sizing: border-box;
        }

        h1 {
          font-family: 'Neue_Machina_Regular_400';
          font-size: 2.5em;
          line-height: 1.2em;
          color: var(--super-white);
          margin: 0 0 5vh;

          font-weight: 900;
        }
        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--super-white);
          font-weight: 300;
        }
        .one-line {
          display: none;
        }

        @media (max-width: 1440px) {
          .button {
            font-size: 0.938em;
          }
          #curriculum-popup {
          
            left: ${(document.documentElement.clientWidth - 500) / 2}px;
            width: 400px;
          }

        
        }
        @media (max-width: 768px) {
          #curriculum-popup {
            left: ${(document.documentElement.clientWidth - 500) / 2}px;
            width: 400px;
          }
          h1 {
            font-size: 3.3em;
          }
          .button {
            font-size: 1.1em;
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
          #curriculum-popup {
            left: ${(document.documentElement.clientWidth - 400) / 2}px;
            width: 400px;
          }
          h1 {
            font-size: 2.3em;
          }
        }
        @media (max-width: 468px) {
          #curriculum-popup {
            left: ${(document.documentElement.clientWidth - 300) / 2}px;
            width: 300px;
          }
          .button {
            font-size: 1.2em;
          }
        }
        @media (max-width: 425px) {
          .button {
            width: 100%;
          }
        }

        }
        @media (max-height: ${document.documentElement.clientHeight * 0.15 + 600}px) {
          .one-line {
            display: block;
          }
          .three-lines {
            display: none;
          }
          h1 {
            font-size: 2em;
          }
        }
        @media (min-width: ${document.documentElement.clientHeight / 2}px) and (max-height: ${document.documentElement.clientHeight * 0.15 + 600}px) {
          #curriculum-popup {
            width: ${document.documentElement.clientWidth - 2 * (document.documentElement.clientWidth / 10)}px;
            left: ${(document.documentElement.clientWidth - (document.documentElement.clientWidth - 2 * (document.documentElement.clientWidth / 10))) / 2}px;
          }
        }
      `}</style>
    </>
  );
};

export default Typeform;
