const ClassSection = (props) => {
    const {theme, subTheme} = props.data
    return (
        <section className="classSection">
            <div className="wrap">
                <article className="classSection__headline">
                    <p>{subTheme} MicroCamp</p>
                    <h3>Werde Teil des {theme === "design" ? "UX/UI-" : theme === "coding" ? "WebDev-": theme === "data" ? "Data-" : ""}MicroCamps mit</h3>
                    <h3>Teilnehmenden aus ganz Deutschland</h3>
                    <p>
                    Wir sind der Meinung, dass eine persönliche Lernerfahrung sehr wichtig ist und begrenzen die Kursgröße bewusst auf 10 {theme === "design" ? "Designer*innen" : theme === "coding" ? "Web-Entwickler*innen" : theme === "data" ? "Data-Scientists" : ""}. So können wir in der kurzen Zeit mehr abdecken und du lernst direkt von anderen Teilnehmenden. Außerdem achten wir auf ein freundliches und respektvolles Miteinander mit viel Austausch und Feedback, damit das MicroCamp für dich zu einer großartigen Erfahrung wird. 
                    </p>
                </article>
                <img src="/img/microcamps/class_big.png" alt="Supercode Meeting" />
            </div>

            <style jsx>{`
                .classSection__headline {
                    margin: 0 0 2% 0;
                }
                .classSection__headline h3 {
                    color: var(--clr-super-lila);
                }
                .classSection__headline h3 + p {
                    margin: 2% 40% 0 0;
                }
                .classSection img {
                    width: 100%;
                }
                @media (max-width: 768px) {
                    .classSection__headline h3 + p {
                        margin: 0 ;
                    }
                }
            `}</style>
        </section>
    );
};

export default ClassSection;
