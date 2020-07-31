import Button from "./small/Button";
import Collapsible from "./WeiterbildungItem";

const LerneProgrammieren = () => {
  return (
    <div id="weiterbildung">
      <h1>
        Von <span>Anfänger bis Business –</span>
        <br />
        lerne Coden in einem unserer
        <br />
        <span>Workshops.</span>
      </h1>
      <div className="aside">Lerne Programmieren</div>
      <div className="kurse">
        <Collapsible
          triggerTagName="h1"
          trigger="1 Monat Web-Developer Front-End "
          triggerExtra="Online"
        >
          <div className="kurse-infos">
            <div>
              <h3>
                An vier Abenden lernst du alle Basics für die Erstellung einer
                modernen Web-Designs. Design Basics, UX & UI, Prototyping mit
                Figma bis hin zu Designthinking. Du lernst intensiv, schnell und
                ultra praxisorientiert – denn schon von Tag eins arbeitest du an
                deiner digitalen und funktionalen Prototypen.
              </h3>
              <h3>
                Durch die praktische Anwendung wirst du die wichtigsten Themen
                aus dem Bereich Webdesign schnell verstehen.
              </h3>
              <article>
                <div>
                  <h3>Inhalte:</h3>
                  <ul>
                    <li>Design Basics</li>
                    <li>UX & UI Basics</li>
                    <li>Prototyping</li>
                    <li>Designthinking</li>
                  </ul>
                </div>
                <div>
                  <h3>Details:</h3>
                  <ul>
                    <li>Zeitraum: 02.06. - 23.6.2020</li>
                    <li>Wochentage: immer dienstags</li>
                    <li>Uhrzeit: 18.00 - 21.00 Uhr</li>
                    <li>Lerneinheiten: 16 (je 45 Minuten)</li>
                    <li>Level: Anfänger*innen</li>
                  </ul>
                </div>
              </article>
            </div>

            <div>
              <h3>### Trainer</h3>
              <ul>
                <li>- Ruben Wellinger</li>
                <li>- Sérgio Cardeal</li>
              </ul>
              <h3>### Ort & Software</h3>
              <p>
                Unser Workshop findet Online statt. Du muss aber nichts
                installieren benötigst keine extra Design Software.
              </p>
            </div>
            <div className="outer-container">
              <div>
                <h3>### Technik</h3>
                <p>
                  Du benötigst keinen besonderen
                  <br /> PC oder Laptop. Aber ein zweiter
                  <br /> Monitor wäre ideal.
                </p>
              </div>
              <div>
                <h3>### Preis</h3>
                <p>250,00 € zzgl. Gebühren</p>
              </div>
              <div className="button-container">
                <Button href="/" text="Anmelden" />
              </div>
            </div>
          </div>
        </Collapsible>
        <Collapsible
          triggerTagName="h1"
          trigger="1 Monat UX & UI Design "
          triggerExtra="Online"
        >
          <div className="kurse-infos">
            <div>
              <h3>
                An vier Abenden lernst du alle Basics für die Erstellung einer
                modernen Web-Designs. Design Basics, UX & UI, Prototyping mit
                Figma bis hin zu Designthinking. Du lernst intensiv, schnell und
                ultra praxisorientiert – denn schon von Tag eins arbeitest du an
                deiner digitalen und funktionalen Prototypen.
              </h3>
              <h3>
                Durch die praktische Anwendung wirst du die wichtigsten Themen
                aus dem Bereich Webdesign schnell verstehen.
              </h3>
              <article>
                <div>
                  <h3>Inhalte:</h3>
                  <ul>
                    <li>Design Basics</li>
                    <li>UX & UI Basics</li>
                    <li>Prototyping</li>
                    <li>Designthinking</li>
                  </ul>
                </div>
                <div>
                  <h3>Details:</h3>
                  <ul>
                    <li>Zeitraum: 02.06. - 23.6.2020</li>
                    <li>Wochentage: immer dienstags</li>
                    <li>Uhrzeit: 18.00 - 21.00 Uhr</li>
                    <li>Lerneinheiten: 16 (je 45 Minuten)</li>
                    <li>Level: Anfänger*innen</li>
                  </ul>
                </div>
              </article>
            </div>

            <div>
              <h3>### Trainer</h3>
              <ul>
                <li>- Ruben Wellinger</li>
                <li>- Sérgio Cardeal</li>
              </ul>
              <h3>### Ort & Software</h3>
              <p>
                Unser Workshop findet Online statt. Du muss aber nichts
                installieren benötigst keine extra Design Software.
              </p>
            </div>
            <div className="outer-container">
              <div>
                <h3>### Technik</h3>
                <p>
                  Du benötigst keinen besonderen
                  <br /> PC oder Laptop. Aber ein zweiter
                  <br /> Monitor wäre ideal.
                </p>
              </div>
              <div>
                <h3>### Preis</h3>
                <p>250,00 € zzgl. Gebühren</p>
              </div>
              <div className="button-container">
                <Button href="/" text="Anmelden" />
              </div>
            </div>
          </div>
        </Collapsible>
      </div>
      <style jsx>{`
        #weiterbildung {
          background: #03000F;
          color: #3dd7ac;
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
          color: #3dd7ac;
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
            line-height:2em;
        }
          .kurse-infos {
            
            grid-template-columns: 1fr;
      }
      `}</style>
    </div>
  );
};

export default LerneProgrammieren;
