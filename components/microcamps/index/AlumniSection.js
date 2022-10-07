// import AlumniSectionReviewCard from "./AlumniSectionReviewCard";
import AlumniSectionReviewCardMarquee from "./AlumniSectionReviewCardMarquee";
import AlumniSectionVideoCard from "./AlumniSectionVideoCard";
// import alumniBewertungen from "../../microcamps/data/alumniBewertungen";
import alumniInterviewsData from "../../microcamps/data/alumniInterviewsData";

import Marquee from "react-fast-marquee";
import Carousel from 'react-multi-carousel';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const AlumniSection = () => {
    return (
        <section className="alumniSection">
            <div className="wrap" id="alumniSection">
                <h3>Das sagen unsere Teilnehmenden</h3>
                <h3>
                    <span className="headlines_stroke">
                        aus ganz {window.innerWidth < 400 ? <br /> : null}
                        <span className="circle">Deutschland</span>
                    </span>
                </h3>
                <article className="alumniSection__videoArea">
                    {alumniInterviewsData.map((alumniItem, i) => (
                        <AlumniSectionVideoCard
                            key={i}
                            id={alumniItem.id}
                            name={alumniItem.name}
                            posterSrc={alumniItem.posterSrc}
                            videoSrc={alumniItem.videoSrc}
                        />
                    ))}
                </article>
                <div className='alumniVideo-carousel'>
                    <Carousel
                        responsive={responsive}
                        ssr
                        showDots={false}
                        slidesToSlide={1}
                        infinite
                        containerClass='container-with-dots'
                        itemClass='image-item'
                        deviceType={''}
                    >
                        {alumniInterviewsData.map((alumniItem, i) => (
                            <AlumniSectionVideoCard
                                key={i}
                                id={alumniItem.id}
                                name={alumniItem.name}
                                posterSrc={alumniItem.posterSrc}
                                videoSrc={alumniItem.videoSrc}
                            />
                        ))}
                    </Carousel>
                </div>
                <article className="alumniSection__reviewGrid">
                    {/* <Marquee speed={100} gradient={false} pauseOnHover={true}>
                        {alumniBewertungen.map((bewertung, i) => (
                            <AlumniSectionReviewCard
                            key={i}
                            name={bewertung.name}
                            jobtitel={bewertung.jobtitel}
                            bewertung={bewertung.bewertung}
                        />
                        ))}
                    </Marquee> */}
                    {/* {alumniBewertungen.map((bewertung, i) => (
                        <AlumniSectionReviewCard
                            key={i}
                            name={bewertung.name}
                            jobtitel={bewertung.jobtitel}
                            bewertung={bewertung.bewertung}
                        />
                    ))} */}

                    {/* {alumniBewertungen.map((bewertung, i) => (
                            <AlumniSectionReviewCardMarquee
                                key={i}
                                name={bewertung.name}
                                jobtitel={bewertung.jobtitel}
                                bewertung={bewertung.bewertung}
                            />
                        ))} */}
                    <Marquee speed={50} pauseOnHover={true} gradientColor={[93, 62, 222]} gradient={false}>
                        <AlumniSectionReviewCardMarquee />
                    </Marquee>
                </article>
            </div>

            <style jsx>{`
                .alumniSection {
                    background-color: var(--super-lila);
                    color: var(--super-white);
                }
                
                .alumniSection h3 .circle {
                    background: url("/img/microcamps/world_circle.svg") center center / contain no-repeat;
                    padding: clamp(0.6875rem, 4vw, 0.6875rem);
                }
                .alumniSection h3 {
                    font-size: clamp(1.5625rem, 1.2rem + 1.8125vw, 3.375rem);
                    line-height: 100%;
                    font-weight: 300;
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
                    // display: grid;
                    // grid-template-columns: repeat(3, 1fr);
                    // gap: 20px;
                }
                .alumniVideo-carousel {
                    display: none;
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
                @media (max-width: 425px) {
                    .alumniSection__videoArea {
                        display: none;
                    }
                    .alumniVideo-carousel {
                        display: block;
                        margin-top: 25px;
                    }
                }
                @media (max-width: 375px) {
                    .alumniSection h3 .circle {
                        background: none;
                        padding: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default AlumniSection;
