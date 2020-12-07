const AVGS = () => {
  return (
    <div id="avgs">
      <h2>
        #Förderung durch einen Aktivierungs- und Vermittlungs&shy;gutschein
        (AVGS)
      </h2>
      <div className="infos">
        <div className="info-headline">
          <h3>
            Was ist ein Aktivierungs- und Vermittlungs&shy;gutschein (AVGS)?
          </h3>
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
          background: #070021;
          color: #fff;
          padding: 50px 6%;
          font-family: "Neue_Machina_Regular_400";
        }
        h2 {
          font-size: 2em;
          letter-spacing: 2px;
          color: #5d3ede;
          font-weight: 300;
          margin-bottom: 5rem;
          text-transform: uppercase;
        }

        .infos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
          box-sizing: border-box;
        }
        .info-headline {
          width: 100%;
        }
        .info-headline h3 {
          color: #5d3ede;
          font-size: 1.5em;
          font-weight: 300;
        }
        .info-headline p {
          color: #3dd7ac;
          font-style: italic;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          #avgs {
            background-size: 70%;
          }
        }

        @media (max-width: 936px) {
          .infos {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 50px;
            box-sizing: border-box;
          }
          .info-headline p {
            font-size: 1.3em;
          }
        }

        @media (max-width: 768px) {
          .infos {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default AVGS;
