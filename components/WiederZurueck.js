import Link from "next/link";

const WiederZurueck = (props) => {
  return (
    <div id="error">
      <div className="infos">
        <h1>
          Uuups,
          <br />
          <span>Sackgasse</span>
          <br />
          hier geht's
          <br /> wieder zurück.
        </h1>
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
          <br />
        </div>
        <div className="info-headline">
          <h3>
            <Link href="/workshops">
              <a>Workshops ⟶</a>
            </Link>{" "}
          </h3>
          <p>
            Kurz, divers und zeitgemäß – lerne Grundlagen im Bereich IT oder
            schärfe deine Wissen in einer Programmiersprache.
          </p>
        </div>
      </div>
      <style jsx>{`
        #error {
          position: relative;
          background-color: #fff;
          background-image: linear-gradient(
              to right,
              rgba(255, 0, 0, 0.25) 0,
              rgba(255, 0, 0, 0.25) 1px,
              transparent 1px,
              transparent 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255, 0, 0, 0.25) 0,
              rgba(255, 0, 0, 0.25) 1px,
              transparent 1px,
              transparent 100%
            );
          background-position: 0 0, 0 0;
          background-size: ${props.width}px ${props.width}px;
        }
        .infos {
          display: flex;
          padding: ${props.width * 1.2}px 0 ${props.width * 1.2}px
            ${props.width}px;
          padding-left: ;
          // background: red;
          align-items: flex-end;
          justify-content: space-around;
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
        h1,
        p {
          color: #3dd7ac;
          width: ${props.width * 2}px;
        }
        h1 span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
        }
        h1 {
          letter-spacing: 2px;
          color: #3dd7ac;
          margin: 0;
          font-size: 4em;
          width: ${props.width * 5}px;
          margin-right: ${props.width * 0.8}px;
        }

        @media (max-width: 768px) {
          h1,
          p {
            width: 100%;
          }
          h1 {
            padding: 0.7em 0;
            font-size: 3em;
            width: 70%;
            margin: 0 auto;
          }
          .infos {
            flex-direction: column;
            align-items: center;
          }
          .info-headline {
            width: 70%;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WiederZurueck;
