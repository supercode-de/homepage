import { Link } from "react-router-dom";

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
            <Link className="btn" to="/">
              Jetzt anmelden
            </Link>
          </div>
          <div className="right-wrapper">
            <img src="/img/tn_small.png" alt="Supercode Team" />
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
            <Link className="btn" to="/">
              Jetzt anmelden
            </Link>
          </div>
          <div className="right-wrapper">
            <img src="/img/tn_small.png" alt="Supercode Team" />
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
            <Link className="btn" to="/">
              Jetzt anmelden
            </Link>
          </div>
          <div className="right-wrapper">
            <img src="/img/tn_small.png" alt="Supercode Team" />
            <h5>Steffen Kl</h5>
            <h6>Titel Trainer</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BootcampFillUp;
