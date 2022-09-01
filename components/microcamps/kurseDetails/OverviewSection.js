const OverviewSection = (props) => {
    const { subTheme, title, theme, category, duration } = props.kurs
    console.log(Number(duration.slice(0,1)));
    return (
        <section className="overviewSection" id="overviewSection">
            <div className="wrap">
                <article className="overviewSection__textarea">
                    <p>Übersicht MicroCamp {subTheme}</p>
                    <h3>Starte durch mit deinen</h3>
                    <h3>neuen {subTheme} Skills</h3>
                    <p>Unser MicroCamp für {subTheme} bietet dir eine intensive {Number(duration.slice(0, 1)) > 10 ? Number(duration.slice(0, 1)) : Number(duration.slice(0, 2))}-wöchige Lernerfahrung, die dich aufs nächste Level bringt!</p> 
                    <p>In Live-Sessions mit kleinen Lerngruppen aus ganz Deutschland und motivierten Trainer*innen lernst du praxisnah und mit modernen Tools und Methoden.</p>
                    <p>Mit unserem MicroCamp <b>{subTheme} – {title}</b> lernst du nicht nur die {category} Basics, sondern bekommst einen tieferen Einblick in die aktuellen Technologien der {theme === "design" ? "Design" : theme === "coding" ? "Coding" : theme === "data" ? "Data-Science" : ""}-Welt. Und das Ganze optimal angepasst an deinen Berufsalltag.  </p>
                </article>
                <img src="/img/microcamps/tn_big.png" alt="Menschen, die bei SuperCode arbeiten" />
            </div>

            <style jsx>{`
                .overviewSection__textarea {
                    width: 50%;
                    margin: 0 0 10% 0;
                }
                .overviewSection__textarea h3 {
                    color: var(--clr-super-lila);
                }
                .overviewSection__textarea h3:not(:first-of-type) {
                    margin: 0 0 5% 0;
                }
                .overviewSection__textarea p:not(:first-of-type) {
                    margin: 1% 0 0 0;
                }
                .overviewSection img {
                    width: 60%;
                    margin: 0 0 0 auto;
                    border-radius: 50px;
                }
                @media only screen and (max-width: 992px) {
                    .overviewSection__textarea {
                        width: 100%;
                    }

                    .overviewSection img {
                        width: 100%;
                        border-radius: 20px;    
                    }
                }
            `}</style>
        </section>
    );
};

export default OverviewSection;
