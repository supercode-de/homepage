// import { useWindowSize } from './functions/windowSize'

import Carousel from "react-multi-carousel";
import data from "./data/team.json";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Zukunft = (props) => {
  // const width = useWindowSize().width / 12
  const pixelSize = 1.5;
  return (
    <div id="zukunft" className="whiteGreenDots">
      <div className="infos">
        <div className="info-text">
          <h1>
            <span className="super">Hallo Welt!</span>
            <br />
            Wir sind SuperCode!
          </h1>
          <p>
            – ein Team aus Expert*innen mit langjähriger Erfahrung in den
            Bereichen Webentwicklung, Bildungsmanagement und IT-Recruitment. Wir
            haben eine klare Vision: Digitale Bildung für alle, nachhaltig und
            modern.
          </p>
          <p>
            Uns alle verbindet die Liebe zur digitalen Welt. Deshalb sind wir
            eng vernetzt mit unseren Partnerunternehmen sowie den wichtigsten
            Start Ups aus unserer Region. Unsere Branchenexpertise und unser
            Netzwerk führen dich zum SuperJob!
          </p>
        </div>
        <div className="info-img">
          <img
            src="/img/Workshop html css javascript.png"
            alt="Workshop html css javascript"
          />
        </div>
      </div>
      <div className="team-grid">
        <div className="placeholder"></div>
        {data.map((teammitglied) => {
          return (
            <div>
              <img
                src={teammitglied.img}
                alt={`${teammitglied.name} ${teammitglied.job}`}
              />
              <h2 className="teamname">{teammitglied.name}</h2>
              <p>{teammitglied.job}</p>
            </div>
          );
        })}
        <div className="rotating-text">
          <img
            src="/img/SuperTeam-Circle.svg"
            alt="SuperCode Team, Bildungsträger"
          />
        </div>
      </div>
      <div className="team-carousel">
        <Carousel
          responsive={responsive}
          ssr
          showDots={false}
          slidesToSlide={1}
          infinite
          containerClass="container-with-dots"
          itemClass="image-item"
          deviceType={""}
        >
          {data.map((teammitglied) => {
            return (
              <div className="carousel-article-container">
                <div>
                  <img
                    src={teammitglied.img}
                    alt={`${teammitglied.name} ${teammitglied.job}`}
                  />
                  <h2 className="teamname">{teammitglied.name}</h2>
                  <p>{teammitglied.job}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <section className="stellenInfo">
        <h2>Werde Teil unseres <span className="super">Super-Teams!</span></h2>
        <div>
          <p>Wir sind immer auf der Suche nach neuen, motivierten Menschen! Wir sind jung, dynamisch, international und haben Lust etwas zu verändern! Hilf uns dabei unsere Vision von digitaler Bildung umzusetzen und dadurch die Welt zu einem chancengerechteren Ort zu machen.</p>
          <p>SuperCode steht für moderne didaktische und methodische Bildung, eine nachhaltige und gemeinwohlorientierte Unternehmensführung, Ehrlichkeit und Transparenz. Wir sind ein Team aus qualifizierten und praxiserfahrenen Expert*innen, die Spaß an ihrer Arbeit haben und an das glauben, was sie machen. Wir sind mit vielen Firmen aus der Region gut vernetzt, nutzen immer den neuesten Tech-Stack und legen viel Wert darauf, dass sich jede*r einbringen und mit ihrer/seiner Persönlichkeit entfalten kann. </p>
        </div>

        <h2>Was wir dir bieten:</h2>
        <ul>
          <li>ein tolles Team voller IT-Enthusiast*innen in einem wundervollen agilen Arbeitsumfeld</li>
          <li>Eine Tätigkeit in einem innovativen Feld mit nachhaltigen sozialen Auswirkungen und den neuesten Tech-Tools</li>
          <li>Flexible Beschäftigungsformen (Festanstellung, Freiberufler, Homeoffice)</li>
          <li>Ein faires Gehalt, angepasst an deine Kenntnisse und Erfahrungen</li>
          <li>Raum und Zeit für eigene Projekte</li>
          <li>Interne Schulungen sowie externe zertifizierte Fortbildungen</li>
          <li>Team-Events mit allen</li>
          <li>Einen Grund morgens mit guter Laune aufzustehen!</li>
        </ul>
      </section>

      <style jsx>{`
        #zukunft {
          position: relative;
          padding: 10vw calc(100vw / 12);
        }

        .infos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 30px;
          margin-bottom: 10vw;
        }

        .info-text h1 {
          letter-spacing: 2px;
          color: var(--super-lila);          
          margin: 0;
        }
        .super {
          font-weight: 400;
          color: transparent;
          letter-spacing: 3px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--super-lila);
        }

        .info-text p {
          color: var(--super-lila);
          font-size: 1.2em;
        }
        .info-img {
          width: 100%;
        }
        .info-img img {
          width: 100%;
        }

        .team-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .teamname {
          font-size: 1.5rem;
          font-family: "Neue_Machina_Ultrabold";
        }

        .team-grid img {
          width: 100%;
          display: flex;
        }

        .team-grid .placeholder {
          grid-column: -2/-1;
          grid-row: 1/2;
        }

        .team-grid .rotating-text {
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column: 1/2;
          grid-row: ${Math.round((data.length - 1) / 4) + 1} /
            ${Math.round((data.length - 1) / 4) + 2};
        }
        .team-grid .rotating-text img {
          width: 70%;
          animation: spin 15s linear infinite;
        }
        .stellenInfo {
          margin-top: 10rem;
        }
        .stellenInfo > * {
          color: var(--super-lila);
        }
        .stellenInfo div {
          width: 70%;
          margin-left: 5rem;
        }
        .stellenInfo ul {
          margin-left: 5rem;
          padding: 0;
        }
        .stellenInfo ul li {
          font-size: 1.125rem;
          margin-bottom: 1rem;
          list-style-position: inside
        }

        @keyframes spin {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        h2,
        p {
          margin: 0;
          padding: 0;
        }
        h2 {
          margin-top: 0.5em;
        }

        .team-carousel {
          display: none;
          padding: 0;
        }

        .carousel-article-container {
          padding: 0 20px;
        }

        .carousel-article-container div {
          overflow: hidden;
          text-align: center;
          width: 100%;
        }

        .carousel-article-container .img {
          width: 100%;
          overflow: hidden;
        }
        .carousel-article-container img {
          width: 100%;
        }

        .carousel-article-container div p {
          font-size: 1.8em;
        }
        .carousel-article-container div h2 {
          font-size: 2em;
        }

        @media (max-width: 768px) {
          .infos {
            grid-template-columns: 1fr;
          }
          .info-text h1 {
            font-size: 4em;
          }
          .info-text p {
            font-size: 1.8em;
          }

          .info-img {
            grid-row: 1/2;
          }
          .team-grid {
            display: none;
          }

          .team-carousel {
            display: block;
          }
        }
        @media (max-width: 468px) {
        }
      `}</style>
    </div>
  );
};

export default Zukunft;
