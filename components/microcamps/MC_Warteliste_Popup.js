import Popup from 'reactjs-popup';
import HubspotForm from 'react-hubspot-form';

const Typeform = (props) => {
console.log(props.theme);
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
                Für die {props.theme === "design" ? "UX/UI-Design" : "WebDev"} Warteliste <span className='super'>anmelden</span>
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
          padding: 54px;
          position: fixed;
          left: 37%;
          top: 11%;
          width: 700px;
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
        .curriculum-popup-input h1 {
          margin-bottom: 20px;
        }
        .curriculum-popup-input p{
          color: var(--super-white);
          margin-top: 16px;
        }
        iframe {
          width: 100% !important;
          box-sizing: border-box;
        }

        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
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
            // left: 50%;
            // top: 50%;
            left: ${(document.documentElement.clientWidth - 500) / 2}px;
            width: 400px;
          }
          h1 {
            font-size: 3.3em;
          }
          .button {
            font-size: 1.1em;
          }
          // .curriculum-popup-content {
          //   grid-template-columns: 1fr;
          // }

       
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
            width: 16em;
            min-width: 0;
          }
        }
        @media (max-width: 425px) {
          .button {
            width: 100%;
          }
        }
        @media (max-width: 400px) {
        }
    
        }
        @media (max-height: ${
          document.documentElement.clientHeight * 0.15 + 600
        }px) {
          .one-line {
            display: block;
          }
          .three-lines {
            display: none;
          }
          h1 {
            font-family: 'Neue_Machina_Regular_400';
            font-size: 2em;
          }
        }
        @media (min-width: ${
          document.documentElement.clientHeight / 2
        }px) and (max-height: ${
        document.documentElement.clientHeight * 0.15 + 600
      }px) {
          #curriculum-popup {
            width: ${
              document.documentElement.clientWidth -
              2 * (document.documentElement.clientWidth / 10)
            }px;
            left: ${
              (document.documentElement.clientWidth -
                (document.documentElement.clientWidth -
                  2 * (document.documentElement.clientWidth / 10))) /
              2
            }px;
          }
        }
      `}</style>
    </>
  );
};

export default Typeform;
