import Layout from "../components/Layout";
import { useWindowSize } from '../components/functions/windowSize'
import HubspotForm from 'react-hubspot-form'
import Arrow from "../components/small/Arrow";
import Telefon from "../components/small/Telefon";

export default function Workshop() {
  const pixelSize = 1;
  if (process.browser) {
    const width = useWindowSize().width / 12
    return (<Layout>
      <div id="header">
        <div id="waving">👋</div>
        <h1>YEAH!<br />Willkommen bei unserem HTML<br />& CSS Workshop für Anfänger</h1>
        {/* <div className="aside">📞 +49 211 7817 233-0</div> */}
        <Telefon color="#fff" />
        <Arrow />
      </div>
      <div id="sign-up">
        <div id="notice">
          <p>DSGVO First!</p>
          <p>
            Aus Datenschutzgründen müsst ihr unser online Kontaktformular ausfüllen.<br />
            Anschließend werdet ihr zum Workshop-Video-Chat weitergeleitet.
          </p>
        </div>
        <div id="form">
          <HubspotForm
            portalId='5807040'
            formId='e48452f8-ff46-4ff5-b946-f9fc138ed732'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
          />
        </div>
      </div>
      <style jsx>{`
        #header {
            background:       linear-gradient(90deg, #03000F ${width - pixelSize}px,
                              transparent 1%),
                              linear-gradient(#03000F ${width - pixelSize}px, transparent 1%),
                              #fff;
            background-size: ${width}px ${width}px;
            padding: 10vh 2rem;
        }
        #sign-up {
          position: relative;
          background-color: #fff;
          background-image:
            linear-gradient(
              to right,
              rgba(255, 0, 0, 0.25) 0,
              rgba(255, 0, 0, 0.25) 1px,
              transparent 1px,
              transparent 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255, 0, 0, 0.25) 0,
              rgba(255, 0, 0, 0.25) 1px,
              transparent 1px,
              transparent 100%
            )
          ;
          background-position: 0 0, 0 0;
          background-size: ${width}px ${width}px;
          display: grid;
          justify-content: center;
          padding-bottom: 5rem;
        }
        #notice {
          font-weight: bold;
          padding: 5rem 0;
          max-width: 35rem;
        }
        #waving {
          text-align: center;
          font-size: 5rem;
          padding: 0;
          margin-bottom: 1rem; 
          animation: wave 0.45s linear infinite;
          animation-direction: alternate-reverse;
        }
        #form {
          background: 
          padding-top: 5rem;
          padding: 20px;
          background: #03000F;
          color:#3DD7AC;
          border-radius: .5rem;
        }
        
        h1 {
            margin: 0;
            font-size: 3em;
            letter-spacing: 2px;
            color: #3DD7AC;
            text-align: center;
            padding-bottom: 3rem;
        }
        // .aside {
        //     position: absolute;
        //     transform: rotate(-90deg);
        //     transform-origin: right;
        //     right: 3%;
        //     top: 30vh;
        //     color: #fff
        //   }
        h1 span {
            display: block;
            color: transparent;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: #3DD7AC;
        }
        
          @keyframes wave {
            0% {
              transform: rotate(-40deg);
            }
            100% {
              transform: rotate(-10deg);
            }
          }
          @media (max-width: 768px) {
            h1 {
                font-size: 3em;
                width: 90%;
                margin: 0 auto;
            }
        }
      `}</style>
    </Layout>
    )
  } else { return "" }
} 