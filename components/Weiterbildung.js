import Collapsible from './WeiterbildungItem'
import Button from "./small/Button"


const Weiterbildung = () => {
    return (
        <div id="weiterbildung">
            <h1>IT Weiterbildung – <br /> zertifiziert, intensiv & praxisnah.
                <span>Wähle das Format, was dir am besten passt</span>
            </h1>
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
            <style jsx>{`
                #weiterbildung {
                    background: #03000F;
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
                    -webkit-text-stroke-color: #3DD7AC;
                }
                .kurse-infos {
                    display: grid;
                    grid-template-columns: 40% 30% 30%;
                    gap:30px
                }

                p {
                    font-weight: 200
                }
                .kurse-infos div:nth-of-type(1) h4{
                    margin:0
                }
                .kurse-infos>div:nth-of-type(1) {
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between
                }
                .kurse-infos div:nth-of-type(3) p{
                    margin:0
                }
                
            `}</style>
        </div>
    );
}

export default Weiterbildung;