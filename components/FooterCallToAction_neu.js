import Link from 'next/link';
import Beratung from './Beratung';
export default function FooterCallToAction_neu() {
  return (
    <div id='call-to-action' className='footerCTA'>
      <h2>
        {' '}
        <span className='stroke'>Worauf wartest du noch? </span>
        Die nächsten <br /> Kurse <span className='circle'>starten </span> bald.
      </h2>
      <div className='buttons'></div>

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
      `}</style>
    </div>
  );
}

// import Beratung from './Beratung';
// import Curriculum from './Curriculum';
// const FooterCallToAction = (props) => {
//   return (
//     <div id='call-to-action' className='lilaGitter'>
//       <h1>
//         <span className='stroke'>
//           Worauf wartest du noch? die nächsten Kurse
//         </span>
//         <span className='circle'>starten</span> bald
//       </h1>
//       <div className='buttons'>
//         <Beratung buttonText='Beratung' buttonTextColor='#fff' />
//         <Curriculum buttonText='Curriculum' buttonTextColor='#fff' />
//       </div>
//       <style jsx>{`
//         #call-to-action {
//           color: var(--super-green);
//           margin: 0 auto;
//           padding: 5rem 6%;
//           font-family: 'Neue_Machina_Regular_400';
//         }
//         h1 span.stroke {
//           font-size: 3rem;
//           line-height: 1.2em;
//           letter-spacing: 3px;
//           margin: 0;
//           display: block;
//           color: transparent;
//           font-weight: 300;
//           // -webkit-text-stroke-width: 1.5px;
//           // -webkit-text-stroke-color: #ffffff;
//         }

//         h1 {
//           font-size: 3rem;
//           line-height: 1.2em;
//           letter-spacing: 3px;
//           margin: 0;
//           display: block;
//           color: transparent;
//           font-weight: 300;
//           // -webkit-text-stroke-width: 1.5px;
//           // -webkit-text-stroke-color: #ffffff;
//         }
//         .buttons {
//           display: flex;
//           justify-content: flex-end;
//           gap: 4rem;
//         }
//         button {
//           margin: 2em 0;
//           font-family: 'Fira Sans', sans-serif;
//           line-height: 1.5em;
//           letter-spacing: 3.5px;
//           text-transform: uppercase;
//           padding: 0.625rem 6rem;
//           background: transparent;
//           border: 1px solid var(--super-green);
//           text-decoration: none;
//           color: #fff;
//           cursor: pointer;
//         }
//         button:hover {
//           color: var(--super-lila);
//           background: var(--super-green);
//         }
//         button:focus,
//         button:active {
//           outline: none;
//         }
//         .circle {
//           position: relative;
//         }
//         h1 span.circle::after {
//           position: absolute;
//           background: url('/img/Vector47.svg') center/contain no-repeat;
//           height: 330%;
//           width: 105%;
//           right: -5px;
//           bottom: -107%;
//           content: '';
//           display: block;
//         }

//         @media (max-width: 1024px) {
//           h1 {
//             font-size: 3em;
//           }
//         }
//         @media (max-width: 768px) {
//           #call-to-action {
//             display: block;
//           }
//         }
//         @media (max-width: 425px) {
//           #call-to-action {
//             padding-bottom: 3rem;
//           }
//           h1 {
//             font-size: 2.5rem;
//           }
//           .buttons {
//             display: block;
//           }
//           button {
//             width: 100%;
//             margin: 1rem 0;
//           }
//         }

//         @media (max-width: 375px) {
//           h1 {
//             font-size: 2.3rem;
//             -webkit-text-stroke-width: 1px;
//           }
//           h1 span.circle::after {
//             right: 0px;
//           }
//           #call-to-action {
//             padding-top: 3rem;
//           }
//           .buttons {
//             margin-top: 2rem;
//           }
//         }
//         @media (max-width: 320px) {
//           h1 {
//             font-size: 2rem;
//           }
//           button {
//             padding-left: 4rem;
//             padding-right: 4rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FooterCallToAction;
