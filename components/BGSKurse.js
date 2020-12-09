const AVGS = () => {
  const pixelSize = 1.5;

  return (
    <div id="avgs">
      <div className="avgs-img">
        <img
          src="/img/_DSC2541_LowRes.png"
          alt="Full Stack Developer Lernen Bildungsgutschein, IT Umschulung Förderung Jobcenter"
        />
      </div>

      <h2>#Förderung durch einen Bildungs&shy;gutschein (BGS)</h2>
      <div className="infos">
        <div className="info-headline 1">
          <h3>Was ist ein Bildungs&shy;gutschein?</h3>
        </div>
        <div className="info-text">
          <p>
            Der Bildungsgutschein, kurz BGS, ermöglicht es dir, beruflich weiter
            zu kommen und wird von der Agentur für Arbeit oder dem Jobcenter
            ausgestellt.
            <br />
            <br />
            Egal, ob du gerade arbeitest oder nicht, hast du unter bestimmten
            Voraussetzungen einen Anspruch auf den BGS und kannst damit
            kostenlos an unseren Kursen / Weiterbildungen teilnehmen.
          </p>
        </div>
        <div className="info-headline">
          <h3>Wie erhalte ich einen Bildungs&shy;gutschein?</h3>
        </div>
        <div className="info-text">
          <p>
            Du möchtest an einem unserer BGS-geförderten Kurs teilnehmen?
            <br />
            <br />
            Wenn der Kurs für dich der Richtige ist, versorgen wir dich mit
            Info-Material sowie einem Angebot für das Jobcenter / die Agentur
            für Arbeit. Wenn du gute Argumente für deine Teilnahme hast, wird
            dir in der Regel der BGS für unseren Workshop ausgestellt.
          </p>
        </div>
        <div className="info-headline">
          <h3>Und was mache ich dann mit dem Bildungs&shy;gutschein?</h3>
        </div>
        <div className="info-text">
          <p>
            Grundsätzlich darfst du mit dem BGS machen was du willst. Wir würden
            uns natürlich freuen, wenn du damit wieder zu uns kommst. <br />
            <br />
            Dann bekommst du deinen Vertrag, dein eigenes Mac Book Air und dein
            Kurs bei uns kann starten!
          </p>
        </div>
      </div>

      <style jsx>{`
        * {
          font-family: "Neue_Machina_Regular_400";
        }

        #avgs {
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

          color: #fff;
          padding: 50px 6%;
          font-family: "Neue_Machina_Regular_400";
          position: relative;
          z-index: 0;
        }
        .avgs-img {
          position: absolute;
          right: 0;
          top: -100px;
          z-index: 1;
          height: 200px;
        }
        .avgs-img img {
          height: 100%;
        }
        h2 {
          font-size: 3em;
          letter-spacing: 2px;
          color: #5d3ede;
          font-weight: 300;
          margin-bottom: 5rem;
          text-transform: uppercase;
        }

        .infos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px 100px;
          box-sizing: border-box;
        }
        .info-headline {
          width: 100%;
        }
        .info-headline h3 {
          color: #5d3ede;
          font-size: 1.5em;
          font-weight: 300;

          margin-bottom: 1px;
        }
        .info-text p {
          color: #3dd7ac;
          font-size: 1.2em;
          font-weight: 500;
          font-style: italic;
        }

        @media (max-width: 1024px) {
        }
        @media (min-width: 937px) {
          .info-text {
            grid-row: 2/3;
          }
        }

        @media (max-width: 936px) {
          .infos {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            box-sizing: border-box;
          }
          .info-headline p {
            font-size: 1.3em;
          }
          .avgs-img {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .infos {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default AVGS;
