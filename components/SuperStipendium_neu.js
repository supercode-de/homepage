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

const SuperStipendium = (props) => {
  return (
    <div id="super-stipendium">
      {/* <img className="bg-line" src="img/bg-line.png" alt="" /> */}
      <span className="aside">ARBEITSPLATZ DER ZUKUNFT</span>
      <img src="/img/bgLine.png" alt="" className="bg-line" />
      <article className="stipendium-left">
        <h1>
          UNSERE BOOTCAMPS{" "}
          <span className="super">
            <br />
            WEB DEVELOPMENT!
          </span>
        </h1>
        <h4>
          In einem halben Jahr zum Web Developer - geht das überhaupt? Und ob!
          Durch unsere zertifizierte Intensiv-Weiterbildung wirst du in 5-7
          Monaten zum Web Developer Frontend oder Full Stack und steigerst deine
          Jobchancen im IT-Bereich. Egal, ob dein Studium nicht mehr zu dir
          passt, es in deinem Beruf keine Zukunft gibt oder du einfach etwas
          ganz Neues lernen willst - Wir unterstützen dich! <br />
          <br />
          Von der Beratung bis zum erfolgreichen Kursabschluss stehst du mit
          deiner Motivation, deiner Geschichte und deinen Fortschritten bei uns
          im Mittelpunkt. Mit zwei Trainer*innen pro Kurs, einem durchdachten
          Lehrplan, modernster Technik und guten Job-Kontakten machen wir dich
          fit für deine Zukunkt als Web Developer. No Money? No Problem! Unsere
          Kurse können durch die Chancen eG oder einen{" "}
          <span>Bildungsgutschein</span> zu 100% finanziert werden.
        </h4>
      </article>
      <article className="stipendium-right">
        <div className="stipendium-box1 hide">
          <h5>Web-Developer Full-Stack</h5>
          <p>
            Umfang: 22 Wochen (5 Monate) / Vollzeit <br />
            Start: 14.12.2020 Ende: 24.05.2021
          </p>
          <p>
            Unser Full-Stack-Kurs ermöglicht dir einen Deep Dive in die
            Web-Entwicklung verpackt in einem ultra praxisorientierten
            Intensiv-Kurs. Lerne das Programmieren moderner Websites & Apps und
            finde einen Job mit Zukunft.
          </p>
          <h5>Inhalte:</h5>
          <p>
            Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
            Javascript Frameworks und Libraries, CMS <br />
            <br />
            Back-End: Essentials, Node.js, Express.js, npm, API & Datenbanken{" "}
            <br />
            <br />
            Plus Skills: Grundlagen Projekt-Management & Präsentation, Design &
            UX, Learn-To-Learn, Bewerbungscoaching, Abschlussprojekt.
          </p>
          <h5>Trainer*innen:</h5>
          <p>2 Trainer*innen pro Tag</p>
          <h5>Tage und Uhrzeit:</h5>
          <p>
            _Montag bis Freitag <br />
            _09:00 - 18:00 Uhr
          </p>
        </div>
        <div className="stipendium-box2 hide">
          <h5>Web-Developer Front-End</h5>
          <p>
            Umfang: 30 Wochen (7 Monate) / Teilzeit <br />
            Start: 14.12.2020 Ende: 24.05.2021
          </p>
          <p>
            Programmieren lernen neben dem Beruf? <br /> Kein Problem! Unser
            Front-End Kurs findet abends und online statt! In 30 Wochen lernst
            du das Programmieren moderner Websites & Apps.
          </p>
          <h5>Inhalte:</h5>
          <p>
            Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
            Javascript Frameworks und Libraries, CMS <br />
            <br />
            Plus Skills: Grundlagen Projekt-Management & Präsentation, Design &
            UX, Learn-To-Learn, Abschlussprojekt.
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
            <div className="stipendium-box1">
              <h5>Web-Developer Full-Stack</h5>
              <p>
                Umfang: 22 Wochen (5 Monate) / Vollzeit <br />
                Start: 14.12.2020 Ende: 24.05.2021
              </p>
              <p>
                Unser Full-Stack-Kurs ermöglicht dir einen Deep Dive in die
                Web-Entwicklung verpackt in einem ultra praxisorientierten
                Intensiv-Kurs. Lerne das Programmieren moderner Websites & Apps
                und finde einen Job mit Zukunft.
              </p>
              <h5>Inhalte:</h5>
              <p>
                Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
                Javascript Frameworks und Libraries, CMS <br />
                <br />
                Back-End: Essentials, Node.js, Express.js, npm, API &
                Datenbanken <br />
                <br />
                Plus Skills: Grundlagen Projekt-Management & Präsentation,
                Design & UX, Learn-To-Learn, Bewerbungscoaching,
                Abschlussprojekt.
              </p>
              <h5>Trainer*innen:</h5>
              <p>2 Trainer*innen pro Tag</p>
              <h5>Tage und Uhrzeit:</h5>
              <p>
                _Montag bis Freitag <br />
                _09:00 - 18:00 Uhr
              </p>
            </div>
            <div className="stipendium-box2">
              <h5>Web-Developer Front-End</h5>
              <p>
                Umfang: 30 Wochen (7 Monate) / Teilzeit <br />
                Start: 24.05.2021 Ende: 23.12.2021
              </p>
              <p>
                Programmieren lernen neben dem Beruf? <br /> Kein Problem! Unser
                Front-End Kurs findet abends und online statt! In 30 Wochen
                lernst du das Programmieren moderner Websites & Apps.
              </p>
              <h5>Inhalte:</h5>
              <p>
                Front-End: Essentials, HTML, CSS, GIT, Terminal, Javascript,
                Javascript Frameworks und Libraries, CMS <br />
                <br />
                Plus Skills: Grundlagen Projekt-Management & Präsentation,
                Design & UX, Learn-To-Learn, Abschlussprojekt.
              </p>
              <h5>Trainer*innen:</h5>
              <p>2 Trainer*innen pro Tag</p>
              <h6>Tage und Uhrzeit:</h6>
              <p>
                _3 Abende und jeden 2. Samstag <br />
                _In der Woche: 18:00 - 21:00 Uhr <br />
                _Samstags: 09:00 - 18:00 Uhr
              </p>
            </div>
          </Carousel>
        </div>
      </article>

      <style jsx>{`
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
          color: #30e1b9;
          font-weight: 500;
          opacity: 1;
        }
        .stipendium-right > .stipendium-box2:hover h5:first-of-type {
          color: #30e1b9;
          font-weight: 500;
          opacity: 2;
        }
        * {
          margin: 0;
          padding: 0;
        }
        #myCarousel {
          display: none;
          position: relative;
          z-index: 30;
        }

        #super-stipendium {
          display: flex;
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

        .bg-line {
          width: 100%;
          position: absolute;
          z-index: -1;
          top: -10%;
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

        .stipendium-left {
          padding: 0 4% 0 8.5%;
          width: 45%;
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
          text-transform: uppercase;
          font-weight: 300;
        }
        .break {
          display: block;
        }
        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }
        .green-fonts {
          color: #30e1b9;
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
        .circle::after {
          position: absolute;
          background: url("/Vector54.svg") center/cover no-repeat;
          height: 100%;
          width: 110%;
          right: -14px;
          bottom: 0;
          content: "";
          display: block;
        }
        h4 {
          color: #fff;
          font-family: "Fira Sans", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 25px;
          justify-self: center;
        }
        h4:nth-last-of-type(2),
        ul li span {
          font-weight: lighter;
        }

        h4:nth-last-of-type(2) {
          margin-top: 3%;
        }

        ul li {
          list-style: none;
          color: #fff;
        }

        ul {
          margin-bottom: 3%;
        }

        .stipendium-right {
          box-sizing: border-box;
          width: 50%;
          display: flex;
          align-items: center;
          padding: 9vh 0 4vh 0;
        }
        .stipendium-box1 {
          background: #5d3ede;
          border: 2px solid #30e1b9;
          padding: 1em 4% 1em 2%;
          width: 50%;
          height: 100%;
        }
        .stipendium-box2 {
          width: 50%;
          padding: 1em 4% 1em 2%;
          background: #5d3ede;
          border: 2px solid #30e1b9;
          margin-left: -2px;
          height: 92%;
        }
        h5 {
          font-family: "Neue_Machina_Regular_400";
          color: #ffffff;
          // opacity: 0.7;
          font-size: 1.2em;
          // line-height: 18px;
        }
        h5:nth-of-type(1) {
          margin-bottom: 14px;
        }
        p {
          font-family: "Fira Sans", sans-serif;
          color: #ffffff;
          font-size: 14px;
          margin-bottom: 25px;
          line-height: 20px;
          opacity: 0.8;
        }
        h6 {
          font-family: "Neue_Machina_Regular_400";
          color: #ffffff;
          font-size: 16px;
          line-height: 18px;
          font-weight: 600;
        }
        @media (max-width: 1040px) {
          .bg-line {
            top: 4%;
          }
        }

        @media only screen and (max-width: 479px) {
          #myCarousel {
            display: block;
          }
          .hide {
            display: none;
          }
          #super-stipendium {
            display: block;
            padding-bottom: 3em;
            padding-top: 0;
          }
          .stipendium-left {
            width: 100%;
            padding: 11vh 4% 8vh 8.5%;
          }
          .stipendium-right {
            display: block;
            width: 100%;
            padding: 0 2% 0 6%;
          }
          #myCarousel .stipendium-box1 {
            width: 100%;
          }
          #myCarousel .stipendium-box2 {
            width: 100%;
            border: 2px solid #30e1b9;
          }
          .bg-line {
            display: none;
          }
          ul li {
            font-size: 14px;
          }

          h1 {
            overflow-wrap: break-word;
          }
        }
        @media (max-width: 320px) {
          #super-stipendium {
            display: block;
          }
          h1 {
            font-size: 3em;
            line-height: 36px;
          }
        }

        @media (max-width: 479px) {
          .stipendium-box1,
          .stipendium-box2 {
            margin: 0;
          }
        }

        @media only screen and (min-width: 480px) and (max-width: 767px) {
          .hide {
            display: block;
          }
          #super-stipendium {
            display: block;
          }
          .stipendium-left {
            width: 100%;
            padding-bottom: 3em;
          }
          .break {
            display: inline;
          }
          .stipendium-right {
            width: 100%;
            padding: 0 2% 0 6%;
          }
          .bg-line {
            display: none;
          }
          ul li {
            font-size: 14px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 979px) {
          #super-stipendium {
            display: block;
          }
          .bg-line {
            top: 1%;
          }
          .stipendium-left {
            width: 100%;
            padding-bottom: 3em;
          }
          .break {
            display: inline;
          }
          .stipendium-right {
            width: 100%;
            padding: 0 2% 0 6%;
          }
          ul li {
            font-size: 14px;
          }
        }
        @media only screen and (min-width: 980px) and (max-width: 1023px) {
          #super-stipendium {
            display: block;
          }
          .stipendium-left {
            width: 100%;
            padding-bottom: 3em;
          }
          .break {
            display: inline;
          }
          .stipendium-right {
            width: 100%;
            padding: 0 2% 0 6%;
          }
        }
        @media only screen and (min-width: 1024px) and (max-width: 1199px) {
          #super-stipendium {
            display: block;
          }
          .stipendium-left {
            width: 100%;
            padding-bottom: 3em;
          }
          .break {
            display: inline;
          }
          .stipendium-right {
            width: 100%;
            padding: 0 2% 0 6%;
          }
        }
      `}</style>
    </div>
  );
};

export default SuperStipendium;
