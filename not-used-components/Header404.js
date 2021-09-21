import Telefon from "./small/Telefon";

const Header404 = (props) => {
  const pixelSize = 2; // Width of Lines in Background
  return (
    <div id="header">
      <h1>
        <span>404</span>
        Baby
      </h1>
      <div className="buttons"></div>
      <Telefon />

      <img src="/img/_DSC2571_LowRes 3.png" alt="" />

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
          display: flex;
          flex-direction: column;
          align-items: center;
          //   position: relative;
        }
        .large {
          background: #03000f;
          width: 100%;
          text-align: center;
        }
        h1 {
          margin: 0;
          padding-top: 11vh;
          font-size: 9em;
          letter-spacing: 2px;
          color: #3dd7ac;
          text-align: center;
        }
        h1 span {
          display: block;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
        }
        #header img {
          position: relative;
          z-index: 2;
          margin-bottom: -10%;
          width: 33.2%;
          margin-top: 5%;
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

export default Header404;
