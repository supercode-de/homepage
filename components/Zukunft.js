// import { useWindowSize } from './functions/windowSize'
import Link from "next/link";
const Zukunft = (props) => {
  // const width = useWindowSize().width / 12
  const pixelSize = 1;
  return (
    <div id="zukunft">
      <h1>
        Denkst du über deine <span>Zukunft</span> nach?
      </h1>
      <div className="infos">
        <div className="info-one">
          <p>
            Wir bieten Menschen einen modernen Ansatz für lebenslanges Lernen
            und den ultimativen Skill Power-Up für eine schöne berufliche
            Zukunft!
          </p>
          <p>
            Teste dich, uns und deine Skills in einem unserer kostenlosen
            Workshops!
          </p>
        </div>
        <div className="info-headline">
          <h3>
            <Link href="/kurse">
              <a>Bootcamps ⟶</a>
            </Link>
          </h3>
          <p>
            Intensiv, praxisnah und euphorisierend – wir machen dich fit in nur
            5 Monaten
          </p>
        </div>
        <div className="info-headline">
          <h3>
            <Link href="/workshops">
              <a>Workshops ⟶</a>
            </Link>{" "}
          </h3>
          <p>
            Kurz, divers und zeitgemäß – lerne Grundlagen im Bereich IT oder
            schärfe dein Wissen in einer Programmiersprache.
          </p>
        </div>
      </div>
      <div className="images">
        <img className="img-one" src="/img/_DSC2652_LowRes 6.png" alt="" />
        <img className="img-two" src="/img/_DSC2652_LowRes 7.png" alt="" />
        {/* <img className="img-three" src="https://unsplash.it/900/600" alt="" /> */}
      </div>

      <style jsx>{`
        #zukunft {
          color: #3dd7ac;
          background: linear-gradient(
              90deg,
              #03000f ${props.width - pixelSize}px,
              transparent 1%
            ),
            linear-gradient(
              #03000f ${props.width - pixelSize}px,
              transparent 1%
            ),
            #fff;
          background-size: ${props.width}px ${props.width}px;
        }
        h1 {
          padding: ${props.width * 1.5}px 0 0 ${props.width}px;
          font-size: 4em;
          letter-spacing: 2px;
          color: #3dd7ac;
          width: ${props.width * 5}px;
          margin: 0;
        }
        h1 span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
        }
        .infos {
          display: flex;
          margin: ${props.width}px 0 0;
        }
        .info-one {
          width: ${props.width * 3}px;
          margin: 0 ${props.width}px;
        }
        .info-headline {
          width: ${props.width * 2}px;
          margin-right: ${props.width}px;
        }
        p {
          font-weight: 200;
        }
        h3 {
          color: #5d3ede;
          font-size: 2em;
          margin: 0;
        }
        a {
          color: #5d3ede;
          text-decoration: none;
        }
        .images {
          margin-top: ${props.width}px;
          position: relative;
          text-align: center;
          padding-bottom: ${props.width * 4}px;
        }
        .img-one {
          width: ${props.width * 6}px;
        }
        .img-two {
          width: ${props.width * 4}px;
          position: absolute;
          top: ${props.width * 2}px;
          right: 0;
        }
        .img-three {
          position: absolute;
          top: ${props.width * 6}px;
          left: ${props.width}px;
          width: ${props.width * 3}px;
          z-index: 20;
        }
        @media (max-width: 768px) {
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
        }
        @media (max-width: 468px) {
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
            padding-bottom: 135px;
          }
        }
      `}</style>
    </div>
  );
};

export default Zukunft;
