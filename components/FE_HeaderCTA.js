const HeaderCallToAction_neu = () => {
  return (
    <div id='header-call'>
      <section className='headerFlex'>
        <section>
          <h3>
            – 30 Wochen = 7<span className='circle'> Monate</span>
          </h3>
          <h3>– Teilzeit neben dem Job</h3>
          <h3>
            – 2 Trainer*innen <span className='after-span'>zeitgleich</span>
          </h3>
        </section>
        <section>
          <h3>–Moderner Campus</h3>
          <h3>
            – <span className='bling'>MacBook als</span>
            <span className='bling2'>Leihgabe</span>
          </h3>
          <h3>– Vor Ort & online</h3>
        </section>
      </section>
      <style jsx>{`
        #header-call {
          padding: 5rem 6%;
          background: var(--super-black);
        }
        .headerFlex {
          display: flex;
          justify-content: space-between;
          color: #fff;
        }
        .headerFlex p {
          font-size: clamp(0.8rem, 1rem, 2rem);
        }
        h3 {
          font-weight: 300;
          margin-bottom: 1rem;
          font-size: 3.75rem;
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
          padding-left: 1rem;
        }

        h3 span.bling::before,
        h3 span.bling2::after {
          position: absolute;
          content: '';
          display: block;
          height: 2.5rem;
          width: 2rem;
          bottom: 0.3em;
        }
        h3 span.bling::before {
          background: url('/img/bling.png') center/contain no-repeat;
          left: -1rem;
        }
        h3 span.bling2::after {
          background: url('/img/bling2.png') center/contain no-repeat;
          right: -2rem;
        }
        .after-span {
          padding-bottom: 2rem;
          padding-right: 2rem;
        }
        .headerFlex section:first-child .after-span {
          content: '';
          background: url('/img/vector127.svg') 0px 60px / contain no-repeat;
        }
        @media (max-width: 1440px) {
          h3 {
            font-size: 2.8rem;
          }
          h3 span.circle::after {
            width: 119%;
            right: -20px;
            bottom: -110%;
          }
          .headerFlex section:first-child .after-span {
            background: url('/img/vector127.svg') 0px 43px / contain no-repeat;
          }
        }
        @media (max-width: 1024px) {
          h3 {
            font-size: 2rem;
          }
          h3 span.circle::after {
            right: -12px;
          }
          .headerFlex section:first-child .after-span {
            background: url('/img/vector127.svg') 0px 30px / contain no-repeat;
          }
          h3 span.bling::before,
          h3 span.bling2::after {
            bottom: 0.01em;
          }
        }
        @media (max-width: 768px) {
          .headerFlex {
            display: block;
          }
          h2 span.bling::before {
            bottom: -0.1em;
          }
          h2 span.bling2::after {
            bottom: -0.2em;
          }
          .headerFlex section:first-child .after-span {
            background: url('/img/vector127.svg') 0px 29px / contain no-repeat;
          }
          h2 span.circle::after {
            right: -22px;
          }
        }
        @media (max-width: 468px) {
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
        }
        @media (max-width: 425px) {
          #header-call {
            padding: 2rem 6%;
          }
          h3 {
            font-size: 1.5rem;
          }
          .headerFlex section:first-child .after-span {
            background: url('/img/vector127.svg') 0px 21px / contain no-repeat;
          }
          h3 span.bling::before,
          h3 span.bling2::after {
            height: 1.6rem;
            width: 2.6rem;
          }
        }
        @media (max-width: 320px) {
          h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderCallToAction_neu;
