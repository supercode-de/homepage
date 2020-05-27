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
          trigger="5 Monate Web-Developer Full-Stack "
          triggerExtra="Vollzeit 22 Wochen"
        >
          <div className="kurse-infos">
            <div>
              <p>
                Dein Studium passt nicht mehr zu Dir, in deinem Beruf gibt es
                keine Zukunft oder du willst was ganz neues starten? Lerne das
                Programmieren moderner Websites & Apps und finde einen Job mit
                Zukunft.
              </p>
              <h3>Inhalte:</h3>
              <p>
                Dein Studium passt nicht mehr zu Dir, in deinem Beruf gibt es
                keine Zukunft oder du willst was ganz neues starten?
              </p>
            </div>
            <div>
              <h3>Termine</h3>
              <p>Kurszeitraum: 18.05.20 - 21.10.20</p>
              <p>Anmeldefrist: bis zum 30.04.20</p>
              <h3>Finanzierung</h3>
              <p>_ Bildungsgutschein</p>
              <p>_ Chancen eG</p>
              <p>_ Selbstzahler</p>
            </div>
            <div>
              <h3>sonstiges:</h3>
              <p>zeitgleich 2 Trainer pro Tag</p>
              <p>mehr als 60 % Praxis</p>
              <h3>Umfang:</h3>
              <p>_ 22 Wochen Vollzeit</p>
              <p>_ Montag bis Freitag</p>
            </div>
            <div>
              <Button href="/" text="Button" />
              <Button href="/" text="Button" />
            </div>
          </div>
        </Collapsible>
      </div>
      <style jsx>{`
        #weiterbildung {
          background: #000;
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
          top: 28%;
          color: #3dd7ac;
          font-size: 1.3rem;
          text-transform: uppercase;
        }
        .kurse-infos {
          display: grid;
          grid-template-columns: 50% 25% 25%;
        }
        p {
          font-weight: 200;
        }
      `}</style>
    </div>
  );
};

export default LerneProgrammieren;
