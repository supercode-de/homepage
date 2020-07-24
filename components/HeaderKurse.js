import Button from "./small/Button";
import { useWindowSize } from "./functions/windowSize";

const HeaderKurse = (props) => {
  // const width = useWindowSize().width / 12
  const pixelSize = 2;
  console.log("Header ", props);
  return (
    <div id="header">
      <div className="container">


        <img src="/img/Bilder.png" alt="" />
        <article>
          <div>
            <h1>
              Lerne <br /> Web-Entwicklung<br />  in unseren

            <span>Workshops.</span>

            </h1>
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="aside">📞 +49 211 7817 233-0</div>

        </article>
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
            .container{
              display:grid;
              grid-template-columns:45% 55%;
              gap:40px;
              padding: 13vh 10%;
            }
            h1 {
              margin: 0;
              font-size: 5em;
              letter-spacing: 2px;
              color: #3DD7AC;
              line-height:4.8rem;
          }
          img{
            width:100%
          }
          h1 span {
            display: block;
            color: transparent;
            letter-spacing: 3px;
            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: #3DD7AC;
        }
        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: right;
          right: 3%;
          top: 35vh;
          color: #5D3EDE;
          font-size:1.3rem;
        }
            .arrow {
                text-align:center;
                margin-top:100px;
                
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
              @media (max-width: 1040px) {
                h1 {
                    font-size: 2.5em;
                    width: 90%;
                    margin: 0 auto;
                }
                
              @media (max-width: 768px) {
                h1 {
                    font-size: 2em;
                    width: 90%;
                    margin:40px auto;
                    line-height:30px
                }
                .container{
                  grid-template-columns:100%;
                 
                }
            }
              
                `}</style>
    </div>
  );
};

export default HeaderKurse;
