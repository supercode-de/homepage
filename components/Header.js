import Button from "./small/Button"

const Header = (props) => {
  const pixelSize = 2 // Width of Lines in Background
  return (
    <div id="header">
      <h1>
        Programmieren <br /> lernen war noch nie <span>digitaler.</span>
      </h1>
      <div className="buttons">
        <Button href="/" text="PLAY VIDEO" />
      </div>
      <div className="aside">📞 +49 211 7817 233-0</div>
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <style jsx>{`
            #header {
                background: linear-gradient(90deg, #000 ${
        props.width - pixelSize
        }px, transparent 1%), linear-gradient(#000 ${
        props.width - pixelSize
        }px, transparent 1%) , #fff;
                background-size: ${props.width}px ${props.width}px;
            }
            h1 {
                margin: 0;
                padding-top: 20vh;
                font-size: 5em;
                letter-spacing: 2px;
                color: #3DD7AC;
                text-align: center;
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
                padding: 12vh 0;

            }
            .arrow {
                position: absolute;
                bottom 20%;
                left: 50%;
                transform: translate(-50%, -50%);
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
