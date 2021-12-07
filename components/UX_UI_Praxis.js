import Telefon from "./small/Telefon";
import Beratung_flexible from "./Beratung_flexible";
import Curriculum from "./Curriculum_Popup";
import kurseData from "../components/data/kursedata.json";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion_uxui from "./Accordion_uxui";

const UX_UI_Praxis = () => {
  const [text1, setText1] = useState(true);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);
  const [text5, setText5] = useState(false);

  const [getJobImg, setGetJobImg] = useState("/img/getJob.svg");
  const [getJobActive, setGetJobActive] = useState(false);

  const showText = (e) => {
    if (
      e.target.className.includes("text1") ||
      e.target.className.includes("inner-bar1")
    ) {
      setText1(true);
    } else {
      setText1(false);
    }
    if (
      e.target.className.includes("text2") ||
      e.target.className.includes("inner-bar2")
    ) {
      setText2(true);
    } else {
      setText2(false);
    }
    if (
      e.target.className.includes("text3") ||
      e.target.className.includes("inner-bar3")
    ) {
      setText3(true);
    } else {
      setText3(false);
    }
    if (
      e.target.className.includes("text4") ||
      e.target.className.includes("inner-bar4")
    ) {
      setText4(true);
    } else {
      setText4(false);
    }
    if (
      e.target.className.includes("text5") ||
      e.target.className.includes("inner-bar5")
    ) {
      setText5(true);
    } else {
      setText5(false);
    }
  };
  return (
    <section className="fsPraxis whiteGreenDots">
      <div className="praxisInfos">
        <h2 className="letterstroke">Mit UX und UI zur</h2>
        <h2>optimalen User-Experience</h2>

        <p>
          Erfolgreiche Digitalprodukte kombinieren ein positives
          Nutzungserlebnis mit einer ansprechenden visuellen UI-Gestaltung der
          Anwendung. Daher liegt der Fokus gleichermaßen auf dem Verstehen und
          Anwenden von UX-Prinzipien und -Methoden sowie auf der UI-Gestaltung
          von Benutzeroberflächen.
        </p>
        <p>
          Als UX-Designer*in findest du heraus, was die Benutzer*innen wirklich
          wollen und lieferst mit deinen Kenntnissen im UI-Bereich eine digitale
          Schnittstelle, die keine Fragen offen lässt. Und das alles lernst du
          in Teilzeit neben deinem Job!
        </p>
      </div>
      {window.screen.width > 768 ? (
        <section className="praxis-info-illustration">
          <div className="bars-container">
            <div
              className="bar-wrapper text1"
              onClick={(e) => {
                showText(e);
                setGetJobImg("/img/getJob.svg");
                setGetJobActive(false);
              }}
            >
              <div
                className="bar1 outer-bar "
                style={{
                  backgroundColor: text1 ? "var(--super-lila)" : null,
                }}
              >
                <div className="text1" id="st-arrowImg">
                  <img src="/img/Group212.svg" alt="" className="text1" />
                </div>
                <div className="inner-bar inner-bar1"></div>
              </div>
            </div>
            <div
              className="bar-wrapper text2"
              onClick={(e) => {
                showText(e);
                setGetJobImg("/img/getJob.svg");
                setGetJobActive(false);
              }}
            >
              <div
                className="bar2 outer-bar text2"
                style={{
                  backgroundColor: text2 ? "var(--super-green)" : null,
                }}
              >
                <div className="verstehenAnwenden text2">
                  <img
                    src="/img/verstehenundanwenden.svg"
                    alt=""
                    className="text2"
                  />
                </div>
                <div className="inner-bar inner-bar2"></div>
              </div>
            </div>

            <div
              className="bar-wrapper text3"
              onClick={(e) => {
                showText(e);
                setGetJobImg("/img/getJob.svg");
                setGetJobActive(false);
              }}
            >
              <div
                className="bar3 outer-bar text3"
                style={{
                  backgroundColor: text3 ? "var(--super-yellow)" : null,
                }}
              >
                <div
                  className="gestaltungBenutzeroberflächen text3"
                  onClick={(e) => {
                    showText(e);
                    setGetJobImg("/img/getJob.svg");
                    setGetJobActive(false);
                  }}
                >
                  <img
                    src="/img/gestaltungBenutzeroberflächen.svg"
                    alt=""
                    className="text3"
                  />
                </div>
                <div className="inner-bar inner-bar3"></div>
              </div>
            </div>
            <div
              className="bar-wrapper text4"
              onMouseOut={() =>
                getJobActive
                  ? setGetJobImg("/img/getJobwhite.svg")
                  : setGetJobImg("/img/getJob.svg")
              }
              onMouseOver={() => setGetJobImg("/img/getJobwhite.svg")}
              onClick={(e) => {
                showText(e);
                setGetJobImg("/img/getJobwhite.svg");
                setGetJobActive(true);
              }}
            >
              <div
                className="bar4 outer-bar text4"
                style={{
                  backgroundColor: text4 ? "var(--super-black)" : null,
                }}
                onClick={(e) => {
                  showText(e);
                  setGetJobImg("/img/getJobwhite.svg");
                  setGetJobActive(true);
                }}
              >
                <div
                  className="getJob text4"
                  // onMouseOut={() => setGetJobImg('/img/getJob.svg')}
                  // onMouseOver={() => setGetJobImg('/img/getJobwhite.svg')}
                  onClick={(e) => {
                    showText(e);
                    setGetJobImg("/img/getJobwhite.svg");
                    setGetJobActive(true);
                  }}
                >
                  <img
                    src={getJobImg}
                    alt=""
                    className="text4"
                    // onMouseOut={() => setGetJobImg('/img/getJob.svg')}
                    // onMouseOver={() => setGetJobImg('/img/getJobwhite.svg')}
                    onClick={(e) => {
                      showText(e);
                      setGetJobImg("/img/getJobwhite.svg");
                      setGetJobActive(true);
                    }}
                  />
                </div>
                <div
                  className="inner-bar inner-bar4"
                  onClick={(e) => {
                    showText(e);
                    setGetJobImg("/img/getJobwhite.svg");
                    setGetJobActive(true);
                  }}
                ></div>
              </div>
            </div>
            <div
              className="bar-wrapper text5"
              onClick={(e) => {
                showText(e);
                setGetJobImg("/img/getJob.svg");
                setGetJobActive(false);
              }}
            >
              <div
                className="bar5 outer-bar text5"
                style={{
                  backgroundColor: text5 ? "var(--super-lila)" : null,
                }}
              >
                <div className="text5" id="nd-arrowImg">
                  <img src="/img/Group214.svg" alt="" className="text5" />
                </div>
                <div className="inner-bar inner-bar5"></div>
              </div>
            </div>
          </div>
          <article className="bar-text-container">
            {text1 && (
              <div>
                <h3 className="colorHeader1">
                  <span>UX/UI: </span> Design-
                  <br /> Preparation
                </h3>
                <p>
                  Unterschiede, Nutzen & Entstehung, Grundlagen des Design
                  Thinking, Anwendungsgebiete, Best practice Beispiel-Webseiten,
                  UX-Communities, Responsive Design & Mobile first,
                  Produktionszyklus für Digitalprodukte
                </p>
                <p>Tools: Figma, Trello</p>
              </div>
            )}

            {text2 && (
              <div>
                <h3 className="colorHeader3">
                  {" "}
                  <span>UX:</span> Verstehen und anwenden{" "}
                </h3>
                <p>
                  Prinzipien des benutzerzentrierten Designs, Projektarbeit:
                  Anwendung von Design Thinking / agilen Methoden /
                  Design-Sprints / Mindset entwickeln, User-Research /
                  UX-Forschungsmethoden, UX-Methoden / Fachbegriffe und
                  Definitionen (z.B. : Pain-Points, User-Stories, User Journey
                  etc.) Low-Fidelity- und High-Fidelity-Design, Praxisübungen
                  für Prototyping / Wireframing & Erstellung eines interaktiven
                  Prototypen in <br /> Figma, Präsentationen mit Erklärungen
                </p>
              </div>
            )}
            {text3 && (
              <div>
                <h3 className="colorHeader2">
                  <span> UI:</span> Gestaltung von Benutzeroberflächen
                </h3>
                <p>
                  Branding- und Design-Grundlagen für UI: Stylescape, UI-Typo
                  als Praxisaufgabe, Designkonzept Webdesign, Accessibility (&
                  Usability) Praxisprojekte: Designerstellung mit Figma
                  (Komponenten / Grid & Raster / Responsive Design &
                  Designsysteme, ggf. Animations)
                </p>
              </div>
            )}
            {text4 && (
              <div>
                <h3 className="colorHeader4">
                  {" "}
                  <span>Plus Skills / Get in Job</span>{" "}
                </h3>
                <p>
                  Learn to learn, Presentation Basics, Portfolio vorbereiten für
                  Bewerbungen, UX-fokussierter Lebenslauf, Basics Jobsuche
                  UX/UI-Bereich
                </p>
              </div>
            )}
            {text5 && (
              <div>
                <h3 className="colorHeader1">
                  {" "}
                  <span>Abschlussprojekt:</span>{" "}
                </h3>
                <p>
                  Erstellung eines vollständig animierten interaktiven Prototyps
                  / Testing & Präsentation des Produkts: Rollenspiel für Kunden
                </p>
              </div>
            )}
          </article>
        </section>
      ) : null}

      {window.screen.width <= 768 ? <Accordion_uxui /> : null}

      <div className="neugierCTA">
        <p className="neugierCTA_txt">
          Bist du neugierig geworden? <br /> Hier findest du das
          <span className="circle"> Curriculum.</span>
        </p>
        <div className="buttons">
          <Curriculum
            buttonText="Curriculum"
            buttonWidth="150px"
            hubspot={kurseData[0].kurseKursePage[2].hubspotFormID}
          />
          <Beratung_flexible
            buttonText={"BERATUNG"}
            buttonWidth={"150px"}
            // buttonMinWidth='100%'
            buttonTextColor={"#000"}
          />
        </div>
      </div>
      <style jsx>
        {`
          // .accord-con {
          //   z-index: 99;
          // }
          .fsPraxis {
            padding: 40px 0 40px 2%;
          }
          // .fsPraxis h2 {
          //   font-size: 4rem;
          // }
          .fsPraxis p {
            width: 65%;
            font-size: 1.3rem;
            font-weight: 300;
            line-height: 20px;
          }
          .praxis-Img {
            width: 90%;
          }
          .praxis-Img img {
            width: 100%;
            pointer-events: none;
            user-select: none;
          }

          .outer-bar {
            height: 70px;
            padding: 0;
            margin: 0;
            position: relative;
          }

          .inner-bar {
            position: absolute;
            height: 100%;
            width: 0%;
            transition: width 0.3s ease-out;
          }
          .inner-bar span {
            position: absolute;
            text-align: right;
            left: 300px;
            width: 200px;
          }

          .bar-wrapper:hover .inner-bar {
            // animation: progress-animation 5s;
            width: 100%;
            transform: width 1s;
          }
          .bar-wrapper {
            padding: 10px 0;
          }
          .bar-wrapper:hover {
            cursor: pointer;
          }
          .bar1 {
            border: 6px solid var(--super-lila);
            width: 20%;
          }
          .bar1 .inner-bar {
            background-color: var(--super-lila);
          }

          #st-arrowImg {
            position: absolute;
            left: 120%;
          }
          #st-arrowImg:hover {
            cursor: pointer;
          }
          .bar2 .inner-bar {
            background-color: var(--super-green);
          }
          .bar2 {
            border: 6px solid var(--super-green);
            width: 70%;
          }

          .circle {
            position: relative;
          }
          .verstehenAnwenden {
            position: absolute;
            z-index: 2;
            width: 45%;
            top: 20%;
            right: 7%;
          }
          .verstehenAnwenden > img {
            width: 100%;
          }
          .bar3 .inner-bar {
            background-color: var(--super-yellow);
          }
          .bar3 {
            border: 6px solid var(--super-yellow);
            width: 70%;
          }

          .gestaltungBenutzeroberflächen {
            position: absolute;
            z-index: 2;
            width: 47%;
            top: 20%;
            right: 7%;
          }
          .gestaltungBenutzeroberflächen > img {
            width: 100%;
          }

          .bar4 .inner-bar {
            background-color: #000;
          }
          .bar4 {
            border: 6px solid var(--super-black);
            width: 45%;
          }

          .getJob {
            position: absolute;
            z-index: 2;
            top: 35%;
            width: 100%;
            left: 10%;
          }

          .getJob img {
            width: 80%;
          }

          .bar5 .inner-bar {
            background-color: var(--super-lila);
          }
          .bar5 {
            border: 6px solid var(--super-lila);
            width: 10%;
          }

          #nd-arrowImg {
            position: absolute;
            left: 120%;
            width: 470%;
          }

          #nd-arrowImg img {
            width: 100%;
          }

          .praxis-info-illustration {
            display: flex;
          }
          .bars-container {
            width: 45%;
            padding-left: 5%;
          }
          .bar-text-container {
            margin-right: 5%;
            width: 50%;
            position: relative;
            // right: 5px;
          }

          //=========================

          h2 {
            font-size: 4rem;
            font-family: "Neue_Machina_Light";
            color: #03000f;
            margin: 0;
            line-height: 50px;
          }
          p {
            color: #121e28;
            // width: 55%;
            font-size: 1.563rem;
            font-weight: 300;
          }
          .praxisInfos,
          .plus-skills-infos {
            margin: 5rem;
          }
          .letterstroke {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: #03000f;
            font-weight: 300;
          }
          .neugierCTA {
            display: block;
            position: relative;
          }
          .neugierCTA h2 {
            font-size: 3rem;
            width: 80%;
            margin-top: 125px;
            margin-bottom: 30px;
            padding-left: 5%;
          }
          .fsPraxis .neugierCTA_txt {
            font-family: "Neue_Machina_Light";
            // color: #989898;
            font-size: 3.3rem;
            width: 80%;
            color: #121e28;
            margin-top: 125px;
            margin-bottom: 30px;
            padding-left: 5%;
            line-height: 50px;
            font-weight: 200;
          }
          .buttons {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            padding-right: 5%;
          }

          .neugierCTA p span.circle::after {
            position: absolute;
            background: url("/img/Vector64.svg") center/contain no-repeat;
            height: 336%;
            width: 103%;
            right: -3%;
            bottom: -110%;
            content: "";

            transform: scale(1.1, 0.6);
            display: block;
          }
          // @media (max-width: 1440px) {
          //   .neugierCTA p span.circle::after {
          //     position: absolute;
          //     background: url('/img/Vector64.svg') center/contain no-repeat;
          //     height: 336%;
          //     width: 103%;
          //     right: -9%;
          //     bottom: -110%;
          //     content: '';
          //     transform: scale(1.1, 0.6);
          //     display: block;
          //   }
          // }
          @media (max-width: 1040px) {
            .fsPraxis p {
              font-size: 1.2rem;
              font-weight: 300;
            }
            h2 {
              font-size: 4rem;
            }
            .letterstroke {
            }
          }

          //=======
          .mobile-section {
            width: 90%;
            margin: auto;
          }
          .mobile-section article {
            display: flex;
            margin-bottom: 30px;
            justify-content: space-between;
          }
          .mobile-section article div:nth-of-type(1) {
            margin-right: 50px;
          }
          .mobile-section article p {
            width: 100%;
          }
          .mobile-section article h3 {
            font-size: 1.2rem;
          }
          .colorHeader1 {
            color: var(--super-lila);
            font-size: 3rem;
            margin-bottom: 0;

            transition: all 1s;
          }

          .colorHeader1 span {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: var(--super-lila);
            font-weight: 300;
          }
          .colorHeader2 {
            color: var(--super-yellow);
            font-size: 3rem;
            margin-bottom: 0;
          }
          .colorHeader2 span {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: var(--super-yellow);
            font-weight: 300;
          }

          .colorHeader3 {
            color: var(--super-green);
            font-size: 3rem;
            margin-bottom: 0;
          }

          .colorHeader3 span {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: var(--super-green);
            font-weight: 300;
          }
          .colorHeader4 {
            color: var(--super-black);
            font-size: 3rem;
            margin-bottom: 0;
          }

          .colorHeader4 span {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: var(--super-black);
            font-weight: 300;
          }

          #__heading {
            background: "#fff";
          }
          #__item {
            background: "#fff";
          }
          //=============
          .container,
          .container2 {
            width: 100%;
            max-width: 768px;
            margin: auto;
          }

          .accordion,
          .accordion2 {
            width: 100%;
            max-width: 768px;
            margin: 18px auto;
          }
          .accordionHeading,
          .accordionHeading2 {
            border: 2px solid var(--super-lila);
          }
          .accordionHeading p {
          }
          .accordionContainer,
          .accordionContainer2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .accordionContent,
          .accordionContent2 {
            height: 0;
            opacity: 0;
            display: flex;
            transition: all 600ms ease-in-out;
          }

          .show {
            height: 180px;
            opacity: 1;
          }
          //===============================
          @media (max-width: 768px) {
            h2 {
              font-size: 3.5rem;
              // line-height: 28px;
            }
            .fsPraxis h2 {
              font-size: 3rem;
              text-align: left;
              margin-left: 5%;
            }
            .fsPraxis h2:nth-of-type(2) {
              margin-bottom: 20px;
            }
            .plus-skills-infos {
              display: none;
            }

            .praxisInfos {
              margin: 0;
            }
            .praxisInfos p {
              font-size: 1rem;
              padding: 0;
              width: 90%;
              margin: auto;
            }

            .plus-skills-infos p {
              font-size: 1rem;
              padding: 0;
              width: 85%;
            }
            .mobile-section article p {
              font-size: 0.9rem;
            }
            .mobile-section article h3 {
              font-size: 1rem;
            }
            .mobile-section article div:nth-of-type(1) {
              margin-right: 30px;
            }
            .buttons {
              display: flex;
              justify-content: flex-end;
              width: 100%;
            }
            .neugierCTA {
              display: block;
            }
            .neugierCTA h2 {
              font-size: 1.5rem;
              line-height: 28px;
              width: 80%;
            }
          }
          @media (max-width: 565px) {
            h2 {
              font-size: 2rem;
            }

            .fsPraxis .neugierCTA_txt {
              font-size: 2rem;
              line-height: 28px;
            }
            .fsPraxis h2 {
              font-family: "Neue_Machina_Ultrabold";
              font-size: 1.8rem;
              line-height: 20px;
            }
            .neugierCTA {
              display: block;
            }
            .neugierCTA h2 {
              font-size: 1.5rem;
              line-height: 28px;
              width: 80%;
            }
            .letterstroke {
              color: transparent;
              letter-spacing: 2px;
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: #03000f;
              font-weight: 300;
            }
          }
          @media (max-width: 440px) {
            h2 {
              font-size: 1.7rem;
              line-height: 20px;
            }
            .fsPraxis h2 {
              font-size: 1.8rem;
            }
            .neugierCTA {
              display: block;
            }
            .neugierCTA h2 {
              font-size: 1rem;
              width: 80%;
            }
            .fsPraxis .neugierCTA_txt {
              font-family: "Neue_Machina_Light";

              margin-top: 60px;
              margin-bottom: 30px;
            }

            .mobile-section article p {
              font-size: 0.7rem;
            }
            .buttons {
              display: flex;
              justify-content: space-between;
              width: 90%;
              padding-right: 0%;
              padding-left: 7%;
            }
          }
          @media (max-width: 375px) {
            .fsPraxis h2 {
              font-size: 1.4rem;
            }
            .fsPraxis .neugierCTA_txt {
              font-size: 1.4rem;
              line-height: 20px;
            }
            .buttons {
              display: flex;
              justify-content: flex-end;
              width: 100%;
              padding-right: 2.5%;
              padding-left: 3.7%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default UX_UI_Praxis;
