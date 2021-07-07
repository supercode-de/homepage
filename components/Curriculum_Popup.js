import Popup from 'reactjs-popup';
import HubspotForm from 'react-hubspot-form';

const Typeform = (props) => {
  // console.log("das ist die hubspot form id: ", props.hubspot)
  // console.log({
  //   height: document.documentElement.clientHeight,
  //   width: document.documentElement.clientWidth,
  // });
  return (
    <>
      <Popup
        trigger={<button className='button'>{props.buttonText}</button>}
        position=' center'
      >
        <div id='curriculum-popup'>
          {/* <button
            className="popup-close"
            onClick={() => toggleJetztAnmelden(!isHidden)}
          >
            &#10539;
          </button> */}
          <div className='curriculum-popup-content'>
            {/* <div className="curriculum-popup-image">
              <img src="img/SuperCode Curriculum.jpg" alt="" />
            </div> */}
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
          font-family: 'Fira Sans', sans-serif;
          font-size: 0.875em;
          letter-spacing: 1px;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid var(--super-green);
          color: #fff;
          display: inline-block;
          padding: 15px 0;
          width: 100%;
        }
        .button:hover {
          color: var(--super-lila);
          background: var(--super-green);
          cursor: pointer;
        }

        #curriculum-popup {
          background: #070021;
          color: #fff;
          width: calc(100vw / 12 * 8);
          padding: 40px;
          border: 1px solid var(--super-green);
          position: fixed;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          width: 700px;
          // max-height: 70vh;
          color: var(--super-green);
          z-index: 999;
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
        }
        iframe {
          width: 100% !important;
          box-sizing: border-box;
        }

        h1 {
          font-family: 'Neue_Machina_Regular_400';
          font-size: 2.5em;
          line-height: 1.2em;
          color: #fff;
          margin: 0 0 5vh;
          // text-transform: uppercase;
          font-weight: 900;
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
        }
        @media (max-width: 768px) {
          #curriculum-popup {
            // left: ${(document.documentElement.clientWidth - 500) / 2}px;
            left: 50%;
            width: 500px;
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

          // .curriculum-popup-image {
          //   display: none;
          // }
        }
        @media (max-width: 620px) {
          // #curriculum-popup {
          //   width: calc(100vw / 12 * 9);
          //   padding: 40px 0;
          // }
          // .curriculum-popup-input {
          //   margin: auto;
          //   width: 90%;
          // }
          .iframe {
            // width: 80vw !important;
          }
        }

        @media (max-width: 568px) {
          #curriculum-popup {
            // left: ${(document.documentElement.clientWidth - 400) / 2}px;
            left: 50%;
            width: 400px;
          }
          h1 {
            font-size: 2.3em;
          }
        }
        @media (max-width: 468px) {
          #curriculum-popup {
            // left: ${(document.documentElement.clientWidth - 300) / 2}px;
            left: 50%;
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
        @media (max-width: 350px) {
          // .hbspt-form {
          //   width: 300px;
          // }
        }
        @media (max-height: ${document.documentElement.clientHeight * 0.15 +
          600}px) {
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
        @media (min-width: ${document.documentElement.clientHeight /
          2}px) and (max-height: ${document.documentElement.clientHeight *
            0.15 +
          600}px) {
        }
      `}</style>
    </>
  );
};

export default Typeform;
