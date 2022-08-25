import teamData from './data/team.json';
export default function Kurse_TrainerTeam(props) {
    return (
        <section className='fsTrainer'>
            <div className='trainerinfos'>
                <h2>
                    <span>Super</span>
                    Trainer*innen
                </h2>
                <p>
                    Unsere Trainer*innen sind praxiserfahrene {props.kursForm === "uxui" ? "UX/UI-Designer*innen" : "Webentwickler*innen"}, die
                    sich laufend fachlich und pädagogisch fortbilden. Durch unseren
                    Methodenmix und dem Einsatz von zwei Trainer*innen zeitgleich pro Tag,
                    wirst du spielerisch {props.kursForm === "uxui" ? "UX/UI-Design lernen und deine eigenen Prototypen bauen" : "programmieren lernen und deine eigenen Webseiten bauen."}
                </p>

            </div>
            <div>
                <section className='gridContainer'>

                    {teamData.map((teammitglied) => {
                        if (teammitglied.team === props.kursForm) {
                            return (
                                <figure>
                                    <img
                                        src={teammitglied.img}
                                        alt={`${teammitglied.name} ${teammitglied.job}`}
                                    />
                                    <figcaption>{teammitglied.name}</figcaption>
                                    <p className='light'>{teammitglied.job}</p>
                                </figure>
                            );
                        }
                    })}
                    <div className='rotating-text'>
                        <img
                            src='/img/Trainercircle.svg'
                            alt='SuperCode Team, Bildungsträger'
                        />
                    </div>
                </section>
            </div>

            <style jsx>{`
          .fsTrainer {
            padding: 94px 0 170px 6%;
            width: 100%;
            background: var(--super-black);
          }
          .fsTrainer h2 {
            color: var(--super-white);
            margin-bottom: 56px;
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
          .trainerinfos p:nth-of-type(1){
            margin-bottom: 20px;
          }
          figure img {
            width: 100%;
          }

          figure p {
            font-size: 1.875rem;
            width: 100%;
          }

          figcaption {
            font-size: 1.875rem;
            color: var(--super-green);
            padding-top: 7px;
            padding-bottom: 3px;
            font-weight: 100;
          }

          .gridContainer {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: 80%;
            margin: 0 auto;
            margin-top: 96px;
            gap: 126px;
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
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
              margin: 0 auto;
              width: 100%;
            }
            .rotating-text {
              display: none;
            }
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

            figcaption {
              font-size: 1.5rem;
            }
            .rotating-text {
              display: none;
            }
          }
          @media (max-width: 585px) {
            .fsTrainer h2 {
              font-size: 1.8rem;
              line-height: 20px;
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
          @media (max-width: 480px) {
            .fsTrainer h2 {
              font-size: 1.4rem;
              color: var(--super-white);
              margin-bottom: 10px;
              margin-top: 0;
            }
            .fsTrainer h2 span {
              display: block;

              -webkit-text-stroke-width: 0.4px;
              -webkit-text-stroke-color: var(--super-white);
            }
            .fsTrainer p {
              font-size: 1rem;
              width: 95%;
              margin-bottom: 3px;
              line-height: 15px;
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
            }
            .fsTrainer h2 {
              font-size: 1.8rem;
              line-height: 28px;
              margin-bottom: 0;
            }

            figcaption {
              font-size: 1rem;
              color: var(--super-green);
              padding-top: 7px;
              padding-bottom: 1px;
              font-weight: 100;
            }
            .gridContainer {
              grid-template-columns: 1fr;
            }

            figure {
              margin-inline-start: 5px;
              margin-inline-end: 25px;
            }
            .fsTrainer figure p {
              line-height: 10px;
              font-size: 0.8rem;
            }

          }
          @media (max-width: 375px) {
            .fsTrainer h2 {
              font-size: 1.4rem;
              line-height: 20px;
            }
          }
        `}
            </style>
        </section>
    );
}
