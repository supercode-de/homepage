import Typeform_neu from './TypeForm_neu';
import JetztBewerben2 from './JetztBewerben2';

const HeaderCallToAction_neu = () => {

  return (
    <div id='header-call'>
      <h2>
        Lerne Programmieren und werde <br />
        <span className='bling'>Junior</span> Full-Stack Web-Developer*in
        <span className='bling2'>!</span>
        <br />–{'  '}
        <span className='super'>
          jetzt auch <span className='circle'>online!</span>
        </span>
      </h2>
      <div className='buttons'>
        <JetztBewerben2 />
      </div>
      <style jsx>{`
        #header-call {
          background: var(--super-blau);
          color: #fff;
          padding: 4rem 7% 2rem;
        }
        h2 {
          line-height: 1.3em;
          padding: 0 1%;
        }
        h2 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }

        .super,
        .circle,
        .bling,
        .bling2 {
          position: relative;
          z-index: 0;
        }

        h2 span.circle::after {
          position: absolute;
          background: url('/img/Vector64.svg') center/contain no-repeat;
          transform: rotateX(36deg);

          height: 300%;
          width: 105%;
          right: 0;
          bottom: -105%;
          content: '';
          display: block;
          z-index: -1;
        }

        h2 span.bling::before {
          position: absolute;
          background: url('/img/bling.png') center/contain no-repeat;
          height: 3rem;
          width: 2rem;
          bottom: 0.2em;
          left: -2rem;
          content: '';
          display: block;
        }
        h2 span.bling2::after {
          position: absolute;
          background: url('/img/bling2.png') center/contain no-repeat;
          height: 3rem;
          width: 2rem;
          bottom: 0.2em;
          right: -2rem;
          content: '';
          display: block;
        }
        .buttons {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        @media (max-width: 1040px) {
          h2 {
            font-size: 3em;
          }
        }
        @media (max-width: 768px) {
          h2 span.bling::before {
            bottom: -0.1em;
          }
          h2 span.bling2::after {
            bottom: -0.2em;
          }
        }
        @media (max-width: 468px) {
          h2 {
            font-size: 2.1em;
          }
          h2 span.bling::before {
            bottom: -0.5em;
            width: 1rem;
            left: -1.2rem;
          }
          h2 span.bling2::after {
            bottom: -0.5em;
            width: 1rem;
            right: -1.2rem;
          }
          .buttons {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderCallToAction_neu;
