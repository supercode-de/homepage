import Popup from "reactjs-popup";
import YouTube from "react-youtube";
import Arrow from "./small/Arrow";
import Telefon from "./small/Telefon";

const Header = (props) => {
  const pixelSize = 1; // Width of Lines in Background
  const opts = {
    playerVars: {
      width: 300,

      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div id="header">
      <h1>
        Programmieren <br /> lernen war noch nie <span>digitaler.</span>
      </h1>
      <div className="buttons">
        <Popup
          trigger={<button className="button"> PLAY VIDEO </button>}
          modal
          closeOnDocumentClick
        >
          <div className="large">
            <YouTube className="youtube" videoId="ewW2g5RP5d4" opts={opts} />
          </div>
        </Popup>
      </div>
      <Telefon />
      <Arrow />
      <style jsx global>{`
        iframe.youtube {
          width: 100% !important;
        }
        @media (max-width: 468px) {
          iframe.youtube {
            height: auto !important;
          }
          .popup-content {
            width: 100% !important;
          }
        }
      `}</style>
      <style jsx>{`
        #header {
          background: linear-gradient(
              90deg,
              #03000f ${props.width - pixelSize}px,
              transparent 1%
            ),
            linear-gradient(
              #03000f ${props.width - pixelSize}px,
              transparent 1%
            ),
            #fff;
          background-size: ${props.width}px ${props.width}px;
        }

        .large {
          background: #03000f;
          width: 100%;
          text-align: center;
        }
        h1 {
          margin: 0;
          padding-top: 16vh;
          font-size: 5em;
          letter-spacing: 2px;
          color: #3dd7ac;
          text-align: center;
        }
        .youtube {
          width: 100%;
        }
        h1 span {
          display: block;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
        }
        .buttons {
          text-align: right;
          width: 70%;
          margin: 0 auto;
          padding: 12vh 0 6vh;
        }

        button {
          background: none;
          display: inline-block;
          color: #000;
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          padding: 5px 10px;
          border: 3px solid #fff;
          font-size: 0.9em;
          font-weight: 200;
          margin: 10px;
          transition: top 0.5s linear, box-shadow 0.5s linear, left 0.5s linear;
          box-shadow: 0 0 0 0 transparent;
          position: relative;
          top: 0;
          left: 0;
          text-align: center;
          min-width: 100px;
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
        }
        @media (max-width: 468px) {
          button {
            font-size: 1.2em;
          }
          #header {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            min-height: 90vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
