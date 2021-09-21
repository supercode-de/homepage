import Button from "./small/Button";
import { useWindowSize } from "./functions/windowSize";
import Arrow from "./small/Arrow";
import Telefon from "./small/Telefon";

const HeaderWS = (props) => {
  // const width = useWindowSize().width / 12
  const pixelSize = 1;

  return (
    <div id="header">
      <div className="container">
        <img src="/img/_DSC3141_LowRes.png" alt="" />
        <article>
          <div>
            <h1>
              Teste deine <br /> Codingskills in <br />
              unserem
              <span>Workshops.</span>
            </h1>
          </div>
          {/* <div className="aside">📞 +49 211 7817 233-0</div> */}
          <Telefon color="#5D3EDE" />
        </article>
      </div>
      <Arrow />
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
        // .aside {
        //   position: absolute;
        //   transform: rotate(-90deg);
        //   transform-origin: right;
        //   right: 3%;
        //   top: 35vh;
        //   color: #5D3EDE;
        //   font-size:1.3rem;
        // }
            
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
        @media (max-width: 468px) {
          .aside {
            right: 5%;              
            font-size:1.2rem;
          }
          img{
            display: none;
          }
          h1 {
            font-size: 3.5em;
            width: 90%;
            text-align: center;
            margin:100px auto;
            line-height:30px
        
          }
        }  
                `}</style>
    </div>
  );
};

export default HeaderWS;
