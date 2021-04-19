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
                  <div className="img">
                    <img src={alumni.img} alt="" />
                  </div>
                  <h5>{alumni.name}</h5>
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
                    border="3px solid #5d3ede"
                    borderColor="#5d3ede"
                  >
                    <p>{alumni.text}</p>
                  </ReactTooltip>
                </article>
              </>
            );
          })}

          <article className="grid-placeholder grid-placeholder-1"></article>
          <article className="grid-placeholder grid-placeholder-2"></article>
          <article className="grid-placeholder grid-placeholder-3"></article>
          <article className="grid-placeholder grid-placeholder-4"></article>
          <article className="grid-placeholder grid-placeholder-5"></article>
          <article className="grid-placeholder grid-placeholder-6"></article>
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
                    <div className="img">
                      <img src={alumni.img} alt="" />
                    </div>
                    <h5>{alumni.name}</h5>
                    <h6>{alumni.job}</h6>
                    <p>{alumni.text}</p>
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
          font-family: "Neue_Machina_Regular_400";
          color: var(--super-green);
        }

        #absolventen {
          position: relative;
          background-color: #fff;

          background: url("./img/bg-line2.png") top/150% no-repeat,
            url("./img/bg-line2.png") center/100% no-repeat, var(--super-blau);

          padding: 70px 0;
        }
        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          left: 2%;
          top: 55%;
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
        }

        h1 span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--super-green);
        }

        .alumni-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 0 9%;
          gap: 50px 2%;
        }

        .grid-placeholder:nth-of-type(2n + 1) {
          grid-column: 4/-1;
        }
        .grid-placeholder:nth-of-type(2n) {
          grid-column: 1/2;
        }

        .grid-placeholder-1 {
          grid-row: 1/2;
        }
        .grid-placeholder-2 {
          grid-row: 2/3;
        }
        .grid-placeholder-3 {
          grid-row: 3/4;
        }
        .grid-placeholder-4 {
          grid-row: 4/5;
        }
        .grid-placeholder-5 {
          grid-row: 5/6;
        }
        .grid-placeholder-6 {
          grid-row: 6/7;
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
          background: var(--super-blau);
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
          text-transform: uppercase;
          width: 100%;
          margin-top: 0.5em;
        }
        article h6 {
          font-weight: 500;
          margin-top: 0.5em;
        }
        article p {
          margin-top: 0.5em;
        }

        .alumni-grid article p {
          font-size: 1.1em;
          min-width: 250px;
          max-width: 20vw;
          padding: 20px;
        }

        .alumni-grid article h5 {
          font-size: 1.2em;
        }

        .alumni-grid article h6 {
          font-size: 1em;
          font-weight: 500;
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
      `}</style>
    </div>
  );
};

export default AbsolventenWS;
