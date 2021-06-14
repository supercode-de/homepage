import React, { useState, useEffect } from 'react';
import Telefon_neu from './small/Telefon_neu';
const Header_neu = (props) => {
  return (
    <div id='header' className='lilaGitter'>
      <div className='super-code'>super(code)</div>
      {/* <span className="aside"> 📞 +49 211 7817 233-0 </span> */}

      <div className='content'>
        <div className='content-img'>
          <img
            src='/img/_DSC4066_LowRes.png'
            alt='Programmieren Weiterbildungsangebote Düsseldorf, SuperCode Programmieren Lernen Bootcamp'
          />
        </div>
        <div className='content-text'>
          <h1>
            Dein Einstieg
            <br />
            in die IT-Welt:
            <br />
            <span className='super'>Unsere&nbsp;Bootcamps!</span>
          </h1>
        </div>
        <Telefon_neu position='left' />
      </div>
      <style jsx>
        {`
          #header {
            padding: 100px 0;
            font-family: 'Neue_Machina_Regular_400';
            position: relative;
          }
          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            color: #fff;
            font-weight: 300;
            left: 3%;
            top: 60%;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #ffffff;
          }
          .super-code {
            position: absolute;
            top: 30px;
            left: 7rem;
            color: #fff;
            font-size: 1.3rem;
            font-family: 'Fira Sans', sans-serif;
            font-weight: bold;
          }
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding: 50px 0 80px;
          }
          .content-img {
            width: 55%;
          }
          .content-img img {
            width: 100%;
          }
          .content-text {
            position: absolute;
            bottom: 0;
            right: 0;
          }
          h1 {
            color: #fff;
            margin: 3vh 3vw;
          }
          h1 span.super {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 0.5px;
            -webkit-text-stroke-color: #fff;
            font-weight: 300;
          }

          @media (max-width: 1040px) {
            h1 {
              font-size: 2.5em;
            }
          }
          @media (max-width: 768px) {
            #header {
              padding: 80px 6% 30px;
            }
            h1 {
              font-size: 4em;
              align-self: center;
              justify-self: center;
            }
            p {
              font-size: 2em;
              margin-bottom: 50px;
            }

            .arrow {
              display: none;
            }
          }
          @media (max-width: 644px) {
          }
          @media (max-width: 468px) {
            h1 {
              font-size: 2.8em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header_neu;
