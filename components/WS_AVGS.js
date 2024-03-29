const WS_AVGS = () => {
  const pixelSize = 1.5;

  return (
    <div id="avgs">
      <div className="avgs-img">
        <img
          src="/img/_DSC2541_LowRes.png"
          alt="Full Stack Developer Lernen Bildungsgutschein, IT Umschulung Förderung Jobcenter"
        />
      </div>

      <h2>
        #Förderung durch einen Aktivierungs- und Vermittlungs&shy;gutschein
        (AVGS)
      </h2>
      <div className="infos">
        <div className="info-headline 1">
          <h3>
            Was ist ein Aktivierungs- und Vermittlungs&shy;gutschein (AVGS)?
          </h3>
        </div>
        <div className="info-text">
          <p>
            Der Aktivierungs- und Vermittlungsgutschein, kurz AVGS, ermöglicht
            es dir, beruflich weiter zu kommen und wird von der Agentur für
            Arbeit oder dem Jobcenter ausgestellt.
            <br />
            <br />
            Wenn du arbeitssuchend gemeldet bist, hast du unter bestimmten
            Voraussetzungen einen Anspruch auf den AVGS und kannst damit
            kostenlos an einigen unserer Workshops teilnehmen.
          </p>
        </div>
        <div className="info-headline">
          <h3>
            Wie erhalte ich einen Aktivierungs- und Vermittlungs&shy;gutschein
            (AVGS)?
          </h3>
        </div>
        <div className="info-text">
          <p>
            Du möchtest an einem unserer AVGS-geförderten Workshops teilnehmen?
            <br />
            <br />
            Wenn der Kurs für dich der Richtige ist, versorgen wir dich mit
            Info-Material sowie einem Angebot für das Jobcenter / die Agentur
            für Arbeit. Wenn du gute Argumente für deine Teilnahme hast, wird
            dir in der Regel der AVGS für unseren Workshop ausgestellt.
          </p>
        </div>
        <div className="info-headline">
          <h3>
            Und was mache ich dann mit dem Aktivierungs- und
            Vermittlungs&shy;gutschein (AVGS)?
          </h3>
        </div>
        <div className="info-text">
          <p>
            Grundsätzlich darfst du mit dem AVGS machen was du willst. Wir
            würden uns natürlich freuen, wenn du damit wieder zu uns kommst.
            <br />
            <br />
            Dann bekommst du deinen Vertrag, dein eigenes Mac Book Air und dein
            Kurs bei uns kann starten!
          </p>
        </div>
      </div>

      <style jsx>{`
        #avgs {
          color: var(--super-white);
          padding: 50px 6%;
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
          letter-spacing: 2px;
          color: var(--super-lila);
          font-weight: 300;
          margin: 5rem 0;
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
          color: var(--super-lila);
          font-size: clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem);
          font-weight: 300;
          margin-bottom: 1px;
        }
        .info-text p {
          color: var(--super-green);
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

export default WS_AVGS;
