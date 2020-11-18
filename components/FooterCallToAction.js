import Button from "./small/Button";
import Beratung from "./Beratung";

const FooterCallToAction = (props) => {
  return (
    <div id="call-to-action">
      <h1>
        Worauf wartest du noch?! <br />
        <span>Die nächsten Kurse starten im {props.month}!</span>
      </h1>
      <div className="buttons">
        <Beratung />
      </div>
      <style jsx>{`
        #call-to-action {
          background: #5d3ede;
          color: #3dd7ac;
          margin: 0 auto;
          padding: 8vh;
          display: flex;
          justify-content: space-around;
        }
        h1 {
          text-transform: uppercase;
          font-size: 4em;
          letter-spacing: 2px;
          margin: 0;
          display: block;
          color: transparent;
          font-weight: 300;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #ffffff;
        }
        // span {
        //   display: block;
        //   color: transparent;
        //   letter-spacing: 3px;
        //   -webkit-text-stroke-width: 1.5px;
        //   -webkit-text-stroke-color: #3dd7ac;
        // }
        .buttons {
          display: flex;
          align-items: flex-end;
        }
        @media (max-width: 768px) {
          #call-to-action {
            display: block;
          }
          .buttons {
            margin-top: 1em;
            height: 5em;
          }
        }
      `}</style>
    </div>
  );
};

export default FooterCallToAction;
