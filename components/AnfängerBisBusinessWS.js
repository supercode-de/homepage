const AnfängerBisBusiness = (props) => {
  const pixelSize = 2.5;

  return (
    <div id="starter-business">
      <h1>
        Von <span className="super">Anfänger bis Business &mdash;</span> lerne
        Programmieren, Designen oder agiles Management in einem unserer{" "}
        <span className="super">Workshops.</span>
      </h1>

      <style jsx>{`
        #starter-business {
          background: #fff;
          color: #5d3ede;
          font-family: "Neue_Machina_Regular_400";
          padding: 2rem 0;

          background: linear-gradient(
              90deg,
              #fff ${props.width - pixelSize}px,
              transparent 1%
            ),
            linear-gradient(#fff ${props.width - pixelSize}px, transparent 1%),
            #3dd7ac;
          background-size: ${props.width}px ${props.width}px;
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
