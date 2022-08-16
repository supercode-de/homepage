import Carousel from "react-multi-carousel";
import stellendata from "../components/data/stellenausschreibungen.json"

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
    <div id="stellen" className="lilaGitter">
      <article className="stelle-boxes-headline">
        <h1>
          Super(Code)
          <br />x Super<span className="super">(You)</span>
        </h1>
      </article>

      <article className="stellen-content">
        <div className="stelle-boxes">
          {stellendata.map((stelle, index) => {
            // {console.log(stelle.aufgaben)}
            <div key={index} className={stelle.className}>
              {stelle.stelle}
            </div>
          })}
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
              <div className="">
                <h4></h4>
                <h5></h5>
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
          padding: 7em 0 5em;
          position: relative;
          z-index: 1;
        }
        h1 {         
          color: #fff;
          margin: 0 8.5% 1em;
        }

        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
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
          background: var(--super-lila);
          border: 2px solid var(--super-green);
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
          color: var(--super-green);
        }

        h5 {
          font-family: "Neue_Machina_Regular_400";
          color: #ffffff;
          font-size: 1.2em;
        }

        p {
          font-family: "FiraSans-Regular", sans-serif;
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
