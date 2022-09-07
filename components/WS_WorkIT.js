import Link from "next/link";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 479 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 479, min: 0 },
    items: 1,
  },
};

const WS_WorkIT = () => {
  return (
    <div id="kurse">
      <span className="aside">Unsere Kurse</span>
      <article className="kurs-boxes-headline">
        <h1>
          <span className="super">Work IT,</span> Baby!
        </h1>
      </article>
      <article className="kurse-content">
        <div className="kurs-boxes">
          <div className="kurs-box kurs-box1 hide">
            <h4>Kostenloser HTML & CSS Workshop - Online</h4>
            <p>
              Umfang: 3 Stunden / 18:00-21:00 Uhr <br />
              Start: immer dienstags - mit Anmeldung
            </p>
            <p>
              Tauche ein in die wundervolle Welt der Web-Entwicklung und mache
              bei uns dein Seepferdchen im Bereich HTML & CSS. Online, im World
              Wide Web! Live, in Farbe und immer mit zwei Trainer*innen.
            </p>
            <h5>Inhalte:</h5>
            <p>
              - Grundlagen zum Thema Web - Entwicklung <br />
              - Übersicht der gängigsten Programmiersprachen <br />- Grundlagen
              im Bereich HTML & CSS
            </p>
            <h5>Finanzierung:</h5>
            <p>
              - kostenlos!
              <br />
              <br />
              Allerdings nehmen wir eine kleine Reservierungsgebühr, die wir am
              Ende des Workshops rückerstatten.
            </p>
            <h5>sonstiges:</h5>
            <p>
              - 2 Trainer*innen pro Workshop <br />- Teilnahme erfolgt online
            </p>
            <div className="buttons">
              <Link
                className="zumKurs"
                href="https://www.eventbrite.de/o/supercode-20262218583"
                target="_blank"
              >
                <a
                  href="https://www.eventbrite.de/o/supercode-20262218583"
                  target="_blank"
                >
                  Zum Kurs
                </a>
              </Link>
            </div>
          </div>
          <div className="kurs-box kurs-box3 hide">
            <h4>
              Kostenloser UX & UI-Design
              <br /> Workshop - Online
            </h4>
            <p>
              Umfang: 2 Stunden / 18:00 - 20:00 Uhr <br />
              Start: immer donnerstags - mit Anmeldung
            </p>
            <p>
              Tauche ein in die wundervolle Welt der Web-Designs und mache bei
              uns dein Seepferdchen im Bereich UX & UI-Design, im World Wide
              Web!
            </p>
            <h5>Inhalte:</h5>
            <p>
              - Grundlagen zum Thema UX /UI-Design
              <br />
              - Übersicht der gängigsten Prototyping Tools <br />- Grundlagen im
              Bereich Prototyping
            </p>
            <h5>Finanzierung:</h5>
            <p>
              - kostenlos!
              <br />
              <br />
              Allerdings nehmen wir eine kleine Reservierungsgebühr, die wir am
              Ende des Workshops rückerstatten.
            </p>
            <h5>sonstiges:</h5>
            <p>
              - Ein*e Trainer*in pro Workshop <br />- Teilnahme erfolgt online
            </p>
            <div className="buttons">
              <Link
                className="zumKurs"
                href="https://www.eventbrite.de/o/supercode-20262218583"
                target="_blank"
              >
                <a
                  href="https://www.eventbrite.de/o/supercode-20262218583"
                  target="_blank"
                >
                  Zum Kurs
                </a>
              </Link>

            </div>
          </div>
        </div>

        <div id="myCarousel">
          <Carousel
            responsive={responsive}
            ssr
            showDots={false}
            slidesToSlide={1}
            infinite
            containerClass="container-with-dots"
            deviceType={""}
            itemClass="carousel-item-padding-20-px"
          >
            <div className="kurs-box-container">
              <div className="kurs-box kurs-box1">
                <h4>Kostenloser HTML & CSS Workshop - Online</h4>
                <p>
                  Umfang: 3 Stunden / 18:00 - 21:00 Uhr <br />
                  Start: immer dienstags - mit Anmeldung
                </p>
                <p>
                  Tauche ein in die wundervolle Welt der Web-Entwicklung und
                  mache bei uns dein Seepferdchen im Bereich HTML & CSS. Online,
                  im World Wide Web! Live, in Farbe und immer mit zwei
                  Trainer*innen.
                </p>
                <h5>Inhalte:</h5>
                <p>
                  - Grundlagen zum Thema Web-Entwicklung
                </p>
                <p>- Übersicht der gängigsten Programmiersprachen </p>
                <p>-
                  Grundlagen im Bereich HTML & CSS</p>
                <h5>Finanzierung:</h5>
                <p>
                  - kostenlos!
                  <br />
                  <br />
                  Allerdings nehmen wir eine kleine Reservierungsgebühr, die wir
                  am Ende des Workshops rückerstatten.
                </p>
                <h5>sonstiges:</h5>
                <p>
                  - 2 Trainer*innen pro Workshop <br />- Teilnahme erfolgt
                  online
                </p>
                <div className="buttons">
                  <Link href="https://www.eventbrite.de/o/supercode-20262218583">
                    <a
                      href="https://www.eventbrite.de/o/supercode-20262218583"
                      target="_blank"
                    >
                      Zum Kurs
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="kurs-box-container">
              <div className="kurs-box kurs-box2">
                <h4>
                  {" "}
                  Kostenloser UX & UI-Design
                  <br /> Workshop - Online
                </h4>
                <p>
                  Umfang: 2 Stunden / 18:00 - 20:00 Uhr <br />
                  Start: immer donnerstags - mit Anmeldung
                </p>
                <p>
                  Tauche ein in die wundervolle Welt der Web-Designs und mache
                  bei uns dein Seepferdchen im Bereich UX & UI-Design, im World
                  Wide Web! Live, in Farbe und immer mit zwei Trainer*innen.
                </p>
                <h5>Inhalte:</h5>
                <p>
                  - Grundlagen zum Thema UX /UI-Design
                  <br />
                  - Übersicht der gängigsten Prototyping Tools <br />-
                  Grundlagen im Bereich Prototyping
                </p>
                <h5>Finanzierung:</h5>
                <p>
                  {" "}
                  - kostenlos!
                  <br />
                  <br />
                  Allerdings nehmen wir eine kleine Reservierungsgebühr, die wir
                  am Ende des Workshops rückerstatten.
                </p>
                <h5>sonstiges:</h5>
                <p>
                  - Ein*e Trainer*in pro Workshop <br />- Teilnahme erfolgt
                  online
                </p>
                <div className="buttons">
                  <Link href="https://www.eventbrite.de/o/supercode-20262218583">
                    <a
                      href="https://www.eventbrite.de/o/supercode-20262218583"
                      target="_blank"
                    >
                      Zum Kurs
                    </a>
                  </Link>

                </div>
              </div>
            </div>
            
          </Carousel>
        </div>
      </article>

      <style jsx>{`
        #kurse {
          padding: 7em 0 5em;
          position: relative;
          z-index: 0;
          background: var(--super-lila);
        }

        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          font-weight: 300;
          left: 3%;
          top: 60%;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--super-white);
          z-index: 0;
        }

        h1 {
          font-size: 3.5em;
          color: var(--super-white);
          line-height: 1.2em;
          margin: 0 8.5% 1em;
          font-weight: 300;
        }

        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: var(--super-white);
          font-weight: 300;
        }

        .kurse-content {
          padding: 0 10%;
        }

        .kurs-boxes {
          position: relative;
          display: flex;
          align-items: flex-start;
          margin: auto;
          z-index: 0;
        }
        .kurs-box-container {
          padding: 0 15%;
          z-index: 0;
        }
        .kurs-box {
          background: var(--super-lila);
          border: 2px solid var(--super-green);
          padding: 2em 5% 2em 2%;
          width: 100%;
          z-index: -1;
          margin: 0 35px;
          border-radius: 50px;
        }

        .kurs-box2 {

          margin-left: -2px;
          z-index: -1;
        }
        .kurs-box3 {
          margin-left: -2px;
        }
        .kurs-boxes > .kurs-box {
          transition: transform 0.4s;
        }

        .kurs-boxes > .kurs-box:hover {
          transform: scale(1.1);
          z-index: 1;
        }

        #myCarousel {
          display: none;
          position: relative;
        }
        .buttons {
          position: relative;
          display: flex;
          justify-content: space-around;
          align-content: center;
          gap: 3rem;
        }

        .buttons a {
          margin-top: 0;
        }
        a {
          margin: 2em 1em 0;
          font-size: 0.73em;
          font-weight: 600;
          line-height: 1.5em;
          text-align: center;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 14px 40px;
          background: transparent;
          border: 1px solid var(--super-green);
          text-decoration: none;
          color: var(--super-white);
          display: inline-block;
          border-radius: 5rem;
        }
        a:hover {
          color: var(--super-lila);
          background: var(--super-green);
        }
        h4 {
          color: var(--super-white);
          font-size: 1.6em;
          margin-bottom: 14px;
        }
        .kurs-boxes > .kurs-box:hover h4 {
          color: var(--super-green);
        }

        h5 {
          color: var(--super-white);
          font-size: 1.2em;
        }

        p {
          color: var(--super-white);
          font-size: 14px;
          margin-bottom: 25px;
          line-height: 20px;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .hide {
            display: none;
          }
          #myCarousel {
            display: block;
          }
          .kurs-box {
            margin: 0;
            z-inex: 1;
          }
          .kurse-content {
            padding: 0 5%;
          }
        }
      `}</style>
    </div>
  );
};

export default WS_WorkIT;
