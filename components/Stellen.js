import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 479 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 479, min: 0 },
    items: 1,
  },
};

const WorkIT = (props) => {
  return (
    <div id="stellen">
      {/* <span className="aside">Unsere Stellen</span> */}
      <article className="stelle-boxes-headline">
        <h1>
          Super(Code)
          <br />x Super<span className="super">(You)</span>
        </h1>
      </article>
      <article className="stellen-content">
        <div className="stelle-boxes">
          <div className="stelle-box stelle-box1 hide">
            <h4>Praktikant*in Motion Design</h4>
            <h5>Weitere Informationen folgen </h5>
          </div>
          <div className="stelle-box stelle-box2 hide">
            <h4>Main Trainer*in Web-Entwicklung</h4>
            <h5>Weitere Informationen folgen </h5>
          </div>
          <div className="stelle-box stelle-box3 hide">
            <h4>Assistant Trainer*in Web-entwicklung</h4>
            <h5>Weitere Informationen folgen </h5>
          </div>
        </div>

        <div id="myCarousel">
          <Carousel
            responsive={responsive}
            ssr
            showDots={false}
            slidesToSlide={1}
            infinite
            containerClass="container-with-dots"
            deviceType={""}
            itemClass="carousel-item-padding-20-px"
          >
            <div className="stelle-box-container">
              <div className="stelle-box stelle-box1">
                <h4>Praktikant*in Motion Design</h4>
                <h5>Weitere Informationen folgen </h5>
              </div>
            </div>
            <div className="stelle-box-container">
              <div className="stelle-box stelle-box2">
                <h4>Main Trainer*in Web-Entwicklung</h4>
                <h5>Weitere Informationen folgen </h5>
              </div>
            </div>
            <div className="stelle-box-container">
              <div className="stelle-box stelle-box3">
                <h4>Assistant Trainer*in Web-entwicklung</h4>
                <h5>Weitere Informationen folgen </h5>
              </div>
            </div>
          </Carousel>
        </div>
      </article>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }

        #stellen {
          background-color: #5d3ede;
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.25) 0,
              rgba(255, 255, 255, 0.25) 1px,
              transparent 1px,
              transparent 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.25) 0,
              rgba(255, 255, 255, 0.25) 1px,
              transparent 1px,
              transparent 100%
            );
          background-position: 0 0, 0 0;
          background-size: calc(100vw / 12) calc(100vw / 12);

          padding: 7em 0 5em;
          position: relative;
          z-index: 1;
        }

        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          color: #fff;
          font-weight: 300;
          left: 3%;
          top: 60%;
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #ffffff;
        }

        h1 {
          font-family: "Neue_Machina_Regular_400";
          font-size: 3.5em;
          color: #fff;
          line-height: 1.2em;
          margin: 0 8.5% 1em;
          font-weight: 300;
        }

        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }

        .stellen-content {
          padding: 0 10%;
        }

        .stelle-boxes {
          box-sizing: border-box;
          display: flex;
          align-items: flex-start;
          position: relative;
        }
        .stelle-box-container {
          padding: 0 15%;
        }
        .stelle-box {
          background: #5d3ede;
          border: 2px solid #30e1b9;
          padding: 1em 4% 1em 2%;
          width: 100%;
          z-index: 0;
        }

        .stelle-box1 {
          margin-top: 100px;
        }
        .stelle-box2 {
          margin-top: 50px;

          margin-left: -2px;
        }
        .stelle-box3 {
          margin-left: -2px;
        }
        .stelle-boxes > .stelle-box {
          transition: transform 0.4s;
        }

        .stelle-boxes > .stelle-box:hover {
          transform: scale(1.1);
          z-index: 1;
        }

        #myCarousel {
          display: none;
          position: relative;
        }

        h4 {
          font-family: "Neue_Machina_Regular_400";
          color: #ffffff;
          font-size: 1.6em;
          margin-bottom: 14px;
        }
        .stelle-boxes > .stelle-box:hover h4 {
          color: #30e1b9;
        }

        h5 {
          font-family: "Neue_Machina_Regular_400";
          color: #ffffff;
          font-size: 1.2em;
        }

        p {
          font-family: "Fira Sans", sans-serif;
          color: #ffffff;
          font-size: 14px;
          margin-bottom: 25px;
          line-height: 20px;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .hide {
            display: none;
          }
          #myCarousel {
            display: block;
          }
          .stelle-box {
            margin: 0;
          }
          .stellen-content {
            padding: 0 5%;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkIT;