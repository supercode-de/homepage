import Typeform from "./TypeForm_neu";

const HeaderCallToAction_neu = () => {
  return (
    <div id="header-call">
      <h2>
        Lerne wichtige IT-Fähigkeiten neben deinem Beruf oder Studium
        <br />
        <span className="super">
          <span className="bling">Jetzt</span> auch{" "}
          <span className="bling2">online!</span>
        </span>
      </h2>
      <div className="buttons">
        <Typeform />
      </div>
      <style jsx>{`
        #header-call {
          background: var(--super-blau);
          color: #fff;
          font-family: "Neue_Machina_Regular_400";
          padding: 3rem 7% 1rem;
        }
        h2 {
          font-size: 3.8em;
          line-height: 1.3em;
          margin: 0 2%;
        }
        h2 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }

        .super,
        .circle,
        .bling,
        .bling2 {
          position: relative;
        }

        h2 span.circle::after {
          position: absolute;
          background: url("/img/Vector64.svg") center/contain no-repeat;
          transform: rotateX(36deg);

          height: 300%;
          width: 105%;
          right: 0;
          bottom: -105%;
          content: "";
          display: block;
        }

        h2 span.bling::before {
          position: absolute;
          background: url("/img/bling.png") center/contain no-repeat;
          height: 3rem;
          width: 2rem;
          bottom: 0.2em;
          left: -2rem;
          content: "";
          display: block;
        }
        h2 span.bling2::after {
          position: absolute;
          background: url("/img/bling2.png") center/contain no-repeat;
          height: 3rem;
          width: 2rem;
          bottom: 0.2em;
          right: -2rem;
          content: "";
          display: block;
        }
        .buttons {
          width: 100%;

          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        @media (min-width: 1200px) {
          h2 {
            // font-size: 6em;
          }
        }

        @media (max-width: 1040px) {
          h2 {
            font-size: 3em;
          }
        }
        @media (max-width: 768px) {
          h2 span.bling::before {
            bottom: -0.1em;
          }
          h2 span.bling2::after {
            bottom: -0.2em;
          }
        }
        @media (max-width: 468px) {
          h2 {
            font-size: 2.1em;
            padding: 0 6%;
          }
          h2 span.bling::before {
            bottom: -0.5em;
            width: 1rem;
            left: -1.2rem;
          }
          h2 span.bling2::after {
            bottom: -0.5em;
            width: 1rem;
            right: -1.2rem;
          }
          @media (max-width: 320px) {
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderCallToAction_neu;
