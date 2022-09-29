const WS_AnfaengerBisBusiness = () => {
  return (
    <div id="starter-business">
      <h1>
        Von <span className="super">Anfänger bis Business &mdash;</span> lerne
        Programmieren, Designen oder agiles Management in einem unserer{" "}
        <span className="super">Workshops.</span>
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
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--super-lila);
          font-weight: 400;
        }

      `}</style>
    </div>
  );
};

export default WS_AnfaengerBisBusiness;
