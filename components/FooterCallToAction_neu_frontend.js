import Typeform_neu2022 from './Typeform_neu2022';
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
        <h3>20.06.2022 – max. 16 Teilnehmende</h3>
        <h3>21.11.2022 – max. 16 Teilnehmende</h3>
        <span className='jetzt-bewerben-btn'>
          <Typeform_neu2022 />
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
          width: 85%;
          margin: auto;
        }
        .termine h3 {
          color: #fff;
          font-size: 2rem;
        }
        .jetzt-bewerben-btn {
          display: flex;
          justify-content: flex-end;
          margin-top: -5vh;
        }

        @media (max-width: 910px) {
          h2 {
            font-size: 2rem;
          }
          .termine h3 {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2rem;
          }
          .termine h3 {
            font-size: 1.7rem;
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
          h2 .stroke {
            color: transparent;
            -webkit-text-stroke-width: 0.5px;
            -webkit-text-stroke-color: #fff;
          }
        }
      `}</style>
    </div>
  );
}
