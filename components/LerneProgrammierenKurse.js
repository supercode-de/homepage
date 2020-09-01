import Button from "./small/Button";
import Collapsible from "./WeiterbildungItem";
import Beratung from "./Beratung";

const LerneProgrammierenKurse = () => {
  return (
    <div id="weiterbildung">
      <h1>
        <span>Vollzeit oder Teilzeit –</span>
        <br />
        lerne Programmieren in einem <br />
        unserer <span>zertifizierten Bootcamps.</span>
      </h1>
      <div className="aside">Lerne Programmieren</div>
      <div className="kurse">
        <Collapsible
          triggerTagName="h1"
          trigger="5 Monate Web-Developer Full-Stack "
          triggerExtra="Vollzeit 22 Wochen"
        >
          <div className="kurse-infos">
            <div>
              <p>
                Unser Full-Stack-Kurs ermöglicht dir einen Deep Dive in die
                Web-Entwicklung verpackt in einem ultra praxisorientierten
                Intensiv-Kurs. Lerne das Programmieren moderner Websites & Apps
                und finde einen Job mit Zukunft.
              </p>
              <h3>Termine:</h3>
              <h4>18.05.2020 - voll</h4>
              <h4>07.09.2020 - Platz sichern ⟶</h4>
              <div className="two-column">
                <Button href="mailto:beratung@super-code.de" text="ANFRAGEN" />
                <Beratung />
              </div>
            </div>
            <div>
              <h3>Inhalte:</h3>
              <p>
                Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
                Javascript Frameworks und Libraries, CMS
              </p>
              <p>
                Back-End: Essentials, Node.js, Express.js, npm, API &
                Datenbanken
              </p>
              <p>
                Plus Skills: Grundlagen Projekt Management & Präsentation,
                Design & UX, Learn-To-Learn, Bewerbungscoaching,
                Abschlussprojekt.
              </p>
            </div>
            <div>
              <h3>Trainer*innen:</h3>
              <p>2 Trainer*innen pro Tag</p>
              <h3>Umfang:</h3>
              <p>_ 22 Wochen Vollzeit</p>
              <p>_ Montag bis Freitag</p>
              <p>_ 09:00 - 18:00 Uhr</p>
              <h3>Finanzierung</h3>
              <p>_ Bildungsgutschein</p>
              <p>_ Chancen eG</p>
              <p>_ Selbstzahler</p>
            </div>
          </div>
        </Collapsible>
        <Collapsible
          triggerTagName="h1"
          trigger="7 Monate Web-Developer Front-End "
          triggerExtra="Teilzeit 30 Wochen"
        >
          <div className="kurse-infos">
            <div>
              <p>
                Programmieren lernen neben dem Beruf? Kein Problem! Unser
                Front-End Kurs findet abends und online statt! In 30 Wochen
                lernst du das Programmieren moderner Websites & Apps.
              </p>
              <h3>Termine:</h3>
              <h4>20.01.20 - voll</h4>
              <h4>7.09.20 - Platz sichern⟶</h4>
              <div className="two-column">
                <Button href="mailto:beratung@super-code.de" text="ANFRAGEN" />
                <Beratung />
              </div>
            </div>
            <div>
              <h3>Inhalte:</h3>
              <p>
                Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
                Javascript Frameworks und Libraries, CMS
              </p>

              <p>
                Plus Skills: Grundlagen Projekt Management & Präsentation,
                Design & UX, Learn-To-Learn, Bewerbungscoaching,
                Abschlussprojekt.
              </p>
            </div>
            <div>
              <h3>Trainer*innen:</h3>
              <p>2 Trainer*innen pro Tag</p>
              <h3>Umfang:</h3>
              <p>_ 22 Wochen Vollzeit</p>
              <p>_ 3 Abende und jeden 2. Samstag</p>
              <p>_ In der Woche: 18:00 - 21:00 Uhr</p>
              <p>_ Samstags: 09:00 - 18:00 Uhr</p>
              <h3>Finanzierung</h3>
              <p>_ Bildungsgutschein</p>
              <p>_ Chancen eG</p>
              <p>_ Selbstzahler</p>
            </div>
          </div>
        </Collapsible>

        <h2>
          bald: 1 Monat SuperDigital Basics <span>Vollzeilt 4 Woche</span>
        </h2>
      </div>
      <style jsx>{`
        .two-column {
          display: flex;
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
        h2 {
          margin-left: 10%;
          font-size: 2em;
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
        }

        @media (max-width: 468px) {
          h1 {
            font-size: 3.5em;
            line-height: 3rem;
          }
          .kurse-infos {
            display: block
          }
          h3 {
            font-size: 1.8em;
          }
          h4 {
            font-size: 1.4em;
          }
          p {
            font-size: 1.5em;
          }
        }
        
      `}</style>
    </div>
  );
};

export default LerneProgrammierenKurse;
