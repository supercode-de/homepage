// import Typeform_neu_flexible from './Typeform_neu_flexible';

// const HeaderCallToAction_neu = () => {
//   return (
//     <div id='header-call'>
//       <section className='headerFlex'>
//         <section>
//           <h3>
//             – 30 Wochen = <span className='circle'> 7 Monate</span>
//           </h3>
//           <h3>– Teilzeit neben dem Job</h3>
//           <h3>
//             – 2 Trainer*innen <span className='after-span'>zeitgleich.</span>
//           </h3>
//         </section>
//         <section>
//           <h3>
//             –<span className='bling'>Moderne </span>
//             <span className='bling2'>Tools</span>
//           </h3>
//           <h3>– MacBook als Leihgabe</h3>
//           <h3>– Vor Ort & online</h3>
//         </section>
//       </section>
//       <article className='jetzt-bewerben'>
//         <h4> Bewirb dich jetzt!</h4>
//         <span className='btn'></span>
//         <Typeform_neu_flexible width='410px' height='50px' top='50px' />
//       </article>
//       <style jsx>{`
//         #header-call {
//           padding: 5rem 6%;
//           background: var(--super-black);
//         }
//         .headerFlex {
//           display: flex;
//           justify-content: space-between;
//           color: #fff;
//           min-width: 100%;
//         }
//         .headerFlex p {
//           font-size: clamp(0.8rem, 1rem, 2rem);
//         }
//         section h3 {
//           font-weight: 300;
//           margin-bottom: 1rem;
//           font-size: 2rem;
//           font-family: 'Neue_Machina_Regular_400';
//         }
//         .super,
//         .circle,
//         .bling,
//         .bling2 {
//           position: relative;
//         }

//         h3 span.circle::after {
//           position: absolute;
//           background: url('/img/Vector64.svg') center/contain no-repeat;
//           height: 336%;
//           width: 125%;
//           right: -40px;
//           bottom: -110%;
//           content: '';
//           display: block;
//         }
//         h3 span.bling {
//           padding-left: 0.7rem;
//         }

//         h3 span.bling::before,
//         h3 span.bling2::after {
//           position: absolute;
//           content: '';
//           display: block;
//           height: 2.5rem;
//           width: 1.3rem;
//           bottom: -0.1em;
//         }
//         h3 span.bling::before {
//           background: url('/img/bling.png') center/contain no-repeat;
//           left: -1rem;
//         }
//         h3 span.bling2::after {
//           background: url('/img/bling2.png') center/contain no-repeat;
//           right: -1.5rem;
//         }
//         .after-span {
//           padding-bottom: 2rem;
//           padding-right: 1rem;
//         }
//         .headerFlex section:first-child .after-span {
//           content: '';
//           background: url('/img/vector127.svg') 0px 60px / contain no-repeat;
//         }

//         .jetzt-bewerben {
//           display: flex;
//           padding-top: 30px;
//         }

//         .jetzt-bewerben h4 {
//           width: 100%;
//           font-size: 2rem;
//           position: relative;
//           top: 50px;
//         }
//         .btn {
//           display: inline-block;
//           width: 40%;
//           margin: auto;
//         }
//         .jetzt-bewerben:nth-child(2) {
//           width: 60%;
//         }

//         .jetzt-bewerben h4 {
//           color: #fff;
//         }
//         @media (max-width: 1540px) {
//           h3 span.circle::after {
//             width: 119%;
//             right: -12px;
//             bottom: -110%;
//           }
//         }
//         @media (max-width: 1440px) {
//           h3 {
//             font-size: 2.8rem;
//           }

//           .jetzt-bewerben h4 {
//             font-size: 1.7rem;
//           }
//           h3 span.circle::after {
//             width: 119%;
//             right: -16px;
//             bottom: -110%;
//           }
//           .headerFlex section:first-child .after-span {
//             background: url('/img/vector127.svg') 0px 27px / contain no-repeat;
//           }
//         }
//         @media (max-width: 1024px) {
//           section h3 {
//             font-size: 1.8rem;
//           }
//           .jetzt-bewerben h4 {
//             font-size: 1.4rem;
//             top: 60px;
//           }
//           h3 span.circle::after {
//             right: -12px;
//           }
//           .headerFlex section:first-child .after-span {
//             background: url('/img/vector127.svg') 0px 27px / contain no-repeat;
//           }
//           h3 span.bling::before,
//           h3 span.bling2::after {
//             bottom: 0.01em;
//           }
//         }

//         @media (max-width: 880px) {
//           section h3 {
//             font-size: 1.5rem;
//           }
//           .headerFlex section:first-child .after-span {
//             background: url('/img/vector127.svg') -10px 20px / contain no-repeat;
//           }

//           .jetzt-bewerben h4 {
//             font-size: 1.2rem;
//           }
//           .jetzt-bewerben {
//             display: flex;
//             padding-top: 0px;
//           }
//           h3 span.bling::before,
//           h3 span.bling2::after {
//             position: absolute;
//             content: '';
//             display: block;
//             height: 2.1rem;
//             width: 1.1rem;
//             bottom: -0.3em;
//           }
//         }

//         @media (max-width: 768px) {
//           .headerFlex {
//           }

//           section h3 {
//             font-size: 1.3rem;
//             font-weight: 200;
//           }

//           .jetzt-bewerben h4 {
//             font-size: 1.1rem;
//           }
//           .start {
//           }
//           h2 span.bling::before {
//             bottom: -0.1em;
//           }
//           h2 span.bling2::after {
//             bottom: -0.2em;
//           }
//           .headerFlex section:first-child .after-span {
//             background: url('/img/vector127.svg') -9px 16px / contain no-repeat;
//           }
//           h2 span.circle::after {
//             right: -22px;
//           }
//         }
//         @media (max-width: 655px) {
//           section h3 {
//             font-size: 1.12rem;
//           }
//           .jetzt-bewerben h4 {
//             font-size: 1rem;
//           }

//           .jetzt-bewerben {
//           }
//         }
//         @media (max-width: 575px) {
//           section h3 {
//             font-size: 1rem;
//           }
//           h3 span.bling::before,
//           h3 span.bling2::after {
//             position: absolute;
//             content: '';
//             display: block;
//             height: 1.9rem;
//             width: 0.8rem;
//             bottom: -0.3em;
//           }
//           h3 span.bling {
//             padding-left: 0.4rem;
//           }
//           h3 span.bling::before {
//             background: url('/img/bling.png') center/contain no-repeat;
//             left: -0.7rem;
//           }
//           h3 span.bling2::after {
//             background: url('/img/bling2.png') center/contain no-repeat;
//             right: -1rem;
//           }
//           .jetzt-bewerben h4 {
//             top: 20px;
//           }
//         }
//         @media (max-width: 518px) {
//           h2 {
//             padding: 0 6%;
//           }
//           h2 span.bling::before {
//             bottom: -0.5em;
//             width: 1rem;
//             left: -1.2rem;
//           }
//           h2 span.bling2::after {
//             bottom: -0.5em;
//             width: 1rem;
//             right: -1.2rem;
//           }
//           .headerFlex p {
//             font-size: 0.6rem;
//           }
//           section h3 {
//             font-size: 0.9rem;
//           }
//         }
//         @media (max-width: 470px) {
//           section h3 {
//             font-size: 0.75rem;
//           }
//           .headerFlex section:first-child .after-span {
//             background: url('/img/vector127.svg') -20px 13px / contain no-repeat;
//           }
//           .jetzt-bewerben h4 {
//             top: 25px;
//             font-size: 0.8rem;
//           }
//         }
//         @media (max-width: 425px) {
//           #header-call {
//             padding: 2rem 6%;
//           }
//           .headerFlex {
//           }
//           h3 {
//             font-size: 0.75rem;
//             wont-weight: 400;
//             margin: 5px 0;
//           }
//           .headerFlex section:first-child .after-span {
//             background: url('/img/vector127.svg') -10px 11px / contain no-repeat;
//           }
//           h3 span.bling::before,
//           h3 span.bling2::after {
//             height: 1.6rem;
//             width: 2.6rem;
//           }
//           .btn {
//             display: inline-block;
//             width: 1px;
//             margin: auto;
//           }
//           h3 span.bling::before,
//           h3 span.bling2::after {
//             position: absolute;
//             content: '';
//             display: block;
//             height: 1.3rem;
//             width: 0.8rem;
//             bottom: -0.3em;
//           }
//           h3 span.bling {
//             padding-left: 0.4rem;
//           }
//           h3 span.bling::before {
//             background: url('/img/bling.png') center/contain no-repeat;
//             left: -0.7rem;
//           }
//           h3 span.bling2::after {
//             background: url('/img/bling2.png') center/contain no-repeat;
//             right: -1.1rem;
//           }

//           .jetzt-bewerben {
//             padding-bottom: 30px;
//           }
//           .jetzt-bewerben h4 {
//             top: 12px;
//             font-size: 0.8rem;
//           }
//         }
//         @media (max-width: 387px) {
//           section h3 {
//             font-size: 0.7rem;
//           }
//         @media (max-width: 360px) {
//           section h3 {
//             font-size: 0.65rem;
//           }
//           .jetzt-bewerben h4 {
//             top: 12px;
//             font-size: 0.7rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeaderCallToAction_neu;

import Typeform_neu_flexible from './Typeform_neu_flexible';

const HeaderCallToAction_neu = () => {
  return (
    <div id='header-call'>
      <section className='headerFlex'>
        <section>
          <h3>
            – 30 Wochen = <span className='circle'> 7 Monate</span>
          </h3>
          <h3>– Teilzeit neben dem Job</h3>
          <h3>
            – 2 Trainer*innen <span className='after-span'>zeitgleich</span>
          </h3>
        </section>
        <section>
          <h3>
            –<span className='bling'>Moderne </span>
            <span className='bling2'>Tools</span>
          </h3>
          <h3>– MacBook als Leihgabe</h3>
          <h3>– Vor Ort & online</h3>
        </section>
      </section>
      <article className='jetzt-bewerben'>
        <h4> Bewirb dich jetzt!</h4>
        <span className='btn'></span>
        <Typeform_neu_flexible width='410px' height='50px' top='50px' />
      </article>
      <style jsx>{`
        #header-call {
          padding: 5rem 6%;
          background: var(--super-black);
        }
        .headerFlex {
          display: flex;
          justify-content: space-between;
          color: #fff;
          min-width: 100%;
        }
        .headerFlex p {
          font-size: clamp(0.8rem, 1rem, 2rem);
        }
        section h3 {
          font-weight: 300;
          margin-bottom: 1rem;
          font-size: 2.6rem;
          font-family: 'Neue_Machina_Regular_400';
        }
        .super,
        .circle,
        .bling,
        .bling2 {
          position: relative;
        }

        h3 span.circle::after {
          position: absolute;
          background: url('/img/Vector64.svg') center/contain no-repeat;
          height: 336%;
          width: 125%;
          right: -40px;
          bottom: -110%;
          content: '';
          display: block;
        }

        h3 span.bling {
          padding-left: 0.7rem;
        }

        h3 span.bling::before,
        h3 span.bling2::after {
          position: absolute;
          content: '';
          display: block;
          height: 2.5rem;
          width: 1.3rem;
          bottom: -0.1em;
        }
        h3 span.bling::before {
          background: url('/img/bling.png') center/contain no-repeat;
          left: -1rem;
        }
        h3 span.bling2::after {
          background: url('/img/bling2.png') center/contain no-repeat;
          right: -1.5rem;
        }
        .after-span {
          padding-bottom: 2rem;
          padding-right: 1rem;
        }
        .headerFlex section:first-child .after-span {
          content: '';
          background: url('/img/vector127.svg') 0px 60px / contain no-repeat;
        }

        .jetzt-bewerben {
          display: flex;
          padding-top: 30px;
        }

        .jetzt-bewerben h4 {
          width: 140%;
          font-size: 2.6rem;
          position: relative;
          top: 50px;
        }
        .btn {
          display: inline-block;
          width: 40%;
          margin: auto;
        }
        .jetzt-bewerben:nth-child(2) {
          width: 60%;
        }

        .jetzt-bewerben h4 {
          color: #fff;
        }
        @media (max-width: 1540px) {
          h3 span.circle::after {
            width: 119%;
            right: -12px;
            bottom: -110%;
          }
        }

        @media (max-width: 1440px) {
          h3 {
            font-size: 2.8rem;
          }

          .jetzt-bewerben h4 {
            font-size: 2.6rem;
          }
          h3 span.circle::after {
            width: 119%;
            right: -16px;
            bottom: -110%;
          }
          .headerFlex section:first-child .after-span {
            background: url('/img/vector127.svg') 0px 37px / contain no-repeat;
          }
        }
        @media (max-width: 1024px) {
          section h3 {
            font-size: 1.8rem;
          }
          .jetzt-bewerben h4 {
            font-size: 1.4rem;
            top: 60px;
          }
          h3 span.circle::after {
            right: -8px;
          }
          .headerFlex section:first-child .after-span {
            background: url('/img/vector127.svg') 0px 27px / contain no-repeat;
          }
          h3 span.bling::before,
          h3 span.bling2::after {
            bottom: 0.01em;
          }
        }

        @media (max-width: 880px) {
          section h3 {
            font-size: 1.5rem;
          }
          .headerFlex section:first-child .after-span {
            background: url('/img/vector127.svg') -10px 20px / contain no-repeat;
          }

          .jetzt-bewerben h4 {
            font-size: 1.2rem;
          }
          .jetzt-bewerben {
            display: flex;
            padding-top: 0px;
          }
          h3 span.bling::before,
          h3 span.bling2::after {
            position: absolute;
            content: '';
            display: block;
            height: 2.1rem;
            width: 1.1rem;
            bottom: -0.3em;
          }
        }

        @media (max-width: 768px) {
          .headerFlex {
          }

          section h3 {
            font-size: 1.3rem;
            font-weight: 200;
          }

          .jetzt-bewerben h4 {
            font-size: 1.1rem;
          }
          .start {
          }
          h2 span.bling::before {
            bottom: -0.1em;
          }
          h2 span.bling2::after {
            bottom: -0.2em;
          }
          .headerFlex section:first-child .after-span {
            background: url('/img/vector127.svg') -9px 16px / contain no-repeat;
          }
          h2 span.circle::after {
            right: -22px;
          }
        }
        @media (max-width: 655px) {
          section h3 {
            font-size: 1.12rem;
          }
          .jetzt-bewerben h4 {
            font-size: 1rem;
          }

          .jetzt-bewerben {
          }
        }
        @media (max-width: 575px) {
          section h3 {
            font-size: 1rem;
          }
          h3 span.bling::before,
          h3 span.bling2::after {
            position: absolute;
            content: '';
            display: block;
            height: 1.9rem;
            width: 0.8rem;
            bottom: -0.3em;
          }
          h3 span.bling {
            padding-left: 0.4rem;
          }
          h3 span.bling::before {
            background: url('/img/bling.png') center/contain no-repeat;
            left: -0.7rem;
          }
          h3 span.bling2::after {
            background: url('/img/bling2.png') center/contain no-repeat;
            right: -1rem;
          }
          .jetzt-bewerben h4 {
            top: 20px;
          }
        }
        @media (max-width: 518px) {
          h2 {
            padding: 0 6%;
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
          .headerFlex p {
            font-size: 0.6rem;
          }
          section h3 {
            font-size: 0.9rem;
          }
        }
        @media (max-width: 470px) {
          section h3 {
            font-size: 0.75rem;
          }
          .headerFlex section:first-child .after-span {
            background: url('/img/vector127.svg') -20px 13px / contain no-repeat;
          }
          .jetzt-bewerben h4 {
            top: 25px;
            font-size: 0.8rem;
          }
        }
        @media (max-width: 425px) {
          #header-call {
            padding: 2rem 6%;
          }
          .headerFlex {
          }
          h3 {
            font-size: 0.75rem;
            wont-weight: 400;
            margin: 5px 0;
          }
          .headerFlex section:first-child .after-span {
            background: url('/img/vector127.svg') -10px 11px / contain no-repeat;
          }
          h3 span.bling::before,
          h3 span.bling2::after {
            height: 1.6rem;
            width: 2.6rem;
          }
          .btn {
            display: inline-block;
            width: 1px;
            margin: auto;
          }
          h3 span.bling::before,
          h3 span.bling2::after {
            position: absolute;
            content: '';
            display: block;
            height: 1.3rem;
            width: 0.8rem;
            bottom: -0.3em;
          }
          h3 span.bling {
            padding-left: 0.4rem;
          }
          h3 span.bling::before {
            background: url('/img/bling.png') center/contain no-repeat;
            left: -0.7rem;
          }
          h3 span.bling2::after {
            background: url('/img/bling2.png') center/contain no-repeat;
            right: -1.1rem;
          }

          .jetzt-bewerben {
            padding-bottom: 30px;
          }
          .jetzt-bewerben h4 {
            top: 12px;
            font-size: 0.8rem;
          }
        }
        @media (max-width: 387px) {
          section h3 {
            font-size: 0.7rem;
          }
        }
        @media (max-width: 360px) {
          section h3 {
            font-size: 0.65rem;
          }
          .jetzt-bewerben h4 {
            top: 12px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderCallToAction_neu;
