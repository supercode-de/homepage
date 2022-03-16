import React, { useState, useEffect } from 'react';
import Typeform from './TypeForm_neu';
import Typewriter from 'typewriter-effect';
import Telefon_neu from './small/Telefon_neu';
import JetztBewerben2 from './JetztBewerben2';

const Header_neu = (props) => {
  return (
    <div id='header' className='lilaGitter'>
      <div className='super-code'>super(code)</div>
      <Telefon_neu position='left' />
      <div className='twocolumn'>
        <div className='onecolumn'>
          <img
            src='/webp/_DSC2765_LowRes.webp'
            alt='Programmieren Weiterbildungsangebote Düsseldorf, SuperCode Programmieren Lernen Bootcamp'
          />
          <h1>
            <span className='super'> Programmieren</span>
            <br /> <span className='circle'>lernen</span> war noch nie
            <span className='super2'>
              <span className='after-span'>
                <Typewriter
                  options={{
                    strings: [
                      'digitaler.',
                      'persönlicher.',
                      'einfacher.',
                      'intuitiver.',
                      'motivierender.',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </h1>
        </div>
        <img
          src='/webp/_DSC2652_LowRes_12.webp'
          alt='Frauen Weiterbildung Programmieren lernen, SuperCode Webentwicklerin Frauen IT'
        />
      </div>

      <img
        src='/webp/_DSC8255_LowRes.webp'
        alt='Full Stack Developer Lernen Bildungsgutschein, IT Umschulung Förderung Jobcenter'
      />
      <div>
        <JetztBewerben2 />
      </div>
      <style jsx>
        {`
          img + div {
            display: none;
          }
          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            left: 3%;
            top: 60%;
            letter-spacing: 3px;
            color: #ffffff;
          }
          #header {
            padding: 40px 0 40px 10%;
            position: relative;
          }
          h1 {
            color: #fff;
            margin: 3vh 3vw;
          }
          h1 span.super,
          h1 span.super2 {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #fff;
            font-weight: 300;
          }
          h1 span.super2::after {
            position: absolute;
            background: url('/img/vector41.svg') center/cover no-repeat;
            height: 2px;
            width: 70%;
            right: 0;
            bottom: 4px;
            content: '';
            display: block;
          }
          h1 span.super2::before {
            position: absolute;
            background: url('/img/vector41.svg') center/cover no-repeat;
            height: 2px;
            width: 50%;
            right: 0;
            bottom: 0px;
            content: '';
            display: block;
            transform: rotate(0.5deg);
          }

          h1 span.circle {
            background: url('/img/Vector64.svg') center/contain no-repeat;
            padding: 10px;
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
          .twocolumn {
            display: grid;
            grid-template-columns: 60% 40%;
            margin-bottom: 100px;
          }
          .twocolumn > img {
            width: 100%;
            // align-self:center
          }
          .onecolumn {
            display: grid;
            grid-template-columns: 1fr;
          }
          .onecolumn img:first-of-type {
            margin-left: 11vw;
            margin-top: 3vh;
            width: 40%;
          }
          .twocolumn img:nth-child(2) {
            width: 80%;
            margin-top: 10vh;
          }
          .twocolumn + img {
            position: absolute;
            z-index: 2;
            margin-top: -15vh;
            margin-left: -3.5vw;
            width: 340px;
          }
          .super2,
          .after-span,
          .cirle {
            position: relative;
          }
          @media (max-width: 1040px) {
            h1 {
              font-size: 2.5em;
            }
            .twocolumn {
              // margin-bottom: 40px;
            }
            .twocolumn > img {
              width: 60%;
              align-self: center;
              justify-self: center;
            }
            .twocolumn + img {
              width: 25%;
              margin-top: -5vh;
            }
          }
          @media (max-width: 768px) {
            #header {
              padding: 100px 6% 10px;
            }
            h1 {
              font-size: 4em;
              align-self: center;
              justify-self: center;
            }
            .twocolumn img:nth-child(2) {
              margin-top: 50px;
            }
            .twocolumn + img {
              display: none;
            }
            .onecolumn img:first-of-type {
              display: none;
            }
            .arrow {
              display: none;
            }
            // img + div {
            //   display: block;
            //   text-align: center;
            //   margin-top: -6vh;
            //   margin-bottom: -6vh;
            // }
          }
          @media (max-width: 644px) {
            #header {
              padding: 85px 30px;
            }
            .twocolumn {
              grid-template-columns: 1fr;
              margin-bottom: 0;
            }
            .twocolumn > img {
              width: 100%;
              align-self: center;
              justify-self: center;
            }
            .twocolumn + img {
              display: none;
            }
            .onecolumn img:first-of-type {
              display: none;
            }
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
