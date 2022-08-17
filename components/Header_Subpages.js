import { useRouter } from 'next/router';
import TelefonAside from './small/TelefonAside';

const Header_Subpages = (props) => {
  return (
    <div id='header'>
      <div className='super-code'>super(code)</div>
      <TelefonAside />
      <div className='content'>
        <h1>
          <span className='lines'>{props.headline}</span>
        </h1>

      </div>

      <style jsx>{`
        #header {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--super-lila);
          padding: 15rem 0;
        }

        .super-code {
          position: absolute;
          top: 30px;
          left: 7rem;
          color: var(--super-white);
          font-size: 1.3rem;
          font-family: 'FiraSans-Regular', sans-serif;
          font-weight: bold;
          z-index: 2;
        }

        .content {
          width: 80%;
          text-align: center;
        }

        h1 {
          margin: 0;
          font-size: 8em;
          color: var(--super-green);
        }
        h1 span.lines {
          position: relative;
        }

        h1 span.lines::before,
        h1 span.lines::after {
          position: absolute;
          background: url('/img/vector41.svg') center/cover no-repeat;
          height: 5px;
          right: 0;
          content: '';
          display: block;
        }
        h1 span.lines::after {
          right: 10px;
          bottom: 0;
          width: 85%;
        }
        h1 span.lines::before {
          right: 0;
          bottom: -10px;
          width: 55%;
          transform: rotate(-1deg);
        }

        @media (max-width: 468px) {
          h1 {
            font-size: 5em;
          }
        }
      `}</style>
    </div>
  );
};

export default Header_Subpages;
