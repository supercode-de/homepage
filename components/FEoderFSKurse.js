const AnfängerBisBusiness = (props) => {
  const pixelSize = 2.5;

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
          background: #fff;
          color: #5d3ede;
          font-family: "Neue_Machina_Regular_400";
          padding: 2rem 0;

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
          position: relative;
        }
        #starter-business div {
          display: flex;
          align-items: center;
        }

        h1 {
          font-size: 4em;
          line-height: 1.2em;
          font-weight: 700;
          text-align: center;
          margin: 0 5%;
        }
        span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #5d3ede;
          font-weight: 400;
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

export default AnfängerBisBusiness;
