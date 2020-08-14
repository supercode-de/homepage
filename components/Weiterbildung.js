import Collapsible from "./WeiterbildungItem";
import Button from "./small/Button";
import HubspotForm from "react-hubspot-form";
import Popup1 from "./Beratung";
import Beratung from "./Beratung";

const Weiterbildung = (props) => {
  return (
    <div id="weiterbildung">
      <h1>
        IT Weiterbildung – <br /> zertifiziert, intensiv & praxisnah.
        <span>Wähle das Format, das dir am besten passt</span>
      </h1>
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
              <h4>20.01.2020 - voll</h4>
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
                Plus Skills: Grundlagen Projekt Management & Präsentation,
                Design & UX, Learn-To-Learn, Bewerbungscoaching,
                Abschlussprojekt.
              </p>
            </div>
            <div>
              <h3>Trainer*innen:</h3>
              <p>2 Trainer*innen pro Tag</p>
              <h3>Umfang:</h3>
              <p>_ 30 Wochen Teilzeit</p>
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
      </div>
      <style jsx>{`
        .two-column {
          display: flex;
        }
        #weiterbildung {
          background: #03000f;
          color: #fff;
          padding: 15vh 0;
        }
        h1 {
          font-size: 4em;
          letter-spacing: 2px;
          margin: 0 10% 5vh;
        }
        span {
          display: block;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
        }
        .kurse-infos {
          display: grid;
          grid-template-columns: 40% 30% 30%;
          gap: 30px;
        }

        p {
          font-weight: 200;
        }
        .kurse-infos div:nth-of-type(1) h4 {
          margin: 0;
        }
        .kurse-infos > div:nth-of-type(1) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .kurse-infos div:nth-of-type(3) p {
          margin: 0;
        }
        button {
          background: none;
          display: inline-block;
          color: #000;
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          padding: 5px 10px;
          border: 3px solid #fff;
          font-size: 0.9em;
          font-weight: 200;
          margin: 10px;
          transition: top 0.5s linear, box-shadow 0.5s linear, left 0.5s linear;
          box-shadow: 0 0 0 0 transparent;
          position: relative;
          top: 0;
          left: 0;
          text-align: center;
          min-width: 100px;
        }
        button:hover {
          // margin: 10px 5px 15px 10px;
          // margin: 10px 10px 15px 15px;
          box-shadow: -5px 5px 0 0 #fff;
          top: -5px;
          left: 5px;
        }
        .jetzt-anmelden {
          background: #03000f;
          height: 200vh;
        }
        .popup-overlay {
          overflow-y: scroll;
        }
        @media (max-width: 468px) {
          h1 {
            margin: 0 5% 5vh;
          }
          h3 {
            font-size: 1.8em;
          }
          h4 {
            font-size: 1.4em;
          }
          .kurse-infos {
            display: block;
          }
          p {
            font-size: 1.5em;
          }
        }
      `}</style>
    </div>
  );
};

export default Weiterbildung;
