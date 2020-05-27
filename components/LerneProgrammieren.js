import Button from "./small/Button";

const LerneProgrammieren = () => {
  return (
    <div id="weiterbildung">
      <h1>
        Von <span>Anfänger bis Business –</span>
        <br />
        lerne Coden in einem unserer
        <br />
        <span>Workshops.</span>
      </h1>
      <div className="aside">Lerne Programmieren</div>
      <style jsx>{`
        #weiterbildung {
          background: #000;
          color: #3dd7ac;
          padding: 10vh 0;
          display: flex;
          align-items: center;
          position: relative;
        }
        h1 {
          font-size: 4.6rem;
          letter-spacing: 2px;
          margin-left: 10%;
          line-height: 4.8rem;
        }
        span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
        }
        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          left: 3%;
          top: 28%;
          color: #3dd7ac;
          font-size: 1.3rem;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default LerneProgrammieren;
