import React, { useState, useEffect } from 'react';
import Arrow from './small/Arrow';
import Typeform from './TypeForm_neu';
import Telefon_neu from './small/Telefon_neu';

const HeaderWS_neu = (props) => {
  return (
    <div id='header' className='lilaGitter'>
      <div className='super-code'>super(code)</div>
      <Telefon_neu position={window.screen.width > 585 ? ' left' : '-3px'} />
      <div className='content'>
        {/* <span className='aside'> 📞 +49 211 7817 233-0 </span> */}
        <div className='content-img'>
          <img
            src='/img/_DSC2506_LowRes.png'
            alt='Programmieren Weiterbildungsangebote Düsseldorf, SuperCode Programmieren Lernen Bootcamp'
          />
        </div>
        <div className='content-text'>
          <h1>
            Dein Einstieg
            <br />
            in die IT-Welt:
            <br />
            <span className='super'>
              Unsere
              <br />
              <span className='circle'>Workshops!</span>
            </span>
          </h1>
        </div>
      </div>
      <style jsx>{`
          #header {
            padding: 100px 0;
            font-family: 'Neue_Machina_Regular_400';
            position: relative;
          }
          .telefon {
            position: relative;
          }
          .super-code {
            position: absolute;
            top: 30px;

            left: 7rem;
            color: #fff;
            font-size: 1.3rem;
            font-family: 'FiraSans-Regular', sans-serif;
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

          .arrow {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0%);
          }
          .arrow p {
            margin: 0 auto;
            text-align: center;
          }
          .arrow a {
            text-decoration: none;
          }
          .arrow a:hover {
            text-decoration: underline;
            color: #fff;
          }

          h1 {
            font-family: 'Neue_Machina_Regular_400';
            font-size: 4em;
            color: #fff;
            line-height: 1.2em;
            margin: 3vh 3vw;
          }
          h1 span.super {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #fff;
            font-weight: 300;
          }

          span.circle {
            position: relative;
          }

          span.circle::after {
            position: absolute;
            background: url('/img/Vector64.svg') center/contain no-repeat;
            transform: rotateX(45deg);

            height: 200%;
            width: 105%;
            right: -2%;
            bottom: -55%;
            content: '';
            display: block;
          }

          p {
            color: #fff;
            font-style: normal;
            font-weight: normal;
            font-size: 1em;
            line-height: 30px;
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
            .content-img {
              width: 75%;
            }
          }
          @media (max-width: 468px) {
            h1 {
              font-size: 2.8em;
            }
            .content-img {
              width: 95%;
            }
          }
          @media (max-width: 375px) {
            .content-img {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeaderWS_neu;
