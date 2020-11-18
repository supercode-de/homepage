// import { useWindowSize } from './functions/windowSize'
import Link from "next/link";
const Zukunft = (props) => {
  // const width = useWindowSize().width / 12
  const pixelSize = 2.5;
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
        <span className="lila-box">
          <h3>
            <Link href="/workshops">
              <a>Workshops ⟶</a>
            </Link>
          </h3>
          <p>
            Kurz, divers und zeitgemäß – lerne Grundlagen im Bereich IT oder
            schärfe dein Wissen in einer Programmiersprache.
          </p>
          </span>
        </div>
        
        <div className="info-headline">
        <span className="lila-box2">
          <h3>
            <Link href="/kurse">
              <a>Bootcamps ⟶</a>
            </Link>
          </h3>
          <p>
            Intensiv, praxisnah und euphorisierend – wir machen dich fit in nur
            5 Monaten
          </p>
          </span>
        </div>
      </div>
      <div className="images">
        <img className="img-one" src="/img/_DSC2652_LowRes 6.png" alt="" />
        <img className="img-two" src="/img/_DSC2652_LowRes 7.png" alt="" />
        {/* <img className="img-three" src="https://unsplash.it/900/600" alt="" /> */}
      </div>
      <img src="/img/_DSC2336_MidRes.png" alt=""/>
      <style jsx>{`
        #zukunft {
          color: #3dd7ac;
          font-family:"Neue_Machina_Regular_400";
          background: linear-gradient(
              90deg,
              #fff ${props.width - pixelSize}px,
              transparent 1%
            ),
            linear-gradient(
              #fff ${props.width - pixelSize}px,
              transparent 1%
            ),
            #3dd7ac;
          background-size: ${props.width}px ${props.width}px;
          position:relative;
        }
        h1 {
          padding: ${props.width * 1.5}px 0 0 ${props.width}px;
          font-size: 4em;
          letter-spacing: 2px;
          color: #3dd7ac;
          text-transform: uppercase;
          width: ${props.width * 5.5}px;
          margin: 0;
          line-height:65px;
        }
        h1 span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
        }
        .infos {
          display: flex;
          margin: ${props.width-30}px 0 0;
        }
        .info-one {
          width: ${props.width * 3}px;
          margin: 0 ${props.width}px;
        }
        .info-headline {
          width: ${props.width * 2}px;
          margin-right: ${props.width}px;
          position:relative;
        }

        .lila-box::before{
          position:absolute;
            background:url('/img/Vector60.png') center/contain no-repeat;
            width: 100%;
            height: 147%;
            padding:5% 7%;
            bottom:-22px;
            left:-24px;
            content:'';
            display:block;
        }

        .lila-box2::before{
          position:absolute;
            background:url('/img/Vector61.png') center/contain no-repeat;
            width: 100%;
            height: 147%;
            padding:5% 7%;
            bottom:-22px;
            left:-24px;
            content:'';
            display:block;
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
          margin-top: ${props.width*1.2}px;
          text-align: center;
          padding-bottom: ${props.width * 2.6}px;
          background: url('img/bg-line.png') top/cover no-repeat;
        }
        .img-one {
          width: ${props.width * 6}px;
        }
        .img-two {
          width: ${props.width * 4}px;
          margin-left:${props.width-60}px;
          margin-bottom:${props.width-200}px;
        }
        .img-three {
          position: absolute;
          top: ${props.width * 6}px;
          left: ${props.width}px;
          width: ${props.width * 3}px;
          z-index: 20;
        }

        .images+img{
          position:absolute;
          bottom:0;
          left:${props.width*3.3}px;
          z-index:99;
          margin-bottom: -10%;
          width: ${props.width * 3}px;
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
