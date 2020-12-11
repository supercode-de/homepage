import Button from "./small/Button";
import Collapsible from "./WeiterbildungItem";
import Beratung from "./Beratung";
import dates from "./data/dates.json";
const LerneProgrammierenKurse = () => {
  return (
    <div id="weiterbildung">
      <h1>
        <span>Vollzeit oder Teilzeit –</span>
        <br />
        lerne Programmieren in einem <br />
        unserer <span>Workshops.</span>
      </h1>
      <div className="aside">Lerne Programmieren</div>
      <div className="kurse">
        <Collapsible
          triggerTagName="h1"
          trigger="Kostenloser HTML & CSS Workshop "
          triggerExtra="Online"
        >
          <div className="kurse-infos">
            <div>
              <p>
                Tauche ein in die wundervolle Welt der Web-Entwicklung und mache
                bei uns dein Seepferdchen im Bereich HTML & CSS. Online, im
                World Wide Web! Live, in Farbe und immer mit zwei Trainer*innen.
              </p>
              <h3>Inhalte:</h3>
              <h4>- Grundlagen zum Thema Web-Entwicklung</h4>
              <h4>- Übersicht der gängigsten Programmiersprachen</h4>
              <h4>- Grundlagen im Bereich HTML & CSS</h4>
              <div className="two-column">
                <Button
                  href="https://www.eventbrite.de/o/supercode-gmbh-amp-co-kg-20262218583"
                  text="ANMELDUNG"
                  target="_blank"
                />
                <Beratung buttonText="Beratung" />
              </div>
            </div>
            <div>
              <h3>Termine:</h3>
              <p>jeden Dienstag (!)</p>
              <p>Anmeldung erforderlich</p>
              <h3>Finanzierung:</h3>
              <p>_kostenlos!</p>
              <p>
                Allerdings nehmen wir eine kleine Reservierungsgebühr, die wir
                am Ende des Workshops rückerstatten.
              </p>
            </div>
            <div>
              <h3>Sonstiges:</h3>
              <p>2 Trainer*innen pro Workshop</p>
              <p>Teilnahme erfolgt online</p>
              <h3>Umfang:</h3>
              <p>_ 3 Stunden</p>
              <p>_ 18:00 - 21:00 Uhr</p>
            </div>
          </div>
        </Collapsible>
      </div>
      <Collapsible
        triggerTagName="h1"
        trigger="1 Monat SuperBasics HMTL & CSS "
        triggerExtra="Online"
      >
        <div className="kurse-infos">
          <div>
            <p>
              An vier Abenden lernst du die nötigen Grundlagen für die
              Erstellung einer modernen Webseite mit Hilfe von HTML und CSS. Du
              lernst intensiv, schnell und ultra praxisorientiert!
            </p>
            <h3>Inhalte:</h3>
            <h4>- Design Basics</h4>
            <h4>- UX & UI Basics</h4>
            <h4>- Prototyping</h4>
            <h4>- Designthinking</h4>
            <div className="two-column">
              <Button
                href="https://www.eventbrite.de/e/superbasics-html-css-workshop-tickets-120028908697"
                text="ANMELDUNG"
                target="_blank"
              />
              <Beratung buttonText="Beratung" />
            </div>
          </div>
          <div>
            <h3>Zeitraum: {dates.superBasicTermin}</h3>
            <p>Wochentage: jeden Donnerstag</p>
            <p>Uhrzeit: 18.00 - 21.00 Uhr</p>
            <p>Lerneinheiten: 16 (je 45 Minuten)</p>

            <p>Level: Anfänger*innen</p>
          </div>
          <div>
            <h3>Sonstiges:</h3>
            <p>2 Trainer*innen pro Workshop</p>
            <p>Teilnahme erfolgt online</p>
            {/* <h3>Umfang:</h3>
              <p>_ 3 Stunden</p>
              <p>_ 18:00 - 21:00 Uhr</p> */}
          </div>
        </div>
      </Collapsible>

      {/* <h2>
        1 Monat SuperBasics HMTL & CSS <span>Online</span>{" "}
      </h2> */}
      <h2>
        bald: 1 Monat SuperDigital Basics <span>Vollzeit 4 Wochen</span>
      </h2>

      <style jsx>{`
        .two-column {
          display: flex;
        }
        h2 {
          margin-left: 10%;
          font-size: 2em;
        }
        #weiterbildung {
          background: #03000f;
          color: #fff;
          padding: 10vh 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
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
          top: 48vh;
          color: #5d3ede;
          font-size: 1.3rem;
          text-transform: uppercase;
        }
        .kurse-infos {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-gap: 5%;
          color: #fff;
        }
        p {
          font-weight: 200;
        }
        article {
          display: flex;
        }
        article div:first-of-type {
          margin-right: 5%;
        }
        ul {
          list-style: none;
          padding: 0;
          font-weight: 200;
        }
        .outer-container {
          display: grid;
          grid-template-columns: 1fr;
        }
        .button-container {
          align-self: end;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 3em;
            line-height: 2em;
          }
          .kurse-infos {
            // grid-template-columns: 100%;
            display: block;
          }
        }
        @media (max-width: 468px) {
          h1 {
            font-size: 2em;
          }
        }
      `}</style>
    </div>
  );
};

export default LerneProgrammierenKurse;
