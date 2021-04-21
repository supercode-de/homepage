import kurseData from "../components/data/kursedata.json"
import KurseCard from "./KurseCard";
const Bootcamps = (props) => {
    console.log("das sind props", props)
    console.log("das sind kursedata: ", kurseData);
    return (
        <section className="bootcamps lilaGitter">
            <article className="bootcampInfos">
                <div className="headlines">
                    <h2>{kurseData[0].headlines.first}</h2>
                    <h2>{kurseData[0].headlines.second}</h2>
                    <h2>{kurseData[0].headlines.third}</h2>
                </div>
                <div className="copy">
                    <p>{kurseData[0].texte.first}</p>
                    <p>{kurseData[0].texte.second}</p>
                </div>
            </article>

            <section className="cards">
                {props.kurseData.map((item, index) => <KurseCard key={index} data={item} />)}
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
                    font-size: 1.1em;
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
                       margin: 0;
                       width: 100%;
                   }
               }
               @media (max-width: 375px) {
                   h2 {
                       font-size: 2.8rem;
                   }
               }
            `}

            </style>
        </section>
    );
}

export default Bootcamps;