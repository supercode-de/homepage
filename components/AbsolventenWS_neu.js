import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import ReactTooltip from "react-tooltip";

import data from "./data/absolvente.json";

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
const AbsolventenWS = (props) => {
  const pixelSize = 1.5;
  return (
    <div id="absolventen">
      <span className="aside">Super (code) x Super (you)</span>
      <section className="content">
        <h1>
          Unsere <br /> <span className="super">Absol&shy;vent*innen</span>
        </h1>

        <div className="alumni-grid">
          {data.map((alumni) => {
            return (
              <>
                <article data-tip data-for={alumni.name}>
                  <h5>{alumni.name}</h5>
                  <div className="img">
                    <img src="/img/Women_IT_Webdeveloper.jpg" alt="" />
                  </div>
                  <h6>{alumni.job}</h6>

                  {/* <div className="text">
                    <p>{alumni.text}</p>
                  </div> */}
                  <ReactTooltip
                    // place="bottom"
                    // effect="solid"
                    id={alumni.name}
                    className="tooltip"
                    backgroundColor="#070021"
                    textColor="#fff"
                  >
                    <p>{alumni.text}</p>
                  </ReactTooltip>
                </article>
              </>
            );
          })}
        </div>

        <div className="alumni-carousel">
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
            {data.map((alumni) => {
              return (
                <div className="carousel-article-container">
                  <article>
                    <h5>{alumni.name}</h5>
                    <div className="img">
                      <img src="/img/Women_IT_Webdeveloper.jpg" alt="" />
                    </div>
                    <p>{alumni.text}</p>
                    <h6>{alumni.job}</h6>
                  </article>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }

        #absolventen {
          position: relative;
          background-color: #fff;

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

          padding: 70px 0;
        }
        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          left: 2%;
          top: 55%;
          color: #3dd7ac;
        }

        .img {
          width: 100%;
          overflow: hidden;
        }
        img {
          width: 100%;
        }

        h1 {
          font-size: 3.6em;
          line-height: 1em;
          font-weight: 700;
          margin: 0 7% 100px;
          color: #3dd7ac;
        }

        h1 span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #3dd7ac;
        }

        .alumni-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 0 9%;
          gap: 50px 2%;
        }
        .alumni-grid article {
          position: relative;
        }
        .alumni-grid article .text {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          display: none;
          background: #000000b0;
          justify-content: center;
          align-items: center;
        }
        .alumni-grid article:hover .text {
          display: flex;
        }

        article p {
          font-weight: 400;
        }

        article h5 {
          color: #5d3ede;
          text-transform: uppercase;
          width: 100%;
          text-align: center;
        }
        article h6 {
          color: #5d3ede;
          font-weight: 500;
        }

        .alumni-grid article p {
          font-size: 1.1em;
          text-align: center;
          min-width: 250px;
          max-width: 20vw;
          padding: 20px;
          color: #fff;
        }

        .alumni-grid article h5 {
          font-size: 1.2em;
          position: absolute;
          top: -15px;
          color: #3dd7ac;
        }

        .alumni-grid article h6 {
          font-size: 1em;
          font-weight: 500;
          width: 90%;
          margin: auto;
          text-align: center;
        }

        .alumni-carousel {
          display: none;
          padding: 0;
        }

        .carousel-article-container {
          padding: 0 20%;
        }

        .carousel-article-container article {
          overflow: hidden;
          text-align: center;
          width: 100%;
        }

        .alumni-carousel article p {
          font-size: 1.8em;
          color: #3dd7ac;
        }
        .alumni-carousel article h5 {
          font-size: 2em;
        }
        .alumni-carousel article h6 {
          font-size: 1.5em;
        }

        @media (max-width: 768px) {
          .aside {
            display: none;
          }
          .alumni-grid {
            display: none;
          }
          .alumni-carousel {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default AbsolventenWS;