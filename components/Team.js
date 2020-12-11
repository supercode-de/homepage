// import { useWindowSize } from './functions/windowSize'

import Carousel from "react-multi-carousel";

import data from "./data/team.json";

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

const Zukunft = (props) => {
  // const width = useWindowSize().width / 12
  const pixelSize = 1.5;
  return (
    <div id="zukunft">
      <div className="infos">
        <div className="info-text">
          <h1>
            <span className="super">Hallo Welt!</span>
            <br />
            Wir sind SuperCode!
          </h1>
          <p>
            – ein Team aus Expert*innen mit langjähriger Erfahrung in den
            Bereichen Webentwicklung, Bildungsmanagement und IT-Recruitment. Wir
            haben eine klare Vision: Digitale Bildung für alle, nachhaltig und
            modern.
          </p>
          <p>
            Uns alle verbindet die Liebe zur digitalen Welt. Deshalb sind wir
            eng vernetzt mit unseren Partnerunternehmen sowie den wichtigsten
            Start Ups aus unserer Region. Unsere Branchenexpertise und unser
            Netzwerk führen dich zum SuperJob!
          </p>
        </div>
        <div className="info-img">
          <img
            src="/img/Workshop html css javascript.png"
            alt="Workshop html css javascript"
          />
        </div>
      </div>
      <div className="team-grid">
        <div className="placeholder"></div>
        {data.map((teammitglied) => {
          return (
            <div>
              <img
                src={teammitglied.img}
                alt={`${teammitglied.name} ${teammitglied.job}`}
              />
              <h2>{teammitglied.name}</h2>
              <p>{teammitglied.job}</p>
            </div>
          );
        })}
        <div className="rotating-text">
          <img
            src="/img/SuperTeam-Circle.svg"
            alt="SuperCode Team, Bildungsträger"
          />
        </div>
      </div>
      <div className="team-carousel">
        <Carousel
          responsive={responsive}
          ssr
          showDots={false}
          slidesToSlide={1}
          infinite
          containerClass="container-with-dots"
          itemClass="image-item"
          deviceType={""}
        >
          {data.map((teammitglied) => {
            return (
              <div className="carousel-article-container">
                <div>
                  <img
                    src={teammitglied.img}
                    alt={`${teammitglied.name} ${teammitglied.job}`}
                  />
                  <h2>{teammitglied.name}</h2>
                  <p>{teammitglied.job}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <style jsx>{`
        #zukunft {
          font-family: "Neue_Machina_Regular_400";

          background: linear-gradient(
              90deg,
              #fff calc(100vw / 12 - ${pixelSize}px),
              transparent 1%
            ),
            linear-gradient(
              #fff calc(100vw / 12 - ${pixelSize}px),
              transparent 1%
            ),
            #3dd7ac;
          background-size: calc(100vw / 12) calc(100vw / 12);
          position: relative;
          padding: 10vw calc(100vw / 12);
        }

        .infos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 30px;
          margin-bottom: 10vw;
        }

        .info-text h1 {
          font-size: 3.3em;
          line-height: 1.2em;
          letter-spacing: 2px;
          color: #5d3ede;
          text-transform: uppercase;
          margin: 0;
        }
        .info-text h1 span {
          font-weight: 400;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #5d3ede;
        }

        .info-text p {
          color: #5d3ede;
          font-size: 1.2em;
        }
        .info-img {
          width: 100%;
        }
        .info-img img {
          width: 100%;
        }

        .team-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .team-grid img {
          width: 100%;
          display: flex;
        }

        .team-grid .placeholder {
          grid-column: -2/-1;
          grid-row: 1/2;
        }

        .team-grid .rotating-text {
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column: 1/2;
          grid-row: ${Math.round((data.length - 1) / 4) + 1} /
            ${Math.round((data.length - 1) / 4) + 2};
        }
        .team-grid .rotating-text img {
          width: 70%;
          animation: spin 15s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        h2,
        p {
          margin: 0;
          padding: 0;
        }
        h2 {
          margin-top: 0.5em;
        }

        .team-carousel {
          display: none;
          padding: 0;
        }

        .carousel-article-container {
          padding: 0 20px;
        }

        .carousel-article-container div {
          overflow: hidden;
          text-align: center;
          width: 100%;
        }

        .carousel-article-container .img {
          width: 100%;
          overflow: hidden;
        }
        .carousel-article-container img {
          width: 100%;
        }

        .carousel-article-container div p {
          font-size: 1.8em;
        }
        .carousel-article-container div h2 {
          font-size: 2em;
        }

        @media (max-width: 768px) {
          .infos {
            grid-template-columns: 1fr;
          }
          .info-text h1 {
            font-size: 4em;
          }
          .info-text p {
            font-size: 1.8em;
          }

          .info-img {
            grid-row: 1/2;
          }
          .team-grid {
            display: none;
          }

          .team-carousel {
            display: block;
          }
        }
        @media (max-width: 468px) {
        }
      `}</style>
    </div>
  );
};

export default Zukunft;
