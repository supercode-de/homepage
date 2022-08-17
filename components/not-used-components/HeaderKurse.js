import Arrow from "./small/Arrow";
import TelefonAside from "../small/TelefonAside";
const HeaderKurse = (props) => {
  const pixelSize = 1;

  return (
    <div id="header">
      <div className="container">
        <img src="/img/Bilder.png" alt="" />
        <article>
          <div>
            <h1>
              Lerne <br /> Web-Entwicklung
              <br /> in unseren
              <span>Bootcamps.</span>
            </h1>
          </div>
          <TelefonAside />
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
            article{
              align-self:Center

            }
            h1 {
              margin: 0;
              font-size: 5em;
              letter-spacing: 2px;
              color: var(--super-green);
              line-height:4.8rem;
          }
          img{
            width:70%
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

                img {
                  position:absolute; 
                  width: 30%;
                  z-index: 0;
                  top:43%;
                  right: 35%;
                  display: none;
                  
              }
              h1 {
                font-size: 4.6em;
                position:relative; 
                margin-top: 20%;
                margin-bottom: 60%;
                text-align: center;
                z-index: 99;

              }
            }
            
            @media (max-width: 468px) {
              
              h1 {
                font-size: 3.3em;
                position:relative; 
                margin-top: 20%;
                margin-bottom: 60%;
                text-align: center;
                z-index: 99;

              }
              img {
                position:absolute; 
                width: 50%;
                z-index: 0;
                top:15%;
                right: 20%;
                display: none;
            }
            
              
            .aside {
              right: 5%;
              font-size: 1.1rem;
          }

          
            }
              
                `}</style>
    </div>
  );
};

export default HeaderKurse;
