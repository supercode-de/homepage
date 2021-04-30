const WerdeTeilTeam = () => {
    return (
        <section className="werdeTeilTeam blueGitter">
            <article className="info">
                <div>
                    <h2>Werde Teil unseres</h2>
                    <h2 className="super-stroke">Super-Teams!</h2>
                </div>
                <div>
                    <p>Wir sind immer auf der Suche nach neuen, motivierten Menschen! Wir sind jung, dynamisch, international und haben Lust etwas zu verändern! Hilf uns dabei unsere Vision von digitaler Bildung umzusetzen und dadurch die Welt zu einem chancengerechteren Ort zu machen.</p>
                    <br/>
                    <p>SuperCode steht für moderne didaktische und methodische Bildung, eine nachhaltige und gemeinwohlorientierte Unternehmensführung, Ehrlichkeit und Transparenz. Wir sind ein Team aus qualifizierten und praxiserfahrenen Expert*innen, die Spaß an ihrer Arbeit haben und an das glauben, was sie machen. Wir sind mit vielen Firmen aus der Region gut vernetzt, nutzen immer den neuesten Tech-Stack und legen viel Wert darauf, dass sich jede*r einbringen und mit ihrer/seiner Persönlichkeit entfalten kann. </p>
                </div>
            </article>
            <article className="was-wir-bieten">
                <div className="twocolumn">
                    <div className="center">
                        <div className="flex">
                            <div>
                                <span className="super-green">01</span>
                            </div>
                            <div>
                                <span className="super-stroke">Tolles Team</span> voller IT Enthusiast*innen
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <span className="super-green">02</span>
                            </div>
                            <div>Tätigkeit in einem <span className="super-stroke">innovativen Feld</span></div>
                        </div>

                        <div className="flex">
                            <div>
                                <span className="super-green">03</span>
                            </div>
                            <div>
                                <span className="super-stroke">Flexible</span> Beschäftigungsformen (Fest, Frei, Remote)
                            </div>
                        </div>

                        <div className="flex">
                            <div>
                                <span className="super-green">04</span>
                            </div>
                            <div>
                                Faires Gehalt, angepasst an <span className="super-stroke">deine Kenntnisse</span>
                            </div>
                        </div>

                        <div className="flex">
                            <div>
                                <span className="super-green">05</span>
                            </div>
                            <div>
                                Platz für <span className="super-stroke">eigene Projekte</span>
                            </div>
                        </div>

                        <div className="flex">
                            <div>
                                <span className="super-green">06</span>
                            </div>
                            <div>
                                Super <span className="super-stroke">Team-Events</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <span className="super-green">07</span>
                            </div>
                            <div>
                                Einen Grund morgens <span className="super-stroke">mit guter Laune</span> aufzustehen!
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <style jsx>{`
                .werdeTeilTeam {
                    color: #fff;
                    padding: 10vw calc(100vw / 12);
                }
                .info, .flex {
                    display: flex;
                }
                .info > * {
                    width: 100%;
                }
                h2, p {
                    margin: 0;
                }
                h3 {
                    font-size: 3.75rem;
                }
                .was-wir-bieten {
                    margin-top: 8rem;
                }
                .twocolumn {
                    display: grid;
                    grid-template-columns: 100%;
                }
                .center {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .flex {
                    
                    font-size: 2.65rem;
                    color: #fff;
                    line-height: 1.2em;
                }
                .super-stroke {
                    color: transparent;
                    letter-spacing: 2px;
                    -webkit-text-stroke-width: 0.5px;
                    -webkit-text-stroke-color: #fff;
                    font-weight: 300;
                    display: inline-block;
                }
                .super-green {
                    color: transparent;
                    letter-spacing: 2px;
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: var(--super-green);
                    font-weight: 200;
                    font-size: 0.7em;
                    padding-right: 20px;
                }
                @media (max-width: 1040px) {
                    .flex {
                    font-size: 2.5em;
                    line-height: 1.2em;
                    }
                }
                @media (max-width: 768px) {
                    .info,  {
                        display: block;
                    }
                    .info div:nth-of-type(1) {                        
                        margin-bottom: 2rem;
                    }
                    .center h2 {
                    font-size: 3.5em;
                    }
                    p {
                    font-size: 2em;
                    }
                }

                @media (max-width: 568px) {
                    .twocolumn {
                    grid-template-columns: 100%;
                    }
                }
                @media (max-width: 468px) {
                    .center h2 {
                    font-size: 3em;
                    }
                }
                @media (max-width: 370px) {
                    .center h2 {
                    font-size: 2.5em;
                    overflow-wrap: break-word;
                    }
                }
        `}</style>

        </section>
    );
}

export default WerdeTeilTeam;