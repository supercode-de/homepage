import Button from "./small/Button";

const HeaderCallToActionWS = (props) => {
  return (
    <div id="header-call">
      <div>
        <h2>
          Lerne wichtige IT-Fähigkeiten neben deinem Beruf oder Studium.
        </h2>
      </div>
      <style jsx>{`
        #header-call {
          background: #5d3ede ;
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
