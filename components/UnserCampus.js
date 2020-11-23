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
  const pixelSize = 2.5;
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
      <div className="bg-container">
        <img className="img-five" src="/img/_DSC2464_LowRes.png" alt="" />
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
            <img src="/img/_DSC2652_LowRes 3.png" alt="" />
          </div>
          <div>
            <img src="/img/_DSC2652_LowRes 13.png" alt="" />
          </div>
          <div>
            <img src="/img/_DSC2652_LowRes 14.png" alt="" />
          </div>
          <div>
            <img src="/img/_DSC2464_LowRes.png" alt="" />
          </div>
        </Carousel>
      </div>
      <img className="img-six" src="/img/_DSC2451_MidRes.png" alt="" />
      <style jsx>{`
        #unser-campus {
          position: relative;
          background-color: #fff;
          // background-image: linear-gradient(
          //     to right,
          //     rgba(255, 0, 0, 0.25) 0,
          //     rgba(255, 0, 0, 0.25) 1px,
          //     transparent 1px,
          //     transparent 100%
          //   ),
          //   linear-gradient(
          //     to bottom,
          //     rgba(255, 0, 0, 0.25) 0,
          //     rgba(255, 0, 0, 0.25) 1px,
          //     transparent 1px,
          //     transparent 100%
          //   );
          // background-position: 0 0, 0 0;
          // background-size: ${props.width}px ${props.width}px;
          background: linear-gradient(
              90deg,
              #fff ${props.width - pixelSize}px,
              transparent 1%
            ),
            linear-gradient(#fff ${props.width - pixelSize}px, transparent 1%),
            #3dd7ac;
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
          margin-top: -25%;
        }
        .text-one {
          justify-self: center;
          padding-top: 35%;
        }
        h1,
        p,
        .text-two {
          color: #3dd7ac;
          width: ${props.width * 3}px;
        }
        h1 span {
          font-weight: 400;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #3dd7ac;
        }
        h1 {
          text-transform: uppercase;
          font-size: 4em;
          font-family: "Neue_Machina_Regular_400";
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
          color: #5d3ede;
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
        }

        .bg-container {
          background: url("img/bg-line2.png") left/contain no-repeat;
        }
        .img-six {
          width: 25%;
          margin-left: 70%;
          transform: translateY(65px);
          position: relative;
          z-index: 99;
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
          #unser-campus {
            padding: 5% 0;
          }
          .text-one,
          .text-two {
            padding: 0 ${props.width}px;
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
            height: 20vh;
            width: auto;
          }
        }

        @media (max-width: 468px) {
          .carousel img {
            height: 23vh;
            width: auto;
            margin-bottom: 50px;
          }
          p {
            font-size: 1.3em;
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

// .img-three {
//   margin-left: ${props.width * 3}px;
//   margin-top: ${props.width * .5}px;
// }
// .img-four {
//   margin-left: ${props.width * 8}px;
//   margin-top: -${1.5 * props.width}px
// }
// .img-five {
//   margin-top: ${props.width}px;
// }
// .img-six {
//   margin-left: ${props.width * 7}px;
//   margin-top: ${props.width}px
// }
