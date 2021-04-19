const FSPraxis = () => {
    return (
        <section className="fsPraxis whiteGreenDots">
            <div className="praxisInfos">
                <h2 className="letterstroke">Über 60% Praxis</h2>
                <h2>Fokus auf Javascript</h2>
                <p>Da fast jede Website kleinere oder größere JavaScripte verwendet, liegt neben HTML & CSS ein starker Fokus auf der Erlernung von JavaScript und der Library React.</p>
                <p>Mit node.js eröffnen wir euch dann die wunderbare Welt des Back-Ends. Ihr lernt die Konzepte der Datenbankanbindungen kennen, um vollwertige Webseiten inklusive Benutzerauthentifizierung und Datenbankspeicherung zu erstellen.</p>
            </div>
            <style jsx>{`
                .fsPraxis {
                    padding: 40px 0 40px 5%;
                }
                h2{
                    font-size: 6.25rem;
                    font-family: "Neue_Machina_Light";
                    color: var(--super-lila);
                    margin: 0;
                }
                p {
                    color: var(--super-lila);
                    width: 50%;
                    font-size: 1.563rem;
                    font-weight: 300;
                }
                .praxisInfos {
                    margin: 5rem;
                }
                .letterstroke {
                    color: transparent;
                    letter-spacing: 2px;
                    -webkit-text-stroke-width: 3px;
                    -webkit-text-stroke-color: var(--super-lila);
                    font-weight: 300;
                  }
            `}

            </style>
        </section>
    );
}

export default FSPraxis;