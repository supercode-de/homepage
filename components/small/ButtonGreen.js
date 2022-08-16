import Link from 'next/link';
import Popup from 'reactjs-popup';
const ButtonGreen = (props) => {
  const { typeformFormularID } = props;
  // console.log("WICHTIG", typeformFormularID)
  return (
    <div>
      {/* <button className='button'> */}{' '}
      <a className='button'>
        {' '}
        <Link href='super-code.de'> ZUM KURS </Link>
      </a>
      {/* </button> */}
      <style jsx>{`
        #typeform {
          position: fixed;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80vh;
          color: var(--super-green);
        }
        a {
          position: absolute;
          top: 50px;
          right: 50px;
          display: inline-block;
          width: 450px;
          height: 50px;
          overflow-x: hidden;
          transition: transform 0.5s linear;
          z-index: 500;
        }
        a::before,
        a::after {
          content: '';
          position: absolute;
          height: 4px;
          width: 100%;
          top: 50%;
          left: 0;
          margin-top: -1px;
          background: #fff;
        }
        a::before {
          transform: rotate(-45deg);
        }
        a::after {
          transform: rotate(45deg);
        }
        a:hover {
          transform: rotate(180deg);
        }

        .button {
          font-family: 'FiraSans-Regular', sans-serif;
          font-size: 14px;
          letter-spacing: 1px;
          background: transparent;
          border: 1px solid var(--super-green);
          color: #fff;
          display: inline-block;
          width: 100%;
          padding: 15px 0;
        }
        .button:hover {
          color: var(--super-lila);
          background: var(--super-green);
          cursor: pointer;
        }

        @media (max-width: 1440px) {
          .button {
            font-size: 0.938em;
          }
        }
        @media (max-width: 768px) {
          .button {
            font-size: 1.1em;
          }
        }
        @media (max-width: 468px) {
          .button {
            font-size: 1.2em;
            width: 16em;
            min-width: 0;
          }
        }
        @media (max-width: 425px) {
          .button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ButtonGreen;
