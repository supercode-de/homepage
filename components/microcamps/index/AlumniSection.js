import AlumniSectionReviewCard from "./AlumniSectionReviewCard";
import AlumniSectionVideoCard from "./AlumniSectionVideoCard";
import alumniBewertungen from "../../microcamps/data/alumniBewertungen";
import alumniInterviewsData from "../../microcamps/data/alumniInterviewsData";

const AlumniSection = () => {
    return (
        <section className="alumniSection">
            <div className="wrap" id="alumniSection">
                <h3>Das sagen unsere Teilnehmende</h3>
                <h3>
                    <span className="headlines_stroke">
                        aus ganz
                        <span className="circle">Deutschland</span>
                    </span>
                </h3>
                <video src="../../../public/img/microcamps/videos/gianLuca.mp4"></video>
                <article className="alumniSection__videoArea">
                    {alumniInterviewsData.map((alumniItem, i) => (
                        <AlumniSectionVideoCard
                            key={i}
                            id={alumniItem.id}
                            name={alumniItem.name}
                            posterSrc={alumniItem.posterSrc}
                            jobtitel={alumniItem.jobtitel}
                            videoSrc={alumniItem.videoSrc}
                        />
                    ))}
                </article>
                <article className="alumniSection__reviewGrid">
                    {alumniBewertungen.map((bewertung, i) => (
                        <AlumniSectionReviewCard
                            key={i}
                            name={bewertung.name}
                            jobtitel={bewertung.jobtitel}
                            bewertung={bewertung.bewertung}
                        />
                    ))}
                </article>
            </div>

            <style jsx>{`
                .alumniSection {
                    background-color: var(--clr-super-lila);
                    color: var(--clr-super-white);
                }
                .alumniSection h3 .circle {
                    background: url("/img/microcamps/world_circle.svg") center center / contain no-repeat;
                    padding: var(--fs-100);
                }
                .alumniSection__videoArea {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    position: relative;
                    gap: 20px;
                    margin: 5% 10% 10% 10%;
                }
                .alumniSection__videoArea::before {
                    position: absolute;
                    bottom: -13%;
                    left: -5%;
                    background: url("/img/microcamps/lines_bottom.svg");
                    background-size: 50%;
                    background-repeat: no-repeat;
                    width: 10%;
                    aspect-ratio: 1;
                    content: "";
                }
                .alumniSection__videoArea::after {
                    position: absolute;
                    background: url("/img/microcamps/lines_top.svg");
                    background-size: 60%;
                    background-repeat: no-repeat;
                    width: 10%;
                    aspect-ratio: 1;
                    content: "";
                    top: -7%;
                    right: -8%;
                }
                .alumniSection__reviewGrid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                @media only screen and (max-width: 1200px) {
                    .alumniSection__videoArea {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .alumniSection__videoArea::before,
                    .alumniSection__videoArea::after {
                        display: none;
                    }

                    .alumniSection__reviewGrid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media only screen and (max-width: 768px) {
                    .alumniSection__videoArea,
                    .alumniSection__reviewGrid {
                        margin: 5%;
                        display: flex;
                        overflow-x: scroll;
                        scroll-snap-type: x mandatory;
                        scroll-behavior: smooth;
                        scrollbar-width: none;
                    }
                    .alumniSection__videoArea::-webkit-scrollbar {
                        display: none;
                    }

                }
            `}</style>
        </section>
    );
};

export default AlumniSection;
