import Typeform_neu2022 from './Typeform_neu2022';

const FooterCallToActionKurse = (props) => {
  return (
    <div id='call-to-action' className='footerCTA'>
      <h2>
        {' '}
        <span className='stroke'>Worauf wartest du noch? </span>
        Die nächsten <br /> Kurse <span className='circle'>starten </span> bald.
      </h2>
      <div className='buttons'></div>
      <div className='termine'>
        <h3>19.09.2022 – max. 16 Teilnehmende</h3>
        <h3>12.12.2022 – max. 16 Teilnehmende</h3>
        <span className='jetzt-bewerben-btn'>
          <Typeform_neu2022 color="var(--super-black)" typeformID="L6u0np35"/>
        </span>
      </div>
      <style jsx>{`
        .footerCTA {
          background-color: var(--super-lila);
          background-color: ${props.bgColor};
          padding-top: 100px;
          padding-bottom: 50px;
        }

        h2 {
          color: ${props.color ? props.color : "var(--super-white)"};
          font-size: 3.7rem;
          padding-left: 7%;
          margin-bottom: 50px;
        }
        h2 .stroke {
          color: transparent;
          -webkit-text-stroke-width: 0.1px;
          -webkit-text-stroke-color: ${props.color ? props.color : "var(--super-white)"};
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
          padding-left: 7%;
        }
        .termine h3 {
          color: ${props.color ? props.color : "var(--super-white)"};
          font-size: 2rem;
        }
        .termine h3:nth-of-type(1) {
          margin-bottom: 50px;
        }
        .jetzt-bewerben-btn {
          display: flex;
          justify-content: flex-end;
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

        @media (max-width: 900px) {
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
          .jetzt-bewerben-btn {
            position: static;
            right: 5%;
            width: 30%;
            display: block;
            bottom: -20px;
          }
        }

        @media (max-width: 425px) {
          h2 {
            color: var(--super-white);
            font-size: 2rem;
            padding-left: 7%;
          }
          .termine h3 {
            font-size: 1rem;
          }
          h2 .stroke {
            color: transparent;
            -webkit-text-stroke-width: 0.5px;
            -webkit-text-stroke-color: var(--super-white);
          }
        }
      `}</style>
    </div>
  );
}

export default FooterCallToActionKurse;