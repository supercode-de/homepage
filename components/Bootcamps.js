// import Carousel from "react-multi-carousel";
import kurseData from "../components/data/kursedata.json"
import KurseCard from "./KurseCard";
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
const Bootcamps = (props) => {
    // console.log("das sind props", props)
    // console.log("das sind kursedata: ", kurseData);
    console.log(window.location.pathname)
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
            {/* {window.location.pathname === "/kurse" ? <section className="cards">
                {props.kurseData.map((item, index) => <KurseCard key={index} data={item} />)}
            </section> : <section className="kurse-list">
                <Carousel
                    responsive={responsive}
                    ssr
                    renderButtonGroupOutside={true}
                    showDots={false}
                    slidesToSlide={1}
                    infinite
                    containerClass="container-with-dots"
                    itemClass="image-item"
                    deviceType={""}
                    swipeable
                >
                    <section className="cards">
                    {props.kurseData.map((item, index) => <KurseCard key={index} data={item} />)}
                    </section>
                </Carousel>
            </section>} */}
            <section className="cards">
                {props.kurseData.map((item, index) => <KurseCard key={index} data={item} />)}
            </section>
            {/* <section className="kurse-list">
                <Carousel
                    responsive={responsive}
                    ssr
                    renderButtonGroupOutside={true}
                    showDots={false}
                    slidesToSlide={1}
                    infinite
                    containerClass="container-with-dots"
                    itemClass="image-item"
                    deviceType={""}
                    swipeable
                >
                    <section className="cards">
                    {props.kurseData.map((item, index) => <KurseCard key={index} data={item} />)}
                    </section>
                </Carousel>
            </section> */}

            <style jsx>{`
                .bootcamps {
                    color: #fff;
                    padding: 5rem 6%;
                }
                h2 {
                    margin: 0;
                }
                .bootcampInfos > * {
                    width: 100%;
                }
                .bootcampInfos {
                    display: flex;
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