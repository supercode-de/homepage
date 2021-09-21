import Carousel from "react-multi-carousel";
// import Beratung from "./Beratung";
import Curriculum from "./Curriculum_Popup";
import Typeform_neu_small from "./TypeForm_neu_small";

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

const SuperStipendium = (props) => {
  return (
    <div id="super-stipendium" className="lilaGitter">
      {/* <img className="bg-line" src="img/bg-line.png" alt="" /> */}
      {/* <span className="aside">ARBEITSPLATZ DER ZUKUNFT</span> */}
      <img src="/img/bgLine.png" alt="" className="bg-line" />
      <div className="grid">
        <article className="stipendium-left">
          <h1>
            Unsere Bootcamps{" "}
            <span className="super">
              <br />
              Web Develop&shy;ment!
            </span>
          </h1>
          <h4>
            In einem halben Jahr zum Web Developer - geht das überhaupt? Und ob!
            Durch unsere zertifizierte Intensiv-Weiterbildung wirst du in 5-7
            Monaten zum Web Developer Frontend oder Full Stack und steigerst
            deine Jobchancen im IT-Bereich. Ganz gleich, ob dein Studium nicht mehr zu
            dir passt, es in deinem Beruf keine Zukunft gibt oder du einfach
            etwas ganz Neues lernen willst - wir unterstützen dich! <br />
            <br />
            Von der Beratung bis zum erfolgreichen Kursabschluss stehst du mit
            deiner Motivation, deiner Geschichte und deinen Fortschritten bei
            uns im Mittelpunkt. Mit zwei Trainer*innen pro Kurs, einem
            durchdachten Lehrplan, modernster Technik und guten Job-Kontakten
            machen wir dich fit für deine Zukunkt als Web Developer. No Money?
            No Problem! Unsere Kurse können durch die Chancen eG oder einen{" "}
            <span>Bildungsgutschein</span> zu 100% finanziert werden.
          </h4>
        </article>

        
        <article className="stipendium-right">
          <div className="stipendium-box1">
            <div>
              <h5>Web-Development Full-Stack</h5>
              <p>
                Umfang: 22 Wochen (5 Monate) / Vollzeit <br />
              Start: 21.06.2021 Ende: 22.11.2021
            </p>              <p>
                Unser Full-Stack-Kurs ermöglicht dir einen Deep Dive in die
                Web-Entwicklung verpackt in einem ultra praxisorientierten
                Intensiv-Kurs. Lerne das Programmieren moderner Websites & Apps
                und finde einen Job mit Zukunft.
            </p>

            </div>
            <div>
              <h5>Inhalte:</h5>
              <p>
                Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
              Javascript Frameworks und Libraries, CMS <br />
                <br />
              Back-End: Essentials, Node.js, Express.js, npm, API & Datenbanken{" "}
                <br />
                <br />
              Plus Skills: Grundlagen Projekt-Management & Präsentation, Design
              & UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.
            </p>
              <h5>Trainer*innen:</h5>
              <p>2 Trainer*innen pro Tag</p>
              <h5>Tage und Uhrzeit:</h5>
              <p>
                _Montag bis Freitag <br />
              _09:00 - 18:00 Uhr
            </p>
            </div>
          </div>
          <div className="stipendium-box2">
            <div>
              <h5>Web-Development Front-End</h5>
              <p>
                Umfang: 30 Wochen (7 Monate) / Teilzeit <br />
              Start: 24.05.2021 Ende: 23.12.2021
            </p>
              <p>
                Programmieren lernen neben dem Beruf? <br /> Kein Problem! Unser
              Front-End Kurs findet abends und online statt! In 30 Wochen lernst
              du das Programmieren moderner Websites & Apps.
            </p>

            </div>
            <div>
              <h5>Inhalte:</h5>
              <p>
                Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
              Javascript Frameworks und Libraries, CMS <br />
                <br />
              Plus Skills: Grundlagen Projekt-Management & Präsentation, Design
              & UX, Learn-To-Learn, Abschlussprojekt.
            </p>
              <h5>Trainer*innen:</h5>
              <p>2 Trainer*innen pro Tag</p>
              <h5>Tage und Uhrzeit:</h5>
              <p>
                _3 Abende und jeden 2. Samstag <br />
              _In der Woche: 18:00 - 21:00 Uhr <br />
              _Samstags: 09:00 - 18:00 Uhr
            </p>
            </div>
          </div>
        </article>
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
          itemClass="image-item"
        >
          <div className="stipendium-box-carousel">
            <div>
              <h5>Web-Development Full-Stack</h5>
              <p>
                Umfang: 22 Wochen (5 Monate) / Vollzeit <br />
              Start: 21.06.2021 Ende: 22.11.2021
            </p>
              <p>
                Unser Full-Stack-Kurs ermöglicht dir einen Deep Dive in die
                Web-Entwicklung verpackt in einem ultra praxisorientierten
                Intensiv-Kurs. Lerne das Programmieren moderner Websites & Apps
                und finde einen Job mit Zukunft.
            </p>
            </div>
            <div>
              <h5>Inhalte:</h5>
              <p>
                Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
              Javascript Frameworks und Libraries, CMS <br />
                <br />
              Back-End: Essentials, Node.js, Express.js, npm, API & Datenbanken{" "}
                <br />
                <br />
              Plus Skills: Grundlagen Projekt-Management & Präsentation, Design
              & UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.
            </p>
              <h5>Trainer*innen:</h5>
              <p>2 Trainer*innen pro Tag</p>
              <h5>Tage und Uhrzeit:</h5>
              <p>
                _Montag bis Freitag <br />
              _09:00 - 18:00 Uhr
            </p>
            </div>
          </div>
          <div className="stipendium-box-carousel">
            <div>
              <h5>Web-Development Front-End</h5>
              <p>
                Umfang: 30 Wochen (7 Monate) / Teilzeit <br />
              Start: 24.05.2021 Ende: 23.12.2021
            </p>
              <p>
                Programmieren lernen neben dem Beruf? <br /> Kein Problem! Unser
              Front-End Kurs findet abends und online statt! In 30 Wochen lernst
              du das Programmieren moderner Websites & Apps.
            </p>
            </div>
            <div>
              <h5>Inhalte:</h5>
              <p>
                Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
              Javascript Frameworks und Libraries, CMS <br />
                <br />
              Plus Skills: Grundlagen Projekt-Management & Präsentation, Design
              & UX, Learn-To-Learn, Abschlussprojekt.
            </p>
              <h5>Trainer*innen:</h5>
              <p>2 Trainer*innen pro Tag</p>
              <h5>Tage und Uhrzeit:</h5>
              <p>
                _3 Abende und jeden 2. Samstag <br />
              _In der Woche: 18:00 - 21:00 Uhr <br />
              _Samstags: 09:00 - 18:00 Uhr
            </p>
            </div>
          </div>
        </Carousel>
      </div>

      <style jsx>{`
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

        * {
          margin: 0;
          padding: 0;
        }

        #super-stipendium {
          padding: 7em 0 5em;
        }

        .bg-line {
          width: 100%;
          position: absolute;
          z-index: -1;
          top: -10%;
        }

        .grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 30px;
          padding: 0 calc(100vw / 24);
        }

        .stipendium-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        h1 {
          font-family: "Neue_Machina_Regular_400";
          font-size: 3.5em;
          color: #fff;
          line-height: 1.2em;
          margin: 0 0 5vh;
          font-weight: 300;
        }

        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }

        .square,
        .line,
        .line2,
        .circle {
          position: relative;
        }
        .square::after {
          position: absolute;
          background: url("/Vector51.svg") center/cover no-repeat;
          height: 109%;
          width: 110%;
          right: -19px;
          bottom: 0;
          content: "";
          display: block;
        }
        .line::after {
          position: absolute;
          background: url("/Vector52.svg") center/cover no-repeat;
          height: 2px;
          width: 110%;
          right: -19px;
          bottom: 0;
          content: "";
          display: block;
        }
        .line2::after {
          position: absolute;
          background: url("/Vector53.svg") center/cover no-repeat;
          height: 2px;
          width: 50%;
          right: -5px;
          bottom: -3px;
          content: "";
          display: block;
        }
        span.circle::after {
          position: absolute;
          background: url("/img/Vector64.svg") center/contain no-repeat;
          height: 300%;
          width: 105%;
          left: 0;
          bottom: -100%;
          content: "";
          display: block;
        }
        h4 {
          color: #fff;
          font-family: "Fira Sans", sans-serif;
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          line-height: 25px;
          justify-self: center;
        }

        .stipendium-right {
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }

        .stipendium-box1,
        .stipendium-box2,
        .stipendium-box-carousel {
          background: var(--super-lila);
          border: 2px solid var(--super-green);
          padding: 1em 4% 1em 2%;
        }

        .stipendium-box1 {
          height: 100%;
          width: 50%;
        }
        .stipendium-box2 {
          height: 92%;
          width: 50%;
          margin-left: -2px;
        }
        .stipendium-right a {
          color: #fff;
            margin: 2em 1em 0;
            font-family: "Fira Sans", sans-serif;
            font-size: 0.7em;
            font-weight: 600;
            line-height: 1.5em;
            text-align: center;
            letter-spacing: 3.5px;
            text-transform: uppercase;
            padding: 10px 0;
            background: transparent;
            border: 1px solid var(--super-green);
            text-decoration: none;
            color: ${props.buttonTextColor};
            justify-self: center;
            display: inline-block;
            min-width: 23em;
            text-align: center;
        }
        .stipendium-right a :hover {
          color: var(--super-lila);
          background: var(--super-green);
          cursor: pointer;
        }

        .stipendium-box-carousel {
          width: 80%;
          margin: auto;
        }

        .stipendium-right > .stipendium-box1 {
          transition: all 0.4s;
        }
        .stipendium-right > .stipendium-box2 {
          transition: transform 0.4s;
        }
        .stipendium-right > .stipendium-box1:hover {
          transform: scale(1.05);
        }
        .stipendium-right > .stipendium-box2:hover {
          transform: scale(1.07);
        }
        .stipendium-right > .stipendium-box1:hover h5:first-of-type {
          color: var(--super-green);
          font-weight: 500;
          opacity: 1;
        }
        .stipendium-right > .stipendium-box2:hover h5:first-of-type {
          color: var(--super-green);
          font-weight: 500;
          opacity: 2;
        }

        #myCarousel {
          // position: relative;
          // z-index: 30;
          display: none;
        }

        h5 {
          font-family: "Neue_Machina_Regular_400";
          color: #ffffff;
          font-size: 1.2em;
        }
        h5:nth-of-type(1) {
          margin-bottom: 14px;
        }
        p {
          // font-family: "Fira Sans", sans-serif;
          font-family: "Neue_Machina_Regular_400";
          color: #ffffff;
          font-size: 14px;
          margin-bottom: 25px;
          line-height: 20px;
          opacity: 0.8;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 468px) {

          #myCarousel {
            display: block;
          }
          .stipendium-box1,
          .stipendium-box2 {
            margin: 0;
          }

          .buttons {
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 320px) {
          h1 {
            font-size: 3em;
          }
        }
      `}</style>
    </div>
  );
};

export default SuperStipendium;