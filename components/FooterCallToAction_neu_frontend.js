import Link from 'next/link';
import Beratung from './Beratung';
import Typeform_neu_flexible from './Typeform_neu_flexible';
export default function FooterCallToAction_neu() {
  return (
    <div id='call-to-action' className='footerCTA'>
      {window.screen.width >= 455 ? (
        <h2>
          {' '}
          <span className='stroke'>Worauf wartest du noch? </span>
          Die nächsten <br /> Kurse <span className='circle'>
            starten{' '}
          </span>{' '}
          bald.
        </h2>
      ) : (
        <h2 className='textMobile'>
          {' '}
          DU interessierst dich für unsere kursangebote? dann Informiere dich
          jetzt oder meld dich direkt bei uns!
        </h2>
      )}
      <div className='buttons'></div>
      <div className='termine'>
        {/* <h3>27.09.2021 – max. 16 Teilnehmende</h3>
        <h3>20.12.2021 – max. 16 Teilnehmende</h3> */}
        <span className='jetzt-bewerben-btn'>
          <Typeform_neu_flexible width='280px' height='50px' />
        </span>
      </div>
      <style jsx>{`
        .footerCTA {
          background-color: var(--super-lila);
          padding-top: 60px;
          padding-bottom: 50px;
        }

        h2 {
          color: #fff;
          font-size: 3.7rem;
          padding-left: 7%;
        }
        h2 .stroke {
          color: transparent;
          -webkit-text-stroke-width: 0.1px;
          -webkit-text-stroke-color: #fff;
        }
        .circle {
          position: relative;
        }
        h2 .circle::after {
          position: absolute;
          background: url('/img/Vector64.svg') center/contain no-repeat;
          height: 195%;
          width: 100%;
          right: 5%;
          bottom: -43%;
          content: '';
          display: block;
        }
        .termine {
          position: relative;
          width: 85%;
          margin: auto;
        }
        .termine h3 {
          color: #fff;
          font-size: 2rem;
        }
        .jetzt-bewerben-btn {
          position: absolute;
          right: -5%;
          width: 30%;
          display: inline-block;
          bottom: -20px;
        }
        @media (max-width: 1024px) {
          jetzt-bewerben-btn {
            position: absolute;
            right: 15%;
            width: 30%;
            display: inline-block;
            bottom: -20px;
          }
        }
        @media (max-width: 1063px) {
          .jetzt-bewerben-btn {
            position: static;
            right: 8%;
            width: 30%;
            display: block;
            bottom: -20px;
          }
        }
        }

        @media (max-width: 910px) {
          h2 {
            font-size: 2rem;
          }
          .termine h3 {
            font-size: 1.4rem;
          }
          .jetzt-bewerben-btn {
            position: static;
            right: 8%;
            width: 30%;
            display: block;
            bottom: -20px;
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2rem;
          }
          .termine h3 {
            font-size: 1.7rem;
          }
          .jetzt-bewerben-btn {
            position: static;
            right: 5%;
            width: 30%;
            display: block;
            bottom: -20px;
          }
        }

        .textMobile {
          text-transform: uppercase;
          font-weight: 400;
          font-size: 1.3rem;
        }

        @media (max-width: 425px) {
          h2 {
            color: #fff;
            font-size: 2rem;
            padding-left: 7%;
          }
          .termine h3 {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
