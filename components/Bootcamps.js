// import Carousel from "react-multi-carousel";
import kurseData from '../components/data/kursedata.json';
import KurseCard from './KurseCard';
const hrefs = ['/kurse/fullstack', '/kurse/frontend', '/kurse/uxui'];
// console.log(kurseData);
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
    breakpoint: { max: 1024, min: 647 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 647, min: 0 },
    items: 1,
  },
};
const Bootcamps = (props) => {
  // console.log("das sind props", props)
  // console.log("das sind kursedata: ", kurseData);
  // console.log(window.location.pathname)
  return (
    <section className='bootcamps lilaGitter'>
      <article className='bootcampInfos'>
        <div className='headlines'>
          <h2>{kurseData[0].headlines.first}</h2>
          <h2>{kurseData[0].headlines.second}</h2>
          <h2>{kurseData[0].headlines.third}</h2>
        </div>
        <div className='copy'>
          <p>{kurseData[0].texte.first}</p>
          <p>{kurseData[0].texte.second}</p>
          <p>{kurseData[0].texte.third}</p>
        </div>
      </article>

      <section className='cards'>
        {props.kurseData.map((item, index) => (
          <KurseCard key={index} data={item} href={hrefs[index]} />
        ))}
      </section>

      {/* Das Carousel scheint Probleme zu haben mit dem Hubspot/Typeform Kram, daher bleibt es erstmal auskommentiert */}

      {/* <section className="kurse-carousel">
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
            color: var(--super-white);
          }
          h2 {
            margin: 0;
          }
          .bootcampInfos > * {
            width: 100%;
          }
          .bootcampInfos {
            padding: 5rem 6% 0rem;
            display: flex;
            justify-content: space-between;
          }
          .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 5rem 0;
            gap: 50px;
            width: 90%;
            margin: 0 auto;
          }
          // .kurse-carousel {
          //     padding: 5rem 0;
          // }
          .copy p:nth-of-type(3) {
            font-family: 'Neue_Machina_Ultrabold';
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
            .cards {
              grid-template-columns: repeat(2, 1fr);
              row-gap: 5rem;
            }
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
              width: 100%;
              margin: 5rem auto;
            }
            .copy {
              width: 100%;
              align-self: none;
            }
          }
          @media (max-width: 580px) {
            .cards {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 425px) {
            h2 {
              font-size: 3.2rem;
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
};

export default Bootcamps;
