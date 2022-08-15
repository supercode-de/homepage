import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";

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
const UnserCampus = (props) => {
  return (
    <div id="unser-campus">
      <div id="partner">
        <h1>#SuperPartner</h1>
        <div className="partner-container">
          <a href="https://blanko.de">
            <img src="/img/blanko.png" alt="" />
          </a>
          <a href="https://cammio.com/?lang=de">
            <img src="/img/cammio.png" alt="" />
          </a>
          <a href="https://www.digihub.de/">
            <img src="/img/digihub.png" alt="" />
          </a>
          <a href="https://www.zdi-portal.de/">
            <img src="/img/zdi.png" alt="" />
          </a>
          <a href="https://www.startupdorf.de/">
            <img src="/img/startupDorf.png" alt="" />
          </a>
          <a href="https://super7000.de/">
            <img src="/img/super7000.png" alt="" />
          </a>
        </div>
      </div>
      <span className="aside">lerne programmieren</span>
      <section className="two-column">
        <div className="text-one">
          <h1>
            Unser Campus <br /> ist <span>mehr</span>
          </h1>
          <p>
            Unsere Kursräume befindet sich im Super7000. Auf über 1.000 qm
            arbeiten mehr als 50 Unternehmen in offenen Büros und in Teambüros
            inklusive Telefonzellen, Meetingräumen, Bällebad und der legendären
            Eventfläche auf echtem Kunstrasen für Workshops, Meet-Ups & Co. Wir
            nutzen dieses einzigartige Umfeld, um Dich noch schneller in
            passende Jobs zu vermitteln.
          </p>
          <p className="hash-tag">#superwinwin</p>
        </div>
        <img className="img-two" src="/img/_DSC2652_LowRes 3.png" alt="" />
      </section>

      <img className="img-three" src="/img/_DSC2652_LowRes 13.png" alt="" />
      <img src="/img/campus.svg" alt="" className="campus" />
      <img className="img-four" src="/img/_DSC2652_LowRes 14.png" alt="" />
      <img className="img-five" src="/img/_DSC2652_LowRes 11.png" alt="" />
      <div className="carousel">
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
          <div>
            <img src="/img/_DSC2652_LowRes 3.png" alt="" />
          </div>
          <div>
            <img src="/img/_DSC2652_LowRes 13.png" alt="" />
          </div>
          <div>
            <img src="/img/_DSC2652_LowRes 14.png" alt="" />
          </div>
          <div>
            <img src="/img/_DSC2652_LowRes 11.png" alt="" />
          </div>
        </Carousel>
      </div>

      <img className="img-six" src="/img/_DSC2652_LowRes 15.png" alt="" />
      <style jsx>{`
        #unser-campus {
          position: relative;
          background-color: #fff;
          background-image: linear-gradient(
              to right,
              rgba(255, 0, 0, 0.25) 0,
              rgba(255, 0, 0, 0.25) 1px,
              transparent 1px,
              transparent 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255, 0, 0, 0.25) 0,
              rgba(255, 0, 0, 0.25) 1px,
              transparent 1px,
              transparent 100%
            );
          background-position: 0 0, 0 0;
          background-size: ${props.width}px ${props.width}px;
        }
        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin: 0 8% 100px;
        }
        img {
          width: 100%;
        }
        .two-column img {
          align-self: center;
        }
        .text-one {
        }
        h1,
        p,
        .text-two {
          color: #3dd7ac;
          width: ${props.width * 3}px;
        }
        h1 span {
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: #3dd7ac;
        }
        h1 {
          font-size: 5em;
        }
        .hash-tag {
          color: #5d3ede;
        }
        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          left: 3%;
          top: 30%;
          text-transform: uppercase;
        }
        .text-two {
          margin-left: 50%;
          transform: translateY(-180px);
        }
        .carousel {
          display: none;
        }
        .carousel div {
          text-align: center;
        }
        .img-three {
          width: 25%;
          margin-left: 15%;
        }
        .img-four {
          width: 25%;
          margin-left: 60%;
          transform: translateY(-80px);
        }
        .img-five {
          width: 25%;
          transform: translateY(-80px);
        }
        .img-six {
          width: 30%;
          margin-left: 60%;
          transform: translateY(40px);
        }
        .campus {
          width: 12%;
          margin-left: 38%;
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
        #partner {
          color: #5d3ede;
          margin: 0 auto;
          padding: 8vh 10%;
          display: flex;
          flex-direction: column;
        }
        #partner h1 {
          font-size: 2rem;
          letter-spacing: 2px;
          margin: 0 0 8vh;
        }
        #partner img {
          width: 100%;
        }
        .partner-container {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 5%;
        }
        @media (max-width: 768px) {
          .text-one,
          .text-two {
            padding: 0 ${props.width}px;
            margin: 0;
            width: 100%;
          }
          h1 {
            margin-top: 0;
            padding-top: 0.7em;
          }
          h1,
          p {
            width: 100%;
          }
          .img-two,
          .img-three,
          .img-four,
          .img-five,
          .img-six {
            display: none;
          }
          .carousel {
            display: block;
          }
          .carousel img {
            margin-top: 100px;
            margin-bottom: 100px;
            height: 20vh;
            width: auto;
          }
          .campus {
            width: 22%;
            position: absolute;
            bottom: 16%;
            right: 38.5%;
          }
        }
        @media (max-width: 468px) {
          .partner-container {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10%;
          }
          #partner img {
            margin-top: 20px;
            width: 120%;
          }

          p {
            font-size: 1.3em;
            width: 120%;
          }
          .campus {
            width: 32%;
            position: absolute;
            bottom: 14%;
            right: 7%;
            margin: 0;
          }
          .carousel img {
            height: 23vh;
            width: auto;
            margin-bottom: 50px;
          }
        }
        @media (max-width: 321px) {
          .campus {
            bottom: 15%;
            right: 4%;
          }
          .carousel img {
            height: 29vh;
          }
        }
      `}</style>
    </div>
  );
};

export default UnserCampus;
