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
          beim Flex-Trainer an. Im One-to-One-Coaching geht der/die Trainer*in
          gezielt auf deine Fragen ein, wiederholt noch nicht verstandenes
          Unterrichtsmaterial und gibt intensives Feedback zu den Übungen.
        </p>
      </div>
      <div>
        <section className='gridContainer'>
          <div className='gridItem1'>
            <figure>
              <img
                src='/img/team/Anass Nebarri Trainer Webentwicklung Full-Stack.jpg'
                alt='Portrait von supercode Mitarbeiter'
              />
              <figcaption>Anass Nebbaro</figcaption>
              <p className='bold'>Main Trainer </p>
              <p className='light'>Head of Training &</p>
              <p className='light'>Web-Entwicklung</p>
            </figure>
          </div>
          <div className='gridItem2'>
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
          </div>
          <div className='gridItem3'>
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
          </div>
          <div className='gridItem4'>
            <figure>
              <img
                src='/img/team/Elaine Wong Trainer Webentwicklung Full-Stack_neu.jpg'
                alt='Portrait von supercode Mitarbeiter'
              />
              <figcaption>Elaine Wong</figcaption>
              <p className='bold'>Assistant Trainer </p>
              <p className='light'>Web-Entwicklung</p>
              <p className='light'>Full-Stack</p>
            </figure>
          </div>

          <div className='gridItem5'>
            <figure>
              <img
                src='/img/team/image 19.jpg'
                alt='Portrait von supercode Mitarbeiter'
              />
              <figcaption>Franziska </figcaption>
              <p className='bold'>Assistant Trainer </p>
              <p className='light'>Web-Entwicklung</p>
              <p className='light'>UX/ UI - Design</p>
            </figure>
          </div>
          <div className='gridItem6'>
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
          </div>
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
            position: relative;
            overflow: hidden;
          }
          .fsTrainer h2 {
            font-size: 5rem;
            color: #fff;
            margin-bottom: 5rem;
            position: relative;
            z-index: 9;
            line-height: 4.5rem;
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
          }

          figure img {
            width: 100%;
          }

          figure p {
            font-size: 1.3rem;
            margin: 0;
            font-weight: lighter;
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
            gap: 0.5rem;
            margin: 0 auto;
            width: 93%;
            margin-right: 6%;
            margin-top: 7%;
          }
          .rotating-text {
            position: absolute;
            top: 25%;
            right: 0;
            z-index: 9;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: spin 15s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </section>
  );
}
