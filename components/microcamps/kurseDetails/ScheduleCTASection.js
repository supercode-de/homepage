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
                            src="/img/microcamps/laura.jpg"
                            alt="SuperCode Mitarbeiterin Laura"
                        />
                    </div>

                    <style jsx>{`
                        .scheduleSection__overview__headline {
                            margin: 10% 35% 5% 0;
                        }
                        .scheduleSection__overview__headline h3 {
                            color: var(--clr-super-lila);
                            margin: 0 0 2% 0;
                        }
                        .scheduleSection__overview__video {
                            position: relative;
                            width: 90%;
                            margin: 0 0 0 10%;
                        }
                        .scheduleSection__overview__video .backgroundImage {
                            border-radius: 20px;
                            pointer-events: none;
                            width: 100%;
                            object-fit: cover;
                            transition: all 0.2s;
                        }
                        .scheduleSection__overview__video .playButton {
                            width: 5%;
                            position: absolute;
                            opacity: 0.7;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                        @media (max-width: 768px) {
                            .scheduleSection__overview__headline {
                                margin: 10% 0% 5% 0;
                            }
                        }
                    `}</style>
                </article>
    )
}

export default ScheduleCTASection