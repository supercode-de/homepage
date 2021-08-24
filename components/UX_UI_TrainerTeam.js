export default function UX_UI_TrainerTeam() {
  return (
    <section className='fsTrainer blackGitter'>
      <div className='trainerinfos'>
        <h2>
          <span>Super</span>
          Trainer*innen
        </h2>
        <p className='txt'>
          Unsere Trainer*innen sind praxiserfahrene UX/UI-Designer*innen, die
          sich laufend fachlich und pädagogisch fortbilden. Durch unseren
          Methodenmix und dem Einsatz von zwei Trainer*innen zeitgleich an den
          vollen Tagen, wirst du spielerisch UX/UI-Design lernen und deine
          eigenen Prototypen bauen.
        </p>
        <p className='txt'>
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
              src='/img/team/Kimberly Maasz Trainer UX-UI-Deseign.jpg'
              alt='Portrait von supercode Mitarbeiter'
            />
            <figcaption>Kimberly Maasz</figcaption>
            <p className='bold'>Main Trainerin </p>
            <p className='light'>UX/UI-Design</p>
          </figure>

          <figure>
            <img
              src='/img/team/Finn Schlottmann Trainer Webentwicklung Full-Stack.jpg'
              alt='Portrait von supercode Mitarbeiter'
            />
            <figcaption>Finn Schlottmann</figcaption>
            <p className='bold'>Assistant Trainer </p>
            <p className='light'>Web-Entwicklung</p>
            <p className='light'>& UX/UI-Design</p>
          </figure>

          <figure>
            <img
              src='/img/team/Dummie.jpg'
              alt='Portrait von supercode Mitarbeiter'
            />
            <figcaption>Franziska Hövelmanns</figcaption>
            <p className='bold'>Assistant Trainerin </p>
            <p className='light'>Web-Entwicklung</p>
            <p className='light'>& UX/UI-Design</p>
          </figure>

          {/* <figure>
              <img
                src='/img/team/Elaine Wong Trainer Webentwicklung Full-Stack_neu.jpg'
                alt='Portrait von supercode Mitarbeiter'
              />
              <figcaption>Elaine Wong</figcaption>
              <p className='bold'>Assistant Trainer </p>
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
   */}
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
            font-size: 5rem;
            color: #fff;
            margin-bottom: 5rem;
            position: relative;
            z-index: 0;
            line-height: 76px;
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
            font-size: 1.3rem;
            line-height: 20px;
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
            top: -20%;
            right: -2%;
            width: 20%;

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
              font-size: 1rem;
              width: 95%;
              margin-bottom: 3px;
              line-height: 13px;
            }
            .fsTrainer .txt {
              line-height: 22px;
            }
            figcaption {
              font-size: 1.2rem;
              color: var(--super-green);
              padding-top: 7px;
              padding-bottom: 1px;
              font-weight: 100;
            }
          }

          @media (max-width: 545px) {
            figcaption {
              font-size: 1rem;
              color: var(--super-green);
              padding-top: 7px;
              padding-bottom: 1px;
              font-weight: 100;
            }
          }

          @media (max-width: 480px) {
            .fsTrainer h2 {
              font-size: 1.6rem;
              // line-height: 20px;
              margin-bottom: 10px;
              margin-top: 0;
            }
            .fsTrainer p {
              font-size: 0.8rem;
              width: 95%;
              margin-bottom: 3px;
              line-height: 13px;
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
              font-size: 1.4rem;
              line-height: 20px;

              margin-bottom: 0;
            }
            .fsTrainer p {
              font-size: 0.8rem;
              width: 95%;
              // margin-bottom: 30px;
              line-height: 15px;
            }

            .fsTrainer .txt {
              line-height: 15px;
            }

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
            .fsTrainer p {
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
