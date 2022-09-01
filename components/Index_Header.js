import Typewriter from 'typewriter-effect';
import TelefonAside from './small/TelefonAside';
import Typeform_neu2022 from './Typeform_neu2022';

const Index_Header = () => {
  return (
    <div id='header'>
      {/* <img id="supercodeLogo2022" src="/img/supercode_logo_2022.svg" alt="supercode logo" /> */}
      <h2 className='super-code'>super(code)</h2>
      <TelefonAside />
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
        <Typeform_neu2022 typeformID="L6u0np35"/>
      </div>
      <style jsx>{`
          #header {
            padding: 20px 0 40px 7%;
            position: relative;
            background: var(--super-lila);
          }
          #supercodeLogo2022 {
            position: absolute;
            width: 10%;
          }
          img + div {
            display: none;
          }
          h1 {
            color: var(--super-white);
            margin: 3vh 3vw;
          }
          h1 span.super,
          h1 span.super2 {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: var(--super-white);
            font-weight: 300;
          }
          h1 span.circle {
            background: url('/img/Vector64.svg') center/contain no-repeat;
            padding: 10px;
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

export default Index_Header;
