export default function FE_ZahlenUndFakten() {
  return (
    <section className='zahlenUndFakten whiteGreenDots'>
      <h2 className='zahlenUndFakten_Header'>
        Zahlen & <br /> <span className='circle'>Fakten</span>
      </h2>
      <article className='absolvent_feedback'>
        <span className='bling'></span>
        <div className='absolvent_1'>
          <figure>
            <img src='/img/absolvent/Emilija Sekulic.png' alt='' />

            <figcaption>
              “An alle Karrierewechsler*innen da draußen: Fangt einfach an.
              Schreibt die ersten Zeilen in HTML, denn “Hallo Welt” könnte der
              Beginn von etwas Großem sein!”
            </figcaption>
            <h3> Emilija Sekulic</h3>
            <p>
              Jetzt Webentwicklerin
              <br /> bei Smartin Advertising
            </p>
          </figure>
        </div>
        <div className='absolvent_2'>
          <figure>
            <img src='/img/absolvent/uu.png' alt='' />

            <figcaption>
              “Das Bootcamp bei SuperCode hat mir eine neue Perspektive geboten.
              Bereits vor Ende des Kurses hatte ich schon zwei Jobangebote und
              das, obwohl ich Quereinsteigerin bin!”
            </figcaption>
            <h3> Denise Brachwitz- Linden</h3>
            <p>
              Jetzt Webentwicklerin <br /> bei 9Elements
            </p>
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
            <span>Vorerfahrung?</span>
          </h2>
          <p>
            Von A wie Altenpflege bis Z wie Zoolog*in sind bei unseren
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
            <span>
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
            Sie arbeiten als Junior Webentwickler*innen, als Web-Designer*innen,
            IT-Trainer*innen oder in den IT-Bereichen Projektmanagement und
            Beratung. Unsere Netzwerke und Branchenkontakte helfen dir dabei.
          </p>
        </div>
      </article>

      <style jsx>{`
        .zahlenUndFakten {
          margin: 0 0 0 0;
          padding-top: 40px;
        }
        .zahlenUndFakten_Header {
          font-size: 4rem;
          margin-top: 0;
        }
        .zahlenUndFakten > h2 {
          padding-left: 6%;
          color: var(--super-lila);
        }
        .zahlenUndFaktenHeader {
          font-size: 3rem;
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
        .bling,
        .bling2 {
          position: relative;
        }
        h2 span.circle::after {
          position: absolute;
          background: url('/img/Vector64.svg') center/contain no-repeat;
          height: 145%;
          width: 100%;
          right: 42%;
          bottom: -30%;
          content: '';
          display: block;
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
          width: 70%;
          margin: auto;
          padding-bottom: 215px;
        }
        .absolvent_feedback img {
          width: 100%;
          height: auto;
        }
        .absolvent_feedback figure {
        }
        .absolvent_2,
        .absolvent_1 {
          width: 50%;
        }
        figure figcaption {
          padding-top: 35px;
          padding-bottom: 35px;
        }
        figure figcaption,
        figure p {
          color: var(--super-lila);
          line-height: 1rem;
          font-size: 1.16rem;
          margin-top: 0;
        }
        figure h3 {
          color: var(--super-green);
          margin-bottom: 0;
        }

        .zahlenUndFakten-infos {
          display: flex;
          margin-bottom: 100px;
        }
        .zahlenUndFakten-infos div {
          width: 47%;
        }
        .vorerfahrung-container {
          padding: 0 2rem 0 5.5rem;
        }
        .vorerfahrung-container p {
          font-size: 1.1rem;
          line-height: 18px;
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
        }
        .vorerfahrung-container h2 {
          margin: 50px 0 10px 0;
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
        .vermittlung-newJob p {
          font-size: 1.1rem;
          line-height: 18px;
        }
        .vermittlung-newJob h2 {
          margin-bottom: 10px;
          margin-top: 0px;
        }
        .zahlenUndFakten-infos h2,
        .vermittlung-newJob h2 {
          line-height: 2.5rem;
          font-size: 3rem;
          color: var(--super-lila);
        }
        .vermittlung-newJob h2 span {
          display: inline;
        }
        .vermittlung-newJob p {
          color: var(--super-lila);
          width: 100%;
        }
        //==============

        @media (max-width: 768px) {
          .bling,
          .bling2 {
            display: none;
          }
          .zahlenUndFakten .zahlenUndFakten_Header {
            font-size: 2rem;
          }
          .zahlenUndFakten-infos h2 {
            font-size: 2rem;
          }
          .vermittlung-newJob h2 {
            font-size: 2rem;
          }
          .zahlenUndFakten-infos,
          .vermittlung {
            display: block;
          }
          .vorerfahrung-container {
            padding: 0;
          }
          .vermittlung {
            display: block;
            padding: 0;
          }
          .vermittlung p {
          }
          .absolvent_feedback figcaption {
            font-size: 0.7rem;
          }
          .absolvent_2 p,
          .absolvent_1 p {
            font-size: 0.8rem;
            line-height: 18px;
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

        //=============

        @media (max-width: 550px) {
          .zahlenUndFakten_Header {
            font-size: 1.8rem;
            // padding-top: 50px;
          }
          .absolvent_2 figcaption {
            padding-bottom: 19px;
          }
        }

        @media (max-width: 468px) {
          .zahlenUndFakten-infos h2 {
            font-size: 2rem;
          }
          .absolvent_2 figcaption {
            padding-bottom: 22px;
          }
          .vermittlung-newJob h2 {
            font-size: 2rem;
          }
          .zahlenUndFakten-infos,
          .vermittlung {
            display: block;
          }
          .vorerfahrung-container {
            padding: 0;
          }
          .vermittlung {
            display: block;
            padding: 0;
          }
          .vermittlung p {
          }
          .absolvent_feedback figcaption {
            font-size: 0.7rem;
          }
          .absolvent_2 p,
          .absolvent_1 p {
            font-size: 0.8rem;
            line-height: 18px;
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
          @media (max-width: 468px) {
          }
        }
      `}</style>
    </section>
  );
}
