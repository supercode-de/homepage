import Arrow from "./small/Arrow";
import Telefon from "./small/Telefon";

const HeaderKurse = (props) => {
  // const width = useWindowSize().width / 12
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
            article{
              align-self:Center
              
            }
            h1 {
              margin: 0;
              font-size: 5em;
              letter-spacing: 2px;
              color: #3DD7AC;
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
                // .arrow {
                //   display: flex;
                //   flex-direction: column;
                //   justify-content: center;
                //   align-items: center;
                //   margin-top: 5px;              
                // }
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
