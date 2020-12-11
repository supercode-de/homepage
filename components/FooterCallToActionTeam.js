import Button from "./small/Button";
import Beratung from "./Beratung";
import Link from "next/link";

const FooterCallToAction = (props) => {
  const pixelSize = 1.5;

  return (
    <div id="call-to-action">
      <h1>
        Worauf wartest du noch?! <br /> Bewirb{" "}
        <span className="super">dich jetzt!</span>
      </h1>
      <div className="buttons">
        <a href="mailto:bewerbung@super-code.de?subject=Initiativ%20Bewerbung">
          Initiativ
        </a>
        <Beratung buttonText="Kontakt" buttonTextColor="#5d3ede" />
      </div>
      <style jsx>{`
        #call-to-action {
          background: linear-gradient(
              90deg,
              #fff calc(100vw / 12 - ${pixelSize}px),
              transparent 1%
            ),
            linear-gradient(
              #fff calc(100vw / 12 - ${pixelSize}px),
              transparent 1%
            ),
            #3dd7ac;
          background-size: calc(100vw / 12) calc(100vw / 12);

          color: #5d3ede;
          margin: 0 auto;
          padding: 4rem 6% 2rem;

          font-family: "Neue_Machina_Regular_400";
        }
        h1 {
          text-transform: uppercase;
          font-size: 3.5em;
          line-height: 1.2em;
          letter-spacing: 3px;
          margin: 0;
          display: block;
          font-weight: 500;
        }
        .super {
          color: transparent;
          font-weight: 300;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #5d3ede;
        }

        .buttons {
          // text-align: center;
          display: flex;
          width: 100%;
          justify-content: flex-end;
        }

        a {
          align-items: center;
          margin: 2em 1em 0;
          font-family: "Fira Sans", sans-serif;
          font-style: normal;
          min-width: 23em;

          font-size: 0.7em;
          font-weight: 600;
          line-height: 1.5em;
          text-align: center;
          // letter-spacing: 2px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          padding: 10px 0;
          text-align: center;
          background: transparent;
          border: 1px solid #3dd7ac;
          text-decoration: none;
          color: #5d3ede;
          display: inline-block;
          // min-width: 100px;
          // display: flex;
          // justify-content: center;
          // align-items: center;
        }
        a:hover {
          color: #5d3ede;
          background: #3dd7ac;
        }

        span.circle {
          position: relative;
        }

        span.circle::after {
          position: absolute;
          background: url("/img/Vector64.svg") center/contain no-repeat;
          transform: rotateX(67deg);

          height: 300%;
          width: 105%;
          right: 0;
          bottom: -100%;
          content: "";
          display: block;
        }

        @media (max-width: 1024px) {
          h1 {
            font-size: 3em;
          }
        }
        @media (max-width: 468px) {
          a {
            font-weight: 400;
            font-size: 1.2em;
            width: 16em;
            min-width: 0;
          }
          .buttons {
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 768px) {
          #call-to-action {
            display: block;
          }
        }
        @media (max-width: 370px) {
        }
      `}</style>
    </div>
  );
};

export default FooterCallToAction;
