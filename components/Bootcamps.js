import kursedata from "../components/data/kurse.json"
import KurseCard from "./KurseCard";
const Bootcamps = () => {
    return (
        <section className="bootcamps lilaGitter">
            <article className="bootcampInfos">
                <div className="headlines">
                    <h2>Unsere</h2>
                    <h2>Bootcamps</h2>
                    <h2>& Workshops</h2>
                </div>
                <div className="copy">
                    <p>In einem halben Jahr zum Web Developer - geht das überhaupt? Und ob! Durch unsere zertifizierte Intensiv-Weiterbildung wirst du in 5-7 Monaten zum Web Developer Front-end oder Full-Stack und steigerst deine Jobchancen im IT-Bereich. Egal, ob dein Studium nicht mehr zu dir passt, es in deinem Beruf keine Zukunft gibt oder du einfach etwas ganz Neues lernen willst - Wir unterstützen dich!</p>
                    <p>Von der Beratung bis zum erfolgreichen Kursabschluss stehst du mit deiner Motivation, deiner Geschichte und deinen Fortschritten bei uns im Mittelpunkt. Mit zwei Trainer*innen pro Kurs, einem durchdachten Lehrplan, modernster Technik und guten Job-Kontakten machen wir dich fit für deine Zukunkt als Web Developer. No Money? No Problem! Unsere Kurse können durch die Chancen eG oder einen Bildungsgutschein zu 100% finanziert werden.</p>
                </div>
            </article>

            <section className="cards">
                {kursedata.map((item, index) => <KurseCard key={index} data={item} />)}
            </section>

            <style jsx>{`
                .bootcamps {
                    color: #fff;
                    padding: 5rem 6%;
                }
                h2 {
                    margin: 0;
                    font-family: "Neue_Machina_Regular_400";
                    font-size: 5rem;
                    margin-bottom: 1rem;
                }
                .bootcampInfos div p {
                    font-size: 25px;
                    font-weight: 300;
                }
                .headline {
                    width: 40%;
                }
                .copy {
                    width: 60%;
                }
                .bootcampInfos{
                    display: flex;
                }
                .bootcampInfos {
                    justify-content: space-between;
                }
                .cards {
                    // justify-content: space-around;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    grid-auto-rows: 1fr;
                    gap: 5rem;
                    margin: 7rem 0;
                }
                

                @media (max-width: 1440px) {
                    h2 {
                        font-size: 4rem;
                    }
                    .bootcampInfos div p {
                        font-size: 20px; 
                    }
                }
                @media (max-width: 1024px) {
                    .bootcampInfos {
                        flex-direction: column;
                    }
                    .copy {
                        width: 80%;
                        align-self: center;
                    }
                }
                @media (max-width: 768px) {
                    .cards {
                        width: 80%;
                        margin: 5rem auto;
                    }
                    .copy {
                        width: 100%;
                        align-self: none;
                    }
                }
               @media (max-width: 425px) {
                   h2 {
                       font-size: 3.2rem
                   }
                   
               }
               @media (max-width: 540px) {
                   .cards {
                       width: 100%;
                   }
               }
            `}

            </style>
        </section>
    );
}

export default Bootcamps;