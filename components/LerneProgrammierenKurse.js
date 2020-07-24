import Button from "./small/Button";
import Collapsible from "./WeiterbildungItem";

const LerneProgrammierenKurse = () => {
    return (
        <div id="weiterbildung">
            <h1>
                <span>Vollzeit oder Teilzeit  –</span>
                <br />
                lerne Programmieren in einem <br />unserer

                <span>zerifizierten Bootcamps.</span>
            </h1>
            <div className="aside">Lerne Programmieren</div>
            <div className="kurse">
                <Collapsible triggerTagName="h1" trigger="5 Monate Web-Developer Full-Stack " triggerExtra="Vollzeit 22 Wochen">
                    <div className="kurse-infos">
                        <div>
                            <p>Unser Full-Stack Kurs ermöglicht dir einen Web-Entwicklungs deep Dive verpackt in einem ultra praxisorientiertem instensiv Kurs. Lerne das Programmieren moderner Websites & Apps und finde einen Job mit Zukunft.</p>
                            <h3>Termine:</h3>
                            <h4>18.05.20 - voll</h4>
                            <h4>7.09.20 - Platz sichern⟶</h4>
                            <div>
                                <Button href="/" text="ANFRAGEN" />
                                <Button href="/" text="BERATUNG" />
                            </div>
                        </div>
                        <div>
                            <h3>Inhalte:</h3>
                            <p>Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript, Javascript Frameworks und Libraries, CMS</p>
                            <p>Back-End: Essentials, Node.js, Express.js, npm, API & Datenbanken</p>
                            <p>Plus Skills: Grundlagen Projekt Management & Präsentation, Design & UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.</p>


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
                <Collapsible triggerTagName="h1" trigger="7 Monate Web-Developer Frond-End " triggerExtra="Teilzeit 30 Wochen">
                    <div className="kurse-infos">
                        <div>
                            <p>Unser Full-Stack Kurs ermöglicht dir einen Web-Entwicklungs deep Dive verpackt in einem ultra praxisorientiertem instensiv Kurs. Lerne das Programmieren moderner Websites & Apps und finde einen Job mit Zukunft.</p>
                            <h3>Termine:</h3>
                            <h4>20.01.20 - voll</h4>
                            <h4>7.09.20 - Platz sichern⟶</h4>
                            <div>
                                <Button href="/" text="ANFRAGEN" />
                                <Button href="/" text="BERATUNG" />
                            </div>
                        </div>
                        <div>
                            <h3>Inhalte:</h3>
                            <p>Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript, Javascript Frameworks und Libraries, CMS</p>

                            <p>Plus Skills: Grundlagen Projekt Management & Präsentation, Design & UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.</p>
                        </div>
                        <div>
                            <h3>Trainer*innen:</h3>
                            <p>2 Trainer*innen pro Tag</p>
                            <h3>Umfang:</h3>
                            <p>_ 22 Wochen Vollzeit</p>
                            <p>_ 3 abende und jeden 2.Samstag</p>
                            <p>_ In der Woche: 18:00 - 21:00 Uhr</p>
                            <p>_ Samstags: 09:00 - 18:00</p>
                            <h3>Finanzierung</h3>
                            <p>_ Bildungsgutschein</p>
                            <p>_ Chancen eG</p>
                            <p>_ Selbstzahler</p>
                        </div>
                    </div>
                </Collapsible>



                <h2>bald: 1 Monat SuperDigital Basics <span>Vollzeilt 4 Woche</span></h2>
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
        h2{
            margin-left: 10%;
            font-size:2em;
        }
        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          left: 3%;
          top: 48vh;
          color: #5D3EDE;
          font-size: 1.3rem;
          text-transform: uppercase;
        }
        .kurse-infos {
          display: grid;
          grid-template-columns: 50% 25% 25%;
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
                
                grid-template-columns: 100%;
                
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