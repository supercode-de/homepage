const Zukunft = (props) => {
  return (
    <div id="zukunft">
      <div className="infos">
        <div>
          <h1>
            Denkst du über deine <span>Zukunft</span> nach?
          </h1>
          <p>
            Wir bieten Menschen einen modernen Ansatz für lebenslanges Lernen
            und den ultimativen Skill Power-Up für eine schöne berufliche
            Zukunft.
          </p>
          <p>
            Teste dich, uns und deine Skills in einem unserer kostenlosen
            <a href="/workshops" target="_blank"> Workshops!</a>
          </p>
        </div>
        <div>
          <img src="/webp/_DSC2464_LowRes.webp" alt="Frauen Kostenlos Weiterbildung Programmieren lernen, Frauen Programmieren Lernen Fernkurs Bootcamp" />
        </div>
      </div>
      <div className="images">
        <img
          className="img-one"
          src="/webp/_DSC2652_LowRes_6.webp"
          alt="Programmieren Weiterbildungsangebote Düsseldorf, SuperCode Programmieren Lernen Bootcamp"
        />
        <img
          className="img-two"
          src="/webp/_DSC2652_LowRes_7.webp"
          alt="Full Stack Developer Fernkurs Weiterbildung, Best Web Developer Coding Bootcamp"
        />
      </div>
      <style jsx>{`
        #zukunft {
          color: var(--super-blau);
          position: relative;
          padding: 100px calc(100vw / 12) 5px calc(100vw / 12);
          background: var(--super-white);
        }

        h1 span {
          font-weight: 400;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: var(--super-blau);
        }
        .infos {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .infos a {
          color: inherit;
        }
        .infos a:hover {
          color: var(--super-green);
        }
        .infos div:nth-of-type(1){
          width: 55%;
        }
        .infos p:nth-of-type(1){
          margin-bottom: 34px;
        }

        .images {
          margin-top: calc(100vw / 12 * 1.2);
          margin-bottom: calc(100vw / 12 * 1.2);
          // padding-bottom: calc(100vw / 12 * 2.6);
        }
        .img-one {
          width: calc(100vw / 12 * 5);
        }
        .img-two {
          width: calc(100vw / 12  * 3);
          margin-left: calc(100vw / 12  - 60px);
          margin-bottom: calc(100vw / 12  - 200px);
          transform: translateY(4vh);
        }
        .images + img {
          position: absolute;
          bottom: 0;
          left: calc(100vw / 12 * 3.3);
          z-index: 1;
          margin-bottom: -10%;
          width: calc(100vw / 12 * 3);
        }

        @media (max-width: 1040px) {
          h1 {
            font-size: 3em;
          }
          h3 {
            font-size: 1.3em;
          }

        }

        @media (max-width: 768px) {
          .infos,
          .infos div:nth-of-type(1) {
            width: 100%;
          }
          .images {
            padding-bottom: 50px;
          }

          .images + img {
            display: none;
          }
          .img-two {
            margin-left: calc(100vw / 12 - 30px);
            transform: translateY(-12vh);
          }
        }

        @media (max-width: 468px) {
          #zukunft {
            padding-bottom: 10%;
          }
          .infos {
            width: 100%;
          }
          h1 {
            width: 100%;
          }
          img {
            display: none;
          }

          .img-one {
            width: 270px;
          }
          .img-two {
            width: 200px;
            position: absolute;
            top: 140px;
            right: 0;
          }
          .images {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Zukunft;
