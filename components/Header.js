import Popup from "reactjs-popup";
import YouTube from 'react-youtube';

const Header = (props) => {
  const pixelSize = 2 // Width of Lines in Background
  const opts = {
    playerVars: {
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
            <YouTube class="youtube" videoId="ewW2g5RP5d4" opts={opts} />
          </div>
        </Popup>
      </div>
      <div className="aside">📞 +49 211 7817 233-0</div>
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <style jsx>{`
            #header {
                background: linear-gradient(90deg, #03000F ${
        props.width - pixelSize
        }px, transparent 1%), linear-gradient(#03000F ${
        props.width - pixelSize
        }px, transparent 1%) , #fff;
                background-size: ${props.width}px ${props.width}px;
            }
            
            .large{
              background:#03000F;
              width:100%;
              text-align:center;
            }
            h1 {
                margin: 0;
                padding-top: 20vh;
                font-size: 5em;
                letter-spacing: 2px;
                color: #3DD7AC;
                text-align: center;
            }
            .youtube{
              width:100%
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
            .buttons {
                text-align: right;
                width: 70%;
                margin: 0 auto;
                padding: 12vh 0 6vh;
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
            }
              
                `}</style>
    </div>
  );
};

export default Header;
