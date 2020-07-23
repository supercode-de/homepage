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
            </div>
            <div className="kurse">
                <Collapsible
                    triggerTagName="h1"
                    trigger="bald: 1 Monat SuperDigital Basics "
                    triggerExtra="Vollzeilt 4 Wochen "
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
      `}</style>
        </div>
    );
};

export default LerneProgrammierenKurse;
