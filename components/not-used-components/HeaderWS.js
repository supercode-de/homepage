import Arrow from "./small/Arrow";
import TelefonAside from "../small/TelefonAside";

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

          <TelefonAside/>
        </article>
      </div>
      <Arrow />
      <style jsx>{`
            #header {
                background: var(--super-black);
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
              color: var(--super-green);
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
            -webkit-text-stroke-color: var(--super-green);
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
