import Button from "./small/Button";

const HeaderCallToActionWS = () => {
  return (
    <div id="header-call">
      <p>(c)</p>
      <div>
        <h2>
          Du willst Programmieren lernen
          <br /> aber weißt nicht wie du starten sollst
        </h2>
      </div>
      <style jsx>{`
        #header-call {
          background: #5d3ede url(/fragezeichen.svg) right/contain no-repeat;
          background-origin: content-box;
          background-size: 6.6%;
          color: #3dd7ac;
          padding: 5vh 3% 5vh;
          text-align: center;
          position: relative;
        }
        #header-call > p {
          color: #fff;
          font-size: 1.8rem;
          position: absolute;
          top: 6%;
          left: 3%;
        }
        h2 {
          font-size: 2.2rem;
        }
      `}</style>
    </div>
  );
};

export default HeaderCallToActionWS;
