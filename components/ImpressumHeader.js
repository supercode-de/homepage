import Arrow from "./small/Arrow";
import Telefon from "./small/Telefon";


const ImpressumHeader = (props) => {
  const pixelSize = 1; // Width of Lines in Background
  return (
    <div id="impressum">
      <h1>Impressum</h1>

      <div className="aside">📞 +49 211 7817 233-0</div>
      <Telefon color="#fff" />
      <Arrow />
      <style jsx>{`
        #impressum {
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
          height: 90vh;
        }
        h1 {
          margin: 0;
          padding-top: 36vh;
          padding-bottom: 10vh;
          font-size: 5em;
          letter-spacing: 2px;
          color: #3dd7ac;
          text-align: center;
        }
        // .aside {
        //   position: absolute;
        //   transform: rotate(-90deg);
        //   transform-origin: right;
        //   right: 3%;
        //   top: 30vh;
        //   color: #fff;
        // }
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

export default ImpressumHeader;
