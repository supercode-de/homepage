import React, { useState, useEffect } from "react";
import Arrow from "./small/Arrow";
import Typeform from "./TypeForm_neu";
import Typewriter from "typewriter-effect";

const Header_neu = (props) => {
  return (
    <div id="header">
      <div className="header-images-grid">
        <div className="bottom img1">
          <img src="/img/benannt/Master-Trainer Webentwickung.jpg" alt="" />
        </div>
        <div className="bottom img2">
          <img src="/img/benannt/Alumni Webentwickung Full-Stack.jpg" alt="" />
        </div>
        <div className="bottom img3">
          <img src="/img/benannt/Campus Webentwickung Full-Stack.jpg" alt="" />
        </div>
        <div className="bottom img4">
          <img src="/img/benannt/SuperCode Team Meeting.jpg" alt="" />
        </div>
        <div className="top img5">
          <img src="/img/benannt/SuperCode Team Bildung.jpg" alt="" />
        </div>
        <div className="top img6">
          <img src="/img/benannt/Campus SuperCode IT.jpg" alt="" />
        </div>
        <div className="top img7">
          <img src="/img/benannt/Woman Developer.jpg" alt="" />
        </div>
      </div>

      <style jsx>{`
          #header {
            font-family: "Neue_Machina_Regular_400";
            position: relative;
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
          }

          .header-images-grid {
            position: relative;

            display: grid;
            grid-template-columns: repeat(24, 1fr);

            gap: 2vw 2vw;
            padding: 100px 0 0;
            margin-bottom: -3vw;
            z-index: 2;
            box-sizing: border-box;
          }

          .header-images-grid img {
            width: 100%;
          }

          .bottom,
          .top {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .bottom {
            justify-content: flex-end;
          }

          .top {
            justify-content: flex-start;
          }

          .img1 {
            grid-column: 1/6;
            grid-row: 1/3;
          }
          .img2 {
            grid-column: 6/12;
            grid-row: 1/3;
          }
          .img3 {
            grid-column: 12/18;
            grid-row: 1/3;
          }
          .img4 {
            grid-column: 18/25;
            grid-row: 1/2;
          }
          .img5 {
            grid-column: 3/ 10;
            grid-row: 3/4;
          }
          .img6 {
            grid-column: 10/18;
            grid-row: 3/4;
          }
          .img7 {
            grid-column: 18/24;
            grid-row: 2/4;
          }
        `}
      </style>
    </div>
  );
};

export default Header_neu;
