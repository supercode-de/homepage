const Tagesablauf = (props) => {
    return (
        <section className="tagesablauf-wrapper">
            <div className="tagesablauf">
                <div className="tagesablauf-header">
                    <h3>Tagesablauf</h3>
                    <img src="/img/Tagesablauf_Kreise.svg" alt="" />
                </div>
                <div className="tagesablauf-body">
                    <div className="flexContainer">
                        <div>
                            <p>&gt;</p>
                        </div>
                        <div>
                            <h3>09:00 Recap</h3>
                            <p>Kurze Gruppenrunde, wo du stehst und wo du Hilfe brauchst.</p>
                        </div>
                    </div>
                    <div className="flexContainer">
                        <div>
                            <p>&gt;</p>
                        </div>
                        <div>
                            <h3>09:45 Explore the Unknown</h3>
                            <p>Neue, spannende Themen präsentiert von deinem*deiner Main-Trainer*in.</p>
                        </div>
                    </div>
                    <div className="flexContainer">
                        <div>
                            <p>&gt;</p>
                        </div>
                        <div>
                            <h3>12:00 Relax</h3>
                            <p>Mittagessen und chillen auf den Sofas, in der Gemeinschaftsküche oder online im Homeoffice.</p>
                        </div>
                    </div>
                    <div className="flexContainer">
                        <div>
                            <p>&gt;</p>
                        </div>
                        <div>
                            <h3>13:00 {props.kurs[0].toUpperCase() + props.kurs.substring(1)} Flow</h3>
                            <p>Praktische Projektarbeit alleine oder in Teams mit direkter Hilfestellung deiner Trainer*innen.</p>
                        </div>
                    </div>
                    <div className="flexContainer">
                        <div>
                            <p>&gt;</p>
                        </div>
                        <div>
                            <h3>17:00 Flex Time</h3>
                            <p>Arbeite betreut weiter an deinen Projekten oder schnapp dir deine Trainer*innen für Einzelsessions.</p>
                        </div>
                    </div>
                    <div className="flexContainer">
                        <div>
                            <p>&gt;</p>
                        </div>
                        <div>
                            <h3>18:00 Feierabend</h3>
                        </div>
                    </div>

                </div>
            </div>


            <style jsx>{`
                h3 {
                    font-family: "Neue_Machina_Ultrabold";
                    font-size: 25px;
                }
                p{
                    font-size: 25px;
                }
                .tagesablauf-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 45%;
                    margin: 0 auto;
                }
                .tagesablauf {
                    color: var(--super-white);
                    background: var(--super-black);
                    border: 5px solid var(--super-green);
                    border-radius: 25px;
                }
                .tagesablauf-header {
                    display: flex;
                    justify-content: space-between;
                    padding: 26px 26px 20px;
                }
                .tagesablauf-body {
                    border-top: 5px solid var(--super-green);
                    padding-top: 52px;
                    padding-left: 26px;
                    padding-right: 26px;
                }
                .flexContainer {
                    display: flex;
                    align-items: baseline;
                    gap: 20px;
                    margin-bottom: 45px;
                }
                .flexContainer div h3 {
                    margin-bottom: 10px;
                }

            `}</style>
        </section>
    );
}

export default Tagesablauf;