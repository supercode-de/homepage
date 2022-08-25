const Zukunft = (props) => {
  return (
    <div id="zukunft">
      <div className="infos">
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
            Workshops!
          </p>
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
      <img
        src="/webp/_DSC2336_MidRes.webp"
        alt="Full Stack Developer Lernen Bildungsgutschein, IT Umschulung Förderung Jobcenter"
      />
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
          width: 50%;
        }
        .infos p:nth-of-type(1){
          margin-bottom: 34px;
        }

        .images {
          margin-top: calc(100vw / 12 * 1.2);
          padding-bottom: calc(100vw / 12 * 2.6);
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
        .img-three {
          position: absolute;
          top: calc(100vw / 12 * 6);
          left: calc(100vw / 12);
          width: calc(100vw / 12 * 3);
          z-index: 1;
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
          .images {
            padding-bottom: 50px;
          }

          .images + img {
            display: none;
          }
          h3 {
            font-size: 2em;
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
          h1 {
            width: unset;
          }

          .info-one {
            grid-column: auto;
          }
          img {
            display: none;
          }
          a {
            font-size: 1.2em;
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
