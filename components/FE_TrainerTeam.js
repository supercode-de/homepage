export default function FE_TrainerTeam() {
  return (
    <section className='fsTrainer blackGitter'>
      <div className='trainerinfos'>
        <h2>
          <span>Super</span>
          Trainer*innen
        </h2>
        <p>
          Unsere Trainer*innen sind praxiserfahrene Webentwickler*innen, die
          sich laufend fachlich und pädagogisch fortbilden. Durch unseren
          Methodenmix und dem Einsatz von zwei Trainer*innen zeitgleich pro Tag,
          wirst du spielerisch programmieren lernen und deine eigenen Webseiten
          bauen.
        </p>
        <p>
          Ergänzend zum Training im Bootcamp bieten wir individuelle Termine
          beim Flex-Trainer an. Im One-on-One-Coaching geht der/die Trainer*in
          gezielt auf deine Fragen ein, wiederholt noch nicht verstandenes
          Unterrichtsmaterial und gibt intensives Feedback zu den Übungen.
        </p>
      </div>
      <div>
        <section className='gridContainer'>
          <figure>
            <img
              src='/img/team/Anass Nebarri Trainer Webentwicklung Full-Stack.jpg'
              alt='Portrait von supercode Mitarbeiter'
            />
            <figcaption>Anass Nebbari</figcaption>
            <p className='bold'>Main Trainer &</p>
            <p className='light'>Head of Training </p>
            <p className='light'>Web-Entwicklung</p>
          </figure>

          <figure>
            <img
              src='/img/team/Georg Treitz Trainer Webentwicklung Full-Stack.jpg'
              alt='Portrait von supercode Mitarbeiter'
            />
            <figcaption>Georg Treitz</figcaption>
            <p className='bold'>Main Trainer </p>
            <p className='light'>Web-Entwicklung</p>
            <p className='light'>Full-Stack</p>
          </figure>

          <figure>
            <img
              src='/img/team/David Bigus Trainer Webentwicklung.jpg'
              alt='Portrait von supercode Mitarbeiter'
            />
            <figcaption>David Bigus</figcaption>
            <p className='bold'>Main Trainer</p>
            <p className='light'>Web-Entwicklung</p>
            <p className='light'>Front-End</p>
          </figure>

          <figure>
            <img
              src='/img/team/Elaine Wong Trainer Webentwicklung Full-Stack_neu.jpg'
              alt='Portrait von supercode Mitarbeiter'
            />
            <figcaption>Elaine Wong</figcaption>
            <p className='bold'>Assistant Trainerin </p>
            <p className='light'>Web-Entwicklung</p>
            <p className='light'>Full-Stack</p>
          </figure>

          <figure>
            <img
              src='/img/team/Eric Noack Trainer Webentwicklung.jpg'
              alt='Portrait von supercode Mitarbeiter'
            />
            <figcaption>Eric Noack</figcaption>
            <p className='bold'>FlexTrainer </p>
            <p className='light'>Web-Entwicklung</p>
          </figure>

          <figure>
            <img
              src='/img/team/Finn Schlottmann Trainer Webentwicklung Full-Stack.jpg'
              alt='Portrait von supercode Mitarbeiter'
            />
            <figcaption>Finn Schlottmann</figcaption>
            <p className='bold'>Assistant Trainer </p>
            <p className='light'>Web-Entwicklung</p>
            <p className='light'>Front-End</p>
          </figure>

          <div className='rotating-text'>
            <img
              src='/img/Trainercircle.svg'
              alt='SuperCode Team, Bildungsträger'
            />
          </div>
        </section>
      </div>

      <style jsx>
        {`
          .fsTrainer {
            padding: 40px 0 170px 6%;
            width: 100%;

            // overflow: hidden;
          }

          .gridItem {
            padding: 0;
            margin: 0;
            min-width: 300px;
          }
          .fsTrainer h2 {
            font-size: 4rem;
            color: #fff;
            margin-bottom: 5rem;
            position: relative;
            z-index: 9;
            line-height: 60px;
          }
          .fsTrainer h2 span {
            display: block;
            color: transparent;
            -webkit-text-stroke-width: 0.4px;
            -webkit-text-stroke-color: #fff;
          }
          p {
            color: #fff;
            width: 62%;
            font-size: 1.2rem;
            line-height: 20px;
            font-weight: 400;
          }

          figure img {
            width: 100%;
          }

          figure p {
            font-size: 1.3rem;
            margin: 0;
            font-weight: lighter;
            width: 100%;
          }

          figcaption {
            font-size: 1.4rem;
            color: var(--super-green);
            padding-top: 7px;
            padding-bottom: 3px;
            font-weight: 100;
          }

          .gridContainer {
            display: grid;
            grid-template-columns: 33% 33% 33%;
            gap: 0.3rem;
            margin: 0 auto;
            width: 93%;
            margin-right: 6%;
            margin-top: 7%;
            position: relative;
          }
          .rotating-text {
            position: absolute;
            top: -40%;
            right: 10px;
            width: 23%;

            animation: spin 15s linear infinite;
          }

          .rotating-text img {
            width: 100%;
          }
          @keyframes spin {
            0% {
              transform: rotate(0);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          @media (max-width: 1040px) {
            .gridContainer {
              gap: 0.1rem;
            }
          }

          @media (max-width: 875px) {
            .gridContainer {
              display: grid;
              grid-template-columns: 50% 50%;
              gap: 0.1rem;
              margin: 0 auto;
              width: 100%;
              // margin-right: 6%;
              // margin-top: 7%;
            }
            .rotating-text {
              display: none;
            }
          }
          @media (max-width: 875px) {
            .fsTrainer h2 {
              font-size: 1.5rem;
              line-height: 28px;
            }
            .gridContainer {
              margin: auto;
            }
            .rotating-text {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .fsTrainer h2 {
              font-size: 1.5rem;
              line-height: 28px;
              margin-bottom: 10px;
            }
            .fsTrainer p {
              font-size: 1rem;
              width: 95%;
              margin-bottom: 3px;
            }
            .gridContainer {
              margin: auto;
            }
            .rotating-text {
              display: none;
            }
          }
          @media (max-width: 585px) {
            .fsTrainer h2 {
              font-size: 1.8rem;
              // line-height: 20px;
              margin-bottom: 10px;
            }
            .fsTrainer p {
              font-size: 0.9rem;
              width: 95%;
              margin-bottom: 3px;
              line-height: 13px;
            }
            figcaption {
              font-size: 1.2rem;
              color: var(--super-green);
              padding-top: 7px;
              padding-bottom: 1px;
              font-weight: 100;
            }
          }
          @media (max-width: 480px) {
            .fsTrainer h2 {
              font-size: 1.4rem;
              color: #fff;
              // line-height: 20px;
              margin-bottom: 10px;
            }
            .fsTrainer h2 span {
              display: block;

              -webkit-text-stroke-width: 0.4px;
              -webkit-text-stroke-color: #fff;
            }
            .fsTrainer p {
              font-size: 0.9rem;
              width: 95%;
              margin-bottom: 3px;
              line-height: 13px;
            }

            .fsTrainer figure p {
              line-height: 10px;
              font-size: 0.8rem;
            }
            figcaption {
              font-size: 1rem;
              color: var(--super-green);
              padding-top: 7px;
              padding-bottom: 1px;
              font-weight: 100;
            }
          }

          @media (max-width: 425px) {
            .fsTrainer {
              padding: 40px 0 100px 6%;

              // overflow: hidden;
            }
            .fsTrainer h2 {
              font-size: 1.8rem;
              line-height: 28px;
              margin-bottom: 0;
            }
            // .fsTrainer p {
            //   font-size: 1rem;
            //   width: 95%;
            //   margin-bottom: 30px;
            //   line-height: 10px;
            // }

            figcaption {
              font-size: 1rem;
              color: var(--super-green);
              padding-top: 7px;
              padding-bottom: 1px;
              font-weight: 100;
            }
            .gridContainer {
              display: grid;
              grid-template-columns: 50% 50%;

              margin: auto;

              justify-content: center;
            }

            figure {
              margin-inline-start: 5px;
              margin-inline-end: 25px;
            }
            .fsTrainer figure p {
              line-height: 10px;
              font-size: 0.8rem;
            }
            //   // .gridContainer gridItem {
            //   //   width: 100%;
            //   // }
          }
        `}
      </style>
    </section>
  );
}
