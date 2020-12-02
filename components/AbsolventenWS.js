import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";

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
          Unsere <br /> <span className="super">Absolvent*innen</span>
        </h1>

        <div className="alumni-grid">
          {data.map((alumni) => {
            return (
              <article>
                <img src={alumni.img} alt="" />
                <p>{alumni.text}</p>
                <h5>- {alumni.name}</h5>
                <h6>{alumni.job}</h6>
              </article>
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
                    <img src={alumni.img} alt="" />
                    <p>{alumni.text}</p>
                    <h5>- {alumni.name}</h5>
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
              #fff ${props.width - pixelSize}px,
              transparent 1%
            ),
            linear-gradient(#fff ${props.width - pixelSize}px, transparent 1%),
            #3dd7ac;
          background-size: ${props.width}px ${props.width}px;

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
          word-break: break-all;
        }

        .alumni-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 0 18%;
          gap: 100px 10%;
        }

        .alumni-grid > article:nth-of-type(2n) {
          margin-top: -80px;
        }

        article p {
          color: #3dd7ac;
          font-weight: 500;
          margin-top: 10px;
        }

        article h5 {
          color: #5d3ede;
          margin-top: 30px;
        }
        article h6 {
          color: #5d3ede;
          margin-top: 10px;
          font-weight: 500;
        }

        .alumni-grid article p {
          font-size: 1.1em;
          width: 70%;
        }

        .alumni-grid article h5 {
          font-size: 1.2em;
        }

        .alumni-grid article h6 {
          font-size: 1em;
          font-weight: 500;
          width: 60%;
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

        @media (min-width: 1441px) {
          .alumni-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AbsolventenWS;
