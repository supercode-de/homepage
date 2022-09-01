import Link from 'next/link';

const BootcampFillUp = (props) => {
  return (
    <article className="bootcamp-fill-up-mainwrapper" id="nextBootcamp">
      <div className="header-info">
        <p>Termine</p>
        <h3>Unsere MicroCamps sind schnell ausgebucht!</h3>
        <p>
          Unsere Kurse sind limitiert auf bis zu acht Personen, damit ihr in der Gruppe eine tolle Lernerfahrung habt und nicht nur einer unter vielen seid. Daher sind die MicroCamps schnell ausgebucht – um mitzumachen solltest du den Internet Explorer ruhen lassen. ;)
        </p>
      </div>

      <div className="card-wrapper">
        <div className="single-card">
          <div className="left-wrapper">
            <h4>UX/UI Design Bootcamp</h4>
            {/* Ich war mir nicht sicher, wie du die Daten gespeicher hast. Daher sind das insgesamt 3x p Tags */}
            <div className="info-text">
              <p>Live Class</p>
              <p>10.10.2022 - 20.10.2022 </p>
              <p>Montag & Mittwoch 8 - 10 Uhr</p>
            </div>

            <p className="places-wr">
              <span className="circle">max. 8 Plätze</span>
            </p>
            <Link className="btn" href="/">
              Jetzt anmelden
            </Link>
          </div>
          <div className="right-wrapper">
            <img src="/img/microcamps/tn_small.png" alt="Supercode Team" />
            <h5>Steffen Klömpges</h5>
            <h6>Titel Trainer</h6>
          </div>
        </div>
        <div className="single-card">
          <div className="left-wrapper">
            <h4>UX/UI Design Bootcamp</h4>
            {/* Ich war mir nicht sicher, wie du die Daten gespeicher hast. Daher sind das insgesamt 3x p Tags */}
            <div className="info-text">
              <p>Live Class</p>
              <p>10.10.2022 - 20.10.2022 </p>
              <p>Montag & Mittwoch 8 - 10 Uhr</p>
            </div>

            <p className="places-wr">
              <span className="circle">max. 8 Plätze</span>
            </p>
            <Link className="btn" href="/">
              Jetzt anmelden
            </Link>
          </div>
          <div className="right-wrapper">
            <img src="/img/microcamps/tn_small.png" alt="Supercode Team" />
            <h5>Steffen Klömpges</h5>
            <h6>Titel Trainer</h6>
          </div>
        </div>
        <div className="single-card">
          <div className="left-wrapper">
            <h4>UX/UI Design Bootcamp</h4>
            {/* Ich war mir nicht sicher, wie du die Daten gespeicher hast. Daher sind das insgesamt 3x p Tags */}
            <div className="info-text">
              <p>Live Class</p>
              <p>10.10.2022 - 20.10.2022 </p>
              <p>Montag & Mittwoch 8 - 10 Uhr</p>
            </div>

            <p className="places-wr">
              <span className="circle">max. 8 Plätze</span>
            </p>
            <Link className="btn" href="/">
              Jetzt anmelden
            </Link>
          </div>
          <div className="right-wrapper">
            <img src="/img/microcamps/tn_small.png" alt="Supercode Team" />
            <h5>Steffen Kl</h5>
            <h6>Titel Trainer</h6>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bootcamp-fill-up-mainwrapper {
          width: min(95%, 1920px);
          padding: 10% 5%;
          margin-inline: auto;
        }

        .header-info {
          margin-bottom: 4.37rem 9.37rem;
        }

        .header-info h3 {
          color: var(--clr-super-lila);
          max-width: 38%;
          margin-bottom: 15px;
        }

        .header-info p {
          max-width: 60%;
        }

        .card-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fill, 38rem);
          grid-gap: 25px;
          margin-top: 50px;
          justify-content: center;
        }

        .single-card {
          display: inline-flex;
          align-items: center;
          background-color: var(--clr-super-lila);
          border-radius: 25px;
          color: var(--clr-super-white);
          padding: 3.125rem;
          gap: 50px;
        }


        .left-wrapper .info-text{
          margin: 0 0 0.625rem 0;
        }

        .left-wrapper .info-text h4 {
          margin: 0 0 0.625rem 0;
          font-size: var(--fs-300);
        }

        .left-wrapper .info-text p {
          font-size: var(--fs-200);
        }

        .left-wrapper .info-text a {
          font-size: var(--fs-300);
          background-color: var(--clr-super-green);
          color: var(--clr-super-lila);
          margin-top: 5%;
        }

        .left-wrapper .places-wr {
          margin: 10% 0;
          font-size: var(--fs-300);
        }

        .left-wrapper .places-wr .circle {
          background: url("/img/microcamps/world_circle.svg") center center/contain no-repeat;
          padding: var(--fs-300);
        }

        .right-wrapper img {
          height: 120px;
          width: 120px;
          object-fit: cover;
          border-radius: 100%;
          margin-bottom: 35px;
        }

        .right-wrapper h5,
        .right-wrapper h6 {
          font-size: var(--fs-300);
        }

        .right-wrapper h6  {
          font-weight: 400;
          margin: 0;
        }
      `}</style>
    </article>
  );
};

export default BootcampFillUp;
