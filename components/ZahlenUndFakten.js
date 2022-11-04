export default function ZahlenUndFakten(props) {
  const {alumniName, alumniAG, alumniZitat, alumniImg} = props
  return (
    <section className='zahlenUndFakten'>
      <h2 className='zahlenUndFakten_Header'>
        Zahlen & <br /> <span className='circle'>Fakten</span>
      </h2>
      <article className='absolvent_feedback'>
        <span className='bling'></span>
        <div className='absolvent_1'>
          <figure>
            <img src='/img/alumni/Daniel-Rauh.jpg' alt='' />

            <figcaption>
              “Der Kurs bei SuperCode hat sich absolut gelohnt. Nun habe ich eine neue Job-Perspektive für die Zukunft und auch viele neue Kontakte und Freunde gewonnen.”
            </figcaption>
            <h3>Daniel Rauh</h3>
            <p>
              Jetzt Webentwickler
            </p>
            <p>LIKWIDCARE</p>
          </figure>
        </div>
        <div className='absolvent_2'>
          <figure>
            <img src={alumniImg} alt='' />

            <figcaption>
              {alumniZitat}
            </figcaption>
            <h3>{alumniName}</h3>
            <p>
              Jetzt Webentwicklerin bei
            </p>
            <p>{alumniAG}</p>
          </figure>
        </div>
        <span className='bling2'></span>
      </article>

      <article className='zahlenUndFakten-infos'>
        <div>
          <img src='/img/_DSC2776_LowRes.png' alt='' />
        </div>
        <div className='vorerfahrung-container'>
          <h2>
            Brauche ich <br />
            <span className='stroke'>Vorerfahrung?</span>
          </h2>
          <p>
            Von A wie Altenpflege bis Z wie Zoolog:in sind bei unseren
            Teilnehmenden alle beruflichen Hintergründe dabei und wir sind
            großer Fan eurer verschiedener Lebens- und Berufswege.
          </p>
          <p>
            Es ist also keine Vorerfahrung nötig. Eine Gemeinsamkeit, die ihr
            mitbringen müsst, gibt es jedoch: Die richtige Motivation und
            Leidenschaft!
          </p>
        </div>
      </article>
      <article className='vermittlung'>
        <div>
          <img src='/img/_DSC4066_LowRes.png' alt='' />
        </div>
        <div className='vermittlung-newJob'>
          <h2>
            <span className='stroke'>
              Vermittlung
              <br />
            </span>
            Start a new job!
          </h2>
          <p>
            Über 70% unserer Alumnis haben spätestens ein Jahr nach dem Bootcamp
            ihren Wunschjob.
          </p>
          <p>
            Sie arbeiten als Junior Webentwickler:innen, als Web-Designer:innen,
            IT-Trainer:innen oder in den IT-Bereichen Projektmanagement und
            Beratung.
          </p>
        </div>
      </article>
      {window.screen.width <= 768 ? (
        <article className='vermittlung'>
          <div className='vermittlung-newJob'>
            <h2>
              <span className='stroke'>
                Zufriedenheit
                <br />
              </span>
              Rate me
            </h2>

            <p>
              Während und nach jedem Kurs messen wir anonym die Zufriedenheit
              unserer Teilnehmenden. Es gibt ein durchweg positives Feedback zum
              Ablauf, Inhalt, Lehrpersonal, Kursraum und den online Tools.
            </p>
            <p>
              Außerdem gaben rund 90% aller Teilnehmenden an, dass sie mit dem
              Kurs zufrieden oder sehr zufrieden sind.
            </p>
          </div>
          <div className='vermittlung-newJob'>
            <h2>
              <span className='stroke'>
                Bin ich zu alt
                <br />
              </span>
              oder zu jung?
            </h2>

            <p>
              Dein Alter ist für’s Coden vollkommen egal, hauptsache du bist
              motiviert Neues zu lernen und bereit dich in komplexe Themen
              einzuarbeiten.
            </p>
            <p>
              Der Altersdurchschnitt unser bisherigen Kurse liegt bei 33 Jahren
              mit einer großen Spanne von 21 - 56.
            </p>
          </div>
        </article>
      ) : null}

      <style jsx>{`
        .zahlenUndFakten {
          padding-top: 40px;
        }

        .zahlenUndFakten > h2 {
          padding-left: 6%;
          color: var(--super-lila);
        }
        .zahlenUndFakten_Header {
          margin-top: 55px;
          margin-bottom: 125px;
        }
        .zahlenUndFakten h2 span {
          display: block;
          color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--super-lila);
        }

        .bling {
          top: 50px;
        }
        .circle,
        .circle2,
        .bling,
        .bling2 {
          position: relative;
        }
        h2 span.circle::after {
          position: absolute;
          background: url('/img/Vector64.svg') center/contain no-repeat;
          height: 145%;
          width: 100%;
          right: 38%;
          bottom: -24%;
          content: '';
          display: block;
          transform: scale(1.17, 0.95);
        }
        h2 span.circle2::after {
          position: absolute;
          background: url('/img/Vector64.svg') center/contain no-repeat;
          height: 145%;
          width: 100%;
          right: 6%;
          bottom: -24%;
          content: '';
          display: block;
          transform: scale(1.17, 0.95);
        }

        span.bling::before {
          position: absolute;
          content: '';
          display: block;
          height: 3.5rem;
          width: 3rem;
          top: 57%;
        }
        span.bling2::after {
          position: absolute;
          content: '';
          display: block;
          height: 3.5rem;
          width: 3rem;
          top: -0.5rem;
          left: -2rem;
        }
        span.bling::before {
          background: url('/img/bling.png') center/contain no-repeat;
          left: -1rem;
        }
        span.bling2::after {
          background: url('/img/bling2.png') center/contain no-repeat;
          right: -2rem;
        }

        .absolvent_feedback {
          display: flex;
          gap: 50px;
          width: 70%;
          margin: auto;
          padding-bottom: 215px;
        }
        .absolvent_feedback img {
          width: 100%;
        }

        .absolvent_2,
        .absolvent_1 {
          width: 50%;
        }
        figure figcaption {
          padding: 3.5% 0;
          font-size: clamp(1rem, 0.8875rem + 0.5625vw, 1.5625rem);
        }
        figure figcaption,
        figure p {
          color: var(--super-lila);
        }
        figure h3 {
          color: var(--super-green);
          font-size: 1.875rem;
        }

        .zahlenUndFakten-infos {
          display: flex;
          margin-bottom: 100px;
        }
        .zahlenUndFakten-infos div {
          width: 47%;
        }
        .zahlenUndFakten-infos p {
          color: var(--super-lila);
          width: 100%;
        }
        .zahlenUndFakten-infos img,
        .vermittlung img {
          width: 100%;
        }
        .vorerfahrung-container {
          padding: 0 5% 0 5.5rem;
        }
        .vorerfahrung-container p:nth-of-type(1),
        .vermittlung-newJob p:nth-of-type(1){
          margin-bottom: 20px;
        }

        .vorerfahrung-container h2 {
          margin: 100px 0 10px 0;
          font-family: 'Neue_Machina_Ultrabold';
        }
        .vermittlung {
          display: flex;
          padding: 30px 3rem 200px 3rem;
        }
        .vermittlung div {
          width: 49%;
        }
        .vermittlung div:first-of-type {
          padding: 0 7%;
          position: relative;
          left: 8%;
        }
        .vermittlung-newJob {
          padding: 0 1rem 0 4rem;
          width: 47%;
        }

        .vermittlung-newJob h2 {
          font-family: 'Neue_Machina_Ultrabold';
          margin-bottom: 10px;
          margin-top: 0px;
        }
        .zahlenUndFakten-infos h2,
        .vermittlung-newJob h2 {
          color: var(--super-lila);
        }

        .vermittlung-newJob h2 {
          margin-top: 30px;
        }
        .vermittlung-newJob h2 span {
          display: inline;
        }
        .vermittlung-newJob p {
          color: var(--super-lila);
          width: 100%;
        }

        @media (max-width: 2560px) {
          h2 .circle::after {
            position: absolute;
            background: url('/img/Vector64.svg') center/contain no-repeat;
            height: 145%;
            width: 100%;
            right: 40%;
            bottom: -24%;
            content: '';
            display: block;
            transform: scale(1.17, 0.95);
          }
        }
        @media (max-width: 768px) {
          .bling,
          .bling2 {
            display: none;
          }
          .zahlenUndFakten_Header {
            margin: 25px 0 86px 0;
          }
          h2 span.circle::after {
            right: 34%
          }
          .zahlenUndFakten-infos {
            margin-bottom: 0px;
          }
          .zahlenUndFakten-infos,
          .vermittlung {
            display: flex;
            flex-direction:column;
          }
          .vorerfahrung-container {
            padding: 0;
          }
          .vermittlung {
            display: flex;
            padding: 0;
            margin-bottom: 50px;
          }
          .vorerfahrung-container h2 {
            margin: 20px 0 10px 0;
            font-family: 'Neue_Machina_Ultrabold';
          }
          .absolvent_2 p,
          .absolvent_1 p {
            font-size: 1rem;
            line-height: 18px;
          }
          .absolvent_1 figure h3,
          .absolvent_2 figure h3 {
            font-size: 1.5rem;
          }
          .absolvent_feedback {
            width: 95%;
            justify-content: space-between;
            padding-bottom: 50px;
          }
          .zahlenUndFakten-infos div,
          .vermittlung div {
            width: 90%;
            margin: auto;
          }
          .vermittlung div:first-of-type {
            padding: 0;
            position: static;
            order:2;
          }
          .vermittlung-newJob {
            padding: 0;
            order.1;
          }
        }

        //=============

        @media (max-width: 550px) {
          .zahlenUndFakten .zahlenUndFakten_Header {
            margin-bottom: 20px;
          }
          .absolvent_2 figcaption {
            padding-bottom: 19px;
          }
        }

        @media (max-width: 468px) {
          .zahlenUndFakten {
            margin: 0 0 0 0;
            padding-top: 10px;
          }
          .zahlenUndFakten .zahlenUndFakten_Header {
            margin-bottom: 20px;
          }
          .absolvent_2 figcaption {
            padding-bottom: 22px;
          }

          .zahlenUndFakten-infos,
          .vermittlung {
            display: flex;
          }
          .vorerfahrung-container,
          .vermittlung {
            padding: 0;
          }
          figure {
            margin-inline-start: 5px;
            margin-inline-end: 5px;
          }
          .absolvent_feedback {
            width: 95%;
            justify-content: space-between;
            padding-bottom: 50px;
          }
          .zahlenUndFakten-infos div,
          .vermittlung div {
            width: 90%;
            margin: auto;
          }
          .vermittlung div:first-of-type {
            padding: 0;
            position: static;
          }
          .vermittlung-newJob {
            padding: 0;
          }

        }
        @media (max-width: 425px) {
          .absolvent_feedback {
            display: block;
          }
          .absolvent_1,
          .absolvent_2 {
            width: 100%;
          }
          .absolvent_2 {
            margin-top: 50px;
          }
        }
        @media (max-width: 420px) {

          figure h3{
          font-size:1rem;
          margin-bottom:3px;
          }
        }
        @media (max-width: 375px) {
          .zahlenUndFakten h2 span {
            display: block;
            color: transparent;
            -webkit-text-stroke-width: 0.5px;
            -webkit-text-stroke-color: var(--super-lila);
          }
        }
      `}</style>
    </section>
  );
}
