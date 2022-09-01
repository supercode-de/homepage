const ScheduleCTASection = (props) => {
    const {theme, subTheme} = props.data
    return (
        <article className="scheduleSection__overview">
                    <div className="scheduleSection__overview__headline">
                        <p>MicroCamps</p>
                        <h3>Mach den nächsten Schritt</h3>
                        <h3>– werde {theme === "design" ? "UX-Designer*in" : theme === "coding" ? "Web-Entwickler*in" : "Data Scientist"}</h3>
                        <p>
                            Es ist an der Zeit etwas zu ändern und deinem Leben die entscheidende Richtung zu geben? Großartig! Denn das Lernen sollte nie aufhören und neue Abenteuer wollen begonnen werden. Mache den nächsten Schritt und lerne {subTheme}.
                        </p>
                    </div>
                    <div className="scheduleSection__overview__video">
                        <img
                            className="backgroundImage"
                            src="/img/anass.png"
                            alt="Supercoder"
                        />
                    </div>
                </article>
    )
}

export default ScheduleCTASection