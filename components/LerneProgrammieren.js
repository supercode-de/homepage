const LerneProgrammieren = () => {
  return (
    <div id="starter-business">
      <h1>
        Lerne <span className="super">Programmieren</span> und werde{" "}
        <span className="super">Front-End oder Full-Stack</span>{" "}
        Web-Developer*in! – Jetzt auch{" "}
        <span className="super circle">online.</span>
      </h1>

      <style jsx>{`
        #starter-business {
          background: var(--super-white);
          color: var(--super-lila);
          padding: 2rem 0;
          position: relative;
        }
        #starter-business div {
          display: flex;
          align-items: center;
        }
        h1 {
          text-align: center;
          margin: 0 5%;
        }
        span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: .5px;
          -webkit-text-stroke-color: var(--super-lila);
        }

        span.circle {
          position: relative;
        }

        span.circle::after {
          position: absolute;
          background: url("/img/Vector64.svg") center/contain no-repeat;
          transform: rotateX(45deg);

          height: 200%;
          width: 105%;
          right: -2%;
          bottom: -55%;
          content: "";
          display: block;
        }

        @media (max-width: 1040px) {
          h1 {
            font-size: 3em;
          }
        }

        @media (max-width: 468px) {
          h1 {
            font-size: 2.5em;
          }
        }
      `}</style>
    </div>
  );
};

export default LerneProgrammieren;
