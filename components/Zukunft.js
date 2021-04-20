// import { useWindowSize } from './functions/windowSize'
import Link from "next/link";
const Zukunft = (props) => {
  // const width = useWindowSize().width / 12
  const pixelSize = 1.5;
  return (
    <div id="zukunft" className="whiteGreenDots">
      <div className="infos">
        <div className="info-one">
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
        <div>
          <div className="info-headline lila-box">
            <h3>
              <Link href="/workshops">
                <a>Workshops ⟶</a>
              </Link>
            </h3>
            <p>
              Kurz, divers und zeitgemäß – lerne Grundlagen im Bereich IT oder
              schärfe dein Wissen in einer Programmiersprache.
            </p>
          </div>
        </div>
        <div>
          <div className="info-headline lila-box2">
            <h3>
              <Link href="/kurse">
                <a>Bootcamps ⟶</a>
              </Link>
            </h3>
            <p>
              Intensiv, praxisnah und euphorisierend – wir machen dich fit in
              nur 5 Monaten
            </p>
          </div>
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
      <img
        src="/webp/_DSC2336_MidRes.webp"
        alt="Full Stack Developer Lernen Bildungsgutschein, IT Umschulung Förderung Jobcenter"
      />
      <style jsx>{`
        #zukunft {
          color: var(--super-blau);
          font-family: "Neue_Machina_Regular_400";
          position: relative;
          padding: 100px calc(100vw / 12) 5px calc(100vw / 12);
        }
        h1 {
          font-size: 3.3em;
          line-height: 1.2em;
          letter-spacing: 2px;
          color: var(--super-blau);
          margin: 0;
        }
        h1 span {
          font-weight: 400;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: var(--super-blau);
        }
        .infos {
          display: grid;
          grid-template-columns: 4.3fr 2.5fr 2.5fr;
          gap: 20px 30px;
        }
        .infos > div {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
        }
        .info-headline {
          padding: 4rem 2rem 2rem;
          position: relative;
        }
        .info-headline p {
          font-style: italic;
        }

        .lila-box {
          background: url("/img/Vector60.png") center/100% 100% no-repeat;
        }

        .lila-box2 {
          background: url("/img/Vector61.png") center/100% 100% no-repeat;
        }
        h3 {
          color: var(--super-lila);
          font-size: 1.5em;
          margin: 0;
          font-weight: 200;
        }
        p {
          font-size: 1.1em;
          font-weight: 200;
        }

        a {
          color: var(--super-lila);
          text-decoration: none;
        }
        .images {
          margin-top: ${props.width * 1.2}px;
          padding-bottom: ${props.width * 2.6}px;
        }
        .img-one {
          width: ${props.width * 5}px;
        }
        .img-two {
          width: ${props.width * 3}px;
          margin-left: ${props.width - 60}px;
          margin-bottom: ${props.width - 200}px;
          transform: translateY(4vh);
        }
        .img-three {
          position: absolute;
          top: ${props.width * 6}px;
          left: ${props.width}px;
          width: ${props.width * 3}px;
          z-index: 1;
        }

        .images + img {
          position: absolute;
          bottom: 0;
          left: ${props.width * 3.3}px;
          z-index: 1;
          margin-bottom: -10%;
          width: ${props.width * 3}px;
        }

        @media (max-width: 1040px) {
          h1 {
            font-size: 3em;
          }
          h3 {
            font-size: 1.3em;
          }

          .info-headline {
            margin-top: 0;
          }

          .lila-box {
          }

          .lila-box2 {
          }
        }
        @media (max-width: 863px) {
          .lila-box {
            // background: none;
          }
          .lila-box2 {
            // background: none;
          }
          .info-headline {
            // padding: 0;
            padding: 35px 10px 15px;
          }
        }

        @media (max-width: 768px) {
          .images {
            padding-bottom: 50px;
          }

          .images + img {
            display: none;
          }
          .lila-box {
            // background: none;
          }
          .lila-box2 {
            // background: none;
          }
          h1 {
            // padding: ${props.width * 1.5}px 0 0 ${props.width - 23}px;
          }
          h3 {
            font-size: 2em;
          }
          p {
            font-size: 1.1em;
          }
          .infos {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 90%;
            margin: 0 auto;
          }
          .info-one,
          .info-headline {
            width: auto;
            margin: 0;
          }
          .info-one {
            grid-column: 1 / span 2;
          }
          .img-two {
            margin-left: ${props.width - 30}px;
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
          .infos {
            grid-template-columns: 1fr;
          }
          .info-one {
            grid-column: auto;
          }
          img {
            display: none;
          }
          p {
            font-size: 1.5em;
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
