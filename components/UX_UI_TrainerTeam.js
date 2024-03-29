import data from "./data/team.json";
export default function UX_UI_TrainerTeam() {
  return (
    <section className="fsTrainer">
      <div className="trainerinfos">
        <h2>
          <span>Super</span>
          Trainer:innen
        </h2>
        <p>
          Unsere Trainer:innen sind praxiserfahrene UX/UI-Designer:innen, die
          sich laufend fachlich und pädagogisch fortbilden. Durch unseren
          Methodenmix und dem Einsatz von zwei Trainer:innen zeitgleich an den
          vollen Tagen, wirst du spielerisch UX/UI-Design lernen und deine
          eigenen Prototypen bauen.
        </p>
        <p>
          Ergänzend zum Training im Bootcamp bieten wir individuelle
          One-to-One-Termine mit dem Trainerteam. Dabei gehen sie gezielt auf
          deine Fragen ein, wiederholen noch nicht verstandenes
          Unterrichtsmaterial und geben intensives Feedback zu den Übungen.
        </p>
      </div>
      <div>
        <section className="gridContainer">
          {data.map((teammitglied) => {
            if (teammitglied.team === "uxui") {
              return (
                <figure>
                  <img
                    src={teammitglied.img}
                    alt={`${teammitglied.name} ${teammitglied.job}`}
                  />
                  <figcaption>{teammitglied.name}</figcaption>
                  <p className="light">{teammitglied.job}</p>
                </figure>
              );
            }
          })}
          <div className="rotating-text">
            <img
              src="/img/Trainercircle.svg"
              alt="SuperCode Team, Bildungsträger"
            />
          </div>
        </section>
      </div>

      <style jsx>{`
          .fsTrainer {
            padding: 40px 0 170px 6%;
            width: 100%;
            background: var(--super-black);
          }

          .gridItem {
            padding: 0;
            margin: 0;
            min-width: 300px;
          }
          .fsTrainer h2 {
            font-size: 5rem;
            color: var(--super-white);
            margin-bottom: 5rem;
            position: relative;
            z-index: 0;
            line-height: 76px;
          }
          .fsTrainer h2 span {
            display: block;
            color: transparent;
            -webkit-text-stroke-width: 0.4px;
            -webkit-text-stroke-color: var(--super-white);
          }
          p {
            color: var(--super-white);
            width: 62%;
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
            right: 0;
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
              margin-bottom: 10px;
            }
            .fsTrainer p {
              width: 95%;
              margin-bottom: 3px;
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
              width: 95%;
              margin-bottom: 3px;
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
