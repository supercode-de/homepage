export default function FE_ZahlenUndFakten() {
  return (
    <section className='zahlenUndFakten whiteGreenDots'>
      <h2>
        Zahlen & <br /> <span className='circle'>Fakten</span>
      </h2>
      <article className='absolvent_feedback'>
        <div className='absolvent_1'>
          <span className='bling'></span>
          <figure>
            <img src='/img/absolvent/Jascha Hell.png' alt='' />

            <figcaption className='bold'>
              "Der Kurs bei SuperCode hat sich absolut gelohnt. Nun habe ich
              eine neue Job-Perspektive für die Zukunft und auch viele neue
              Kontakte und Freunde gewonnen."
            </figcaption>
            <h3> Jascha Hell</h3>
            <p>
              Jetzt Digital Innovation Consultant <br /> bei Esentri AG
            </p>
          </figure>
        </div>
        <div className='absolvent_2'>
          <figure>
            <img src='/img/absolvent/Rihab Al-Yasari.png' alt='' />{' '}
            <figcaption>
              “Am Bootcamp teilzunehmen war die beste Entscheidung meines
              Lebens. Als Webentwicklerin möchte ich der Welt zeigen, was ich
              kann!”
            </figcaption>
            <h3> Rihab Al-Yasari</h3>
            <p>
              Jetzt Webentwicklerin <br /> bei der Provinzial{' '}
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
            Beratung. Das intergrierte Bewerbungscoaching hilft dir dabei.
          </p>
        </div>
      </article>

      <style jsx>{`
        .zahlenUndFakten {
          margin: 7% 0 0 0;
        }
        .zahlenUndFakten > h2 {
          padding-left: 6%;
          color: var(--super-lila);
        }

        .zahlenUndFakten h2 span {
          display: block;
          color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--super-lila);
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
          top: 520px;
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
          line-height: 1.5rem;
          font-size: 1.16rem;
          margin-top: 0;
        }
        figure h3 {
          color: var(--super-green);
          margin-bottom: 0;
        }

        .zahlenUndFakten-infos {
          display: flex;
        }
        .zahlenUndFakten-infos div {
          width: 47%;
        }
        .vorerfahrung-container {
          padding: 0 5.5rem;
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
          margin: 100px 0 10px 0;
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
          left: 9%;
        }
        .vermittlung-newJob {
          padding: 0 1rem 0 4rem;
          width: 47%;
        }
        .vermittlung-newJob h2 {
          margin-bottom: 10px;
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
      `}</style>
    </section>
  );
}
