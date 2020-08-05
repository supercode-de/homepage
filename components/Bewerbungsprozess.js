

const Bewerbungsprozess = () => {
    return (
        <div id="bewerbungsprozess">

            <h1>Unser <br /><span>Aufnahmeprozess</span></h1>
            <div className="path">
                <figure className="kontakt">
                    <img src="/img/kontakt.svg" alt="" />
                    <figcaption>
                        <h2>#1 Kontakt</h2>
                        <p>Nimm Kontakt mit uns auf und vereinbare einen Termin mit einem unseren Bildungsberater*innen. Sie helfen dir dabei den perfekten Kurs für dich zu finden.</p>
                    </figcaption>
                </figure>
                <figure className="workshop">
                    <img src="/img/workshop.svg" alt="" />
                    <figcaption>
                        <h2>#2 Workshop</h2>
                        <p>Komm zu unserem kostenlosen HTML & CSS Workshop. Deine Chance, uns live zu erleben und deine Coding-Skills zu testen.</p>
                    </figcaption>
                </figure>
                <figure className="finanzierung">
                    <img src="/img/finanzierung.svg" alt="" />
                    <figcaption>
                        <h2>#3 Finanzierung</h2>
                        <p>Finde deinen individuellen Finanzierungsweg. Wir haben 3 verschiedene Modelle. Welcher davon der Richtige für dich ist, erfährst du am besten durch unser Bildungsberatungsteam.</p>
                    </figcaption>
                </figure>
                <figure className="kurse">
                    <img src="/img/kurse.svg" alt="" />
                    <figcaption>
                        <h2>#4 Kurs</h2>
                        <p>Es geht los! Starte deinen neuen SuperKurs bei uns!  Du erhältst von uns alles was du brauchst, und nach 5-7 Monaten bist du fit für den IT-Arbeitsmarkt!</p>
                    </figcaption>
                </figure>
            </div>

            <style jsx>{`
                #bewerbungsprozess {
                    padding-top: 10vh;
                }
                h1 {
                    font-size: 4em;
                    letter-spacing: 2px;
                    margin: 10vh 10%;
                    color: #3DD7AC;
                }
                .path {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    background: url(/img/finanzierung-bg.svg) top/contain no-repeat;
                    min-height: 100vh;
                    gap: 2vw;
                    padding: 0 5vw;
                }
                span {
                    color: transparent;
                    letter-spacing: 3px;
                    -webkit-text-stroke-width: 1.5px;
                    -webkit-text-stroke-color: #3DD7AC;
                }
                figure {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                h2 {
                    font-size: 2.7em;
                }
                .kontakt {
                    margin-top: 88%;
                }
                .workshop {
                    margin-top: 37%;
                }
                .finanzierung {
                    margin-top: 74%;
                }
                .kurse {
                    margin-top: 28%;
                }

                @media (max-width: 1200px) {
                    .path {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        background: none;
                    }
                    .kontakt, .workshop, .finanzierung, .kurse  {
                        margin-top: 0;
                    }
                    
                    
                }
                @media (max-width: 768px) {
                    .path {
                        display: block;
                    }
                    figure {
                        margin-bottom: 5em;
                    }
                    h1 {
                        font-size: 2.5em;
                        
                    }
                }
        `}</style>
        </div>
    );
}

export default Bewerbungsprozess;