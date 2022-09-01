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
                <img src="/img/class_big.png" alt="Supercode Meeting" />
            </div>
        </section>
    );
};

export default ClassSection;
