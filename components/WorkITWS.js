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

const WorkIT = (props) => {
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
              - Grundlagen zum Thema Web-Entwicklung <br />
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
          </div>
          <div className="kurs-box kurs-box2 hide">
            <h4>Try-IT-Trainingscenter</h4>
            <p>
              Umfang: 4 Wochen in Vollzeit <br />
              Start: Anfang 2021 (bald mehr Infos)
            </p>
            <p>
              In vier spannenden Praxisprojekte bekommst du kompaktes IT-Wissen
              in den Bereichen IT-Projektmanagement, Coding und Design. Du
              entscheidest, welcher Bereich dir am meisten liegt und gemeinsam
              planen wir deinen weiteren Berufsweg in der IT.
            </p>
            <h5>Inhalte:</h5>
            <p>
              - IT-Projektmanagement Basics <br />
              - Grundlagen Design & UX <br />
              - Basics Webentwicklung & Programmierung <br />
              - IT-Markt-Wissen <br />
              - Selbstreflektion und Berufsplanung <br />
            </p>
            <h5>Finanzierung:</h5>
            <p>- AVGS (vom Jobcenter/Agentur für Arbeit)</p>
            <h5>sonstiges:</h5>
            <p>
              - 2 Trainer*innen pro Workshop <br />
              - Teilnahme erfolgt online <br />- Zertifikat über deine Teilnahme
            </p>
            <div className="buttons">
              <Link href="/try-it" >
                <a>Zum Kurs</a>
              </Link>
            </div>
          </div>
          <div className="kurs-box kurs-box3 hide">
            <h4>
              1 Monat Web-Design <br /> UX & UI Workshop
            </h4>
            <h5>Weitere Informationen folgen ab Mai 2021</h5>

            {/*    <p>
              Umfang: 4 <br />
              Start: xx.xx.xxxx Ende: xx.xx.xxxx
            </p>
            <p>
              Tauche ein in die wundervolle Welt der Web-Entwicklung und mache
              bei uns dein Seepferdchen im Bereich HTML & CSS. Online, im World
              Wide Web! Live, in Farbe und immer mit zwei Trainer*innen.
            </p>
            <h5>Inhalte:</h5>
            <p>
              - Grundlagen zum Thema Web-Entwicklung <br />
              - Übersicht der gängigsten Programmiersprachen <br />- Grundlagen
              im Bereich HTML & CSS
            </p>
            <h5>Finanzierung:</h5>
            <p>- AVGS</p>
            <h5>sonstiges:</h5>
            <p>
              - 2 Trainer*innen pro Workshop <br />- Teilnahme erfolgt online
            </p> */}
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
                  Umfang: 3 Stunden / 18:00-21:00 Uhr <br />
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
                  - Grundlagen zum Thema Web-Entwicklung <br />
                  - Übersicht der gängigsten Programmiersprachen <br />-
                  Grundlagen im Bereich HTML & CSS
                </p>
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
              </div>
            </div>
            <div className="kurs-box-container">
              <div className="kurs-box kurs-box2">
                <h4>Try-IT-Trainingscenter</h4>
                <p>
                  Umfang: 4 Wochen in Vollzeit <br />
                  Start: Anfang 2021 (bald mehr Infos)
                </p>
                <p>
                  In vier spannenden Praxisprojekte bekommst du kompaktes
                  IT-Wissen in den Bereichen IT-Projektmanagement, Coding und
                  Design. Du entscheidest, welcher Bereich dir am meisten liegt
                  und gemeinsam planen wir deinen weiteren Berufsweg in der IT.
                </p>
                <h5>Inhalte:</h5>
                <p>
                  - IT-Projektmanagement Basics <br />
                  - Grundlagen Design & UX <br />
                  - Basics Webentwicklung & Programmierung <br />
                  - IT-Markt-Wissen <br />
                  - Selbstreflektion und Berufsplanung <br />
                </p>
                <h5>Finanzierung:</h5>
                <p>- AVGS (vom Jobcenter/Agentur für Arbeit)</p>
                <h5>sonstiges:</h5>
                <p>
                  - 2 Trainer*innen pro Workshop <br />
                  - Teilnahme erfolgt online <br />- Zertifikat über deine
                  Teilnahme
                </p>
              </div>
            </div>
            <div className="kurs-box-container">
              <div className="kurs-box kurs-box3">
                <h4>
                  1 Monat Web-Design <br /> UX & UI Workshop
                </h4>
                <h5>Weitere Informationen folgen ab Mai 2021</h5>
                {/* 
                <p>
                  Umfang: 4 <br />
                  Start: xx.xx.xxxx Ende: xx.xx.xxxx
                </p>
                <p>
                  Tauche ein in die wundervolle Welt der Web-Entwicklung und
                  mache bei uns dein Seepferdchen im Bereich HTML & CSS. Online,
                  im World Wide Web! Live, in Farbe und immer mit zwei
                  Trainer*innen.
                </p>
                <h5>Inhalte:</h5>
                <p>
                  - Grundlagen zum Thema Web-Entwicklung <br />
                  - Übersicht der gängigsten Programmiersprachen <br />-
                  Grundlagen im Bereich HTML & CSS
                </p>
                <h5>Finanzierung:</h5>
                <p>- AVGS</p>
                <h5>sonstiges:</h5>
                <p>
                  - 2 Trainer*innen pro Workshop <br />- Teilnahme erfolgt
                  online
                </p> */}
              </div>
            </div>
          </Carousel>
        </div>
      </article>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }

        #kurse {
          background-color: #5d3ede;
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.25) 0,
              rgba(255, 255, 255, 0.25) 1px,
              transparent 1px,
              transparent 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.25) 0,
              rgba(255, 255, 255, 0.25) 1px,
              transparent 1px,
              transparent 100%
            );
          background-position: 0 0, 0 0;
          background-size: calc(100vw / 12) calc(100vw / 12);

          padding: 7em 0 5em;
          position: relative;
          z-index: 1;
        }

        .aside {
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: left;
          color: #fff;
          font-weight: 300;
          left: 3%;
          top: 60%;
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #ffffff;
        }

        h1 {
          font-family: "Neue_Machina_Regular_400";
          font-size: 3.5em;
          color: #fff;
          line-height: 1.2em;
          margin: 0 8.5% 1em;
          font-weight: 300;
        }

        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }

        .kurse-content {
          padding: 0 10%;
        }

        .kurs-boxes {
          box-sizing: border-box;
          display: flex;
          align-items: flex-start;
          position: relative;
        }
        .kurs-box-container {
          padding: 0 15%;
        }
        .kurs-box {
          background: #5d3ede;
          border: 2px solid #30e1b9;
          padding: 1em 4% 1em 2%;
          width: 100%;
          z-index: 0;
        }
        .kurs-box2 {
          margin-top: 30px;
          margin-left: -2px;
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
          display: flex;
          justify-content: center;
          align-content: center;
        }
        a {
          margin: 2em 1em 0;
          font-family: "Fira Sans", sans-serif;
          font-size: 0.7em;
          font-weight: 600;
          line-height: 1.5em;
          text-align: center;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          padding: 10px 70px;
          background: transparent;
          border: 1px solid #3dd7ac;
          text-decoration: none;
          color: #fff;
          display: inline-block;
        }
        a:hover {
          color: #5d3ede;
          background: #3dd7ac;
        }
        h4 {
          font-family: "Neue_Machina_Regular_400";
          color: #ffffff;
          font-size: 1.6em;
          margin-bottom: 14px;
        }
        .kurs-boxes > .kurs-box:hover h4 {
          color: #30e1b9;
        }

        h5 {
          font-family: "Neue_Machina_Regular_400";
          color: #ffffff;
          font-size: 1.2em;
        }

        p {
          font-family: "Fira Sans", sans-serif;
          color: #ffffff;
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
          }
          .kurse-content {
            padding: 0 5%;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkIT;
