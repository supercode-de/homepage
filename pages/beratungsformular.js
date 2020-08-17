import Layout from "../components/Layout";
import { useWindowSize } from '../components/functions/windowSize'
import HubspotForm from 'react-hubspot-form'

export default function Beratungsformular() {
  const pixelSize = 1;
  if (process.browser) {
    const width = useWindowSize().width / 12
    return (<Layout>
      <div id="header">
        <div id="waving">👋</div>
        <h1>Willkommen bei<br />Supercode</h1>
        <div className="aside">📞 +49 211 7817 233-0</div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="sign-up">
        {/* <div id="notice">
          <p>DSGVO First!</p>
          <p>
            Aus Datenschutzgründen müsst ihr unser online Kontaktformular ausfüllen.<br />
            Anschließend werdet ihr zum Workshop-Video-Chat weitergeleitet.
          </p>
        </div> */}
        <div id="form">
          <HubspotForm
            portalId='5807040'
            formId='4fb004bc-0372-4848-b17d-923a1b059392'
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
          // display: grid;
          // justify-content: center;
          padding: ${width}px;
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
          margin: 0 auto;
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
        .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: right;
            right: 3%;
            top: 30vh;
            color: #fff
          }
        h1 span {
            display: block;
            color: transparent;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: #3DD7AC;
        }
        .arrow {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100px;
          padding-bottom: 50px;
          }
          .arrow span {
            display: block;
            width: 30px;
            height: 30px;
            border-bottom: 2px solid #3DD7AC;
            border-right: 2px solid #3DD7AC;
            transform: rotate(45deg);
            margin: -10px;
            animation: animate 2s infinite;
          }
          .arrow span:nth-child(2) {
            animation-delay: -0.2s;
          }
          .arrow span:nth-child(3) {
            animation-delay: -0.4s;
          }
          @keyframes animate {
            0% {
              opacity: 0;
              transform: rotate(45deg) translate(-20px, -20px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: rotate(45deg) translate(20px, 20px);
            }
          }
          @keyframes wave {
            0% {
              transform: rotate(-40deg);
            }
            100% {
              transform: rotate(-10deg);
            }
          }
          button {
            background:none;
            display:inline-block;
            color: #000;
            color:#fff;
            text-decoration: none;
            text-transform: uppercase;
            padding: 5px 10px;
            border: 3px solid #fff;
            font-size: .9em;
            font-weight: 200;
            margin: 10px;
            transition: top .5s linear, box-shadow .5s linear, left .5s linear;
            box-shadow: 0 0 0 0 transparent;
            position: relative;
            top: 0;
            left: 0;
            text-align: center;
            min-width:100px;
        }
        button:hover {
            // margin: 10px 5px 15px 10px;
            // margin: 10px 10px 15px 15px;
            box-shadow: -5px 5px 0 0 #fff;
            top: -5px;
            left: 5px;
        }
          @media (max-width: 768px) {
            h1 {
                font-size: 3em;
                width: 90%;
                margin: 0 auto;
            }
            #sign-up {
              padding: 0;
            }
        }
      `}</style>
    </Layout>
    )
  } else { return "" }
} 