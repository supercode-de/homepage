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
  const pixelSize = 1.5;
  return (
    <div id="unser-campus">
      <span className="aside">Super Campus, Super Code, Super You</span>
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
            nutzen dieses einzigartige Umfeld, um dich noch schneller in
            passende Jobs zu vermitteln.
          </p>
        </div>
        <img
          className="img-two"
          src="/webp/_DSC2652_LowRes_3.webp"
          alt="SuperCode Online Codingschule Düsseldorf, Geförderte IT Weiterbildungen"
        />
      </section>

      <img
        className="img-three"
        src="/webp/_DSC2652_LowRes_13.webp"
        alt="SuperCode Online Codingschule Düsseldorf, Geförderte IT Weiterbildungen"
      />
      <img
        src="/img/campus.svg"
        alt="SuperCode Online Codingschule Düsseldorf, Geförderte IT Weiterbildungen"
        className="campus"
      />
      <img
        className="img-four"
        src="/webp/_DSC2652_LowRes_14.webp"
        alt="Full Stack Developer Lernen Bildungsgutschein, IT Umschulung Förderung Jobcenter"
      />
      <div>
        <img
          className="img-five"
          src="/webp/_DSC2464_LowRes.webp"
          alt="Frauen Kostenlos Weiterbildung Programmieren lernen, Frauen Programmieren Lernen Fernkurs Bootcamp"
        />
      </div>
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
            <img
              src="/webp/_DSC2652_LowRes_3.webp"
              alt="SuperCode Online Codingschule Düsseldorf, Geförderte IT Weiterbildungen"
            />
          </div>
          <div>
            <img
              src="/webp/_DSC2652_LowRes_13.webp"
              alt="SuperCode Online Codingschule Düsseldorf, Geförderte IT Weiterbildungen"
            />
          </div>
          <div>
            <img
              src="/webp/_DSC2652_LowRes_14.webp"
              alt="Full Stack Developer Lernen Bildungsgutschein, IT Umschulung Förderung Jobcenter"
            />
          </div>
          <div>
            <img
              src="/webp/_DSC2464_LowRes.webp"
              alt="Frauen Kostenlos Weiterbildung Programmieren lernen, Frauen Programmieren Lernen Fernkurs Bootcamp"
            />
          </div>
        </Carousel>
      </div>
      <img
        className="img-six"
        src="/img/_DSC7265_LowRes.png"
        loading="lazy"
        alt="Full Stack Developer Lernen Bildungsgutschein, IT Umschulung Förderung Jobcenter"
      />
      <style jsx>{`
        #unser-campus {
          position: relative;
          background-color: #fff;
          color: var(--super-blue);
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
          margin-top: -25%;
        }
        .text-one {
          justify-self: center;
          padding-top: 35%;
        }
        h1,
        p,
        .text-two {
          color: var(--super-blue);
          width: calc(100vw / 12 * 3);
        }
        h1 span {
          font-weight: 400;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1.5px;
          -webkit-text-stroke-color: var(--super-blue);
        }
        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          left: 3%;
          top: 30%;
          color: var(--super-lila);
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
          transform: translateX(20vw);
          margin-top: -3%;
        }
        .img-six {
          width: 25%;
          margin-left: 70%;
          margin-top: -5%;
          transform: translateY(65px);
          position: relative;
          z-index: 1;
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

        @media (max-width: 1040px) {
        }

        @media (max-width: 768px) {
          .text-one {
            padding-top: 0;
          }
          #unser-campus {
            padding: 5% 0;
          }
          .text-one,
          .text-two {
            padding: 0 calc(100vw / 12);
            margin-bottom: -6%;
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
          p {
            font-size: 1.8em;
          }
          .img-two,
          .img-three,
          .img-four,
          .img-five,
          .img-six,
          .campus,
          .aside {
            display: none;
          }
          .two-column {
            grid-template-columns: 1fr;
          }
          .carousel {
            display: block;
          }
          .carousel img {
            height: 25vh;
            width: auto;
          }
        }

        @media (max-width: 468px) {
          .carousel img {
            height: 35vh;
            width: auto;
          }
        }
        @media (max-width: 321px) {
          .carousel img {
            height: 25vh;
          }
        }
      `}</style>
    </div>
  );
};

export default UnserCampus;
