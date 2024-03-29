import Beratung from './Beratung';
import Link from 'next/link';

const WS_FooterCTA = () => {

  return (
    <div id='call-to-action'>
      <h1>
        Worauf wartest du noch?! Die nächsten{' '}
        <span className='super'>
          Workshops{' '}
          <span className='circle'>
            starten&nbsp;bald
            <nobr />.
          </span>
        </span>
      </h1>
      <div className='buttons'>
        <Link href='/kurse'>
          <a href='/kurse'>KURSE</a>
        </Link>
        <Beratung buttonText='Beratung' buttonTextColor='var(--super-black)' />
      </div>
      <style jsx>{`
        #call-to-action {
          color: var(--super-lila);
          margin: 0 auto;
          padding: 4rem 6% 2rem;
        }

        .super {
          color: transparent;
          font-weight: 300;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: var(--super-lila);
        }

        .buttons {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          gap: 2rem;
          margin-top: 2rem;
        }

        a {
          align-items: center;
          min-width: 23em;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 15px 0;
          text-align: center;
          background: transparent;
          border: 1px solid var(--super-green);
          text-decoration: none;
          color: var(--super-black);
          display: inline-block;
          border-radius: 5rem;
        }
        a:hover {
          color: var(--super-lila);
          background: var(--super-green);
        }

        span.circle {
          position: relative;
        }

        span.circle::after {
          position: absolute;
          background: url('/img/Vector64.svg') center/contain no-repeat;
          transform: rotateX(67deg);

          height: 300%;
          width: 105%;
          right: 0;
          bottom: -100%;
          content: '';
          display: block;
        }

        @media (max-width: 468px) {
          a {
            font-weight: 400;
            font-size: 1.2em;
            width: 16em;
            min-width: 0;
          }
          .buttons {
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 768px) {
          #call-to-action {
            display: block;
          }
        }
        @media (max-width: 425px){
          .super {
            -webkit-text-stroke-width: 1px;
          }
        } 
      `}</style>
    </div>
  );
};

export default WS_FooterCTA;
