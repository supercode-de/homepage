import Telefon from './small/Telefon';
import Beratung_flexible from './Beratung_flexible';
import Curriculum from './Curriculum_Popup';
import kurseData from '../components/data/kursedata.json';
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion_frontend from './Accordion_frontend';

const UX_UI_Praxis = () => {
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(true);

  const [text5, setText5] = useState(false);

  const [getJobImg, setGetJobImg] = useState('/img/getJob.svg');
  const [getJobActive, setGetJobActive] = useState(false);

  const showText = (e) => {
    if (
      e.target.className.includes('text1') ||
      e.target.className.includes('inner-bar1')
    ) {
      setText1(true);
    } else {
      setText1(false);
    }
    if (
      e.target.className.includes('text2') ||
      e.target.className.includes('inner-bar2')
    ) {
      setText2(true);
    } else {
      setText2(false);
    }

    if (
      e.target.className.includes('text5') ||
      e.target.className.includes('inner-bar5')
    ) {
      setText5(true);
    } else {
      setText5(false);
    }
  };
  return (
    <section className='fsPraxis whiteGreenDots'>
      <div className='praxisInfos'>
        <h2 className='letterstroke'>Über 60% Praxis</h2>
        <h2>Fokus auf Javascript</h2>

        <p>
          Mit über 60% Praxisanteil bilden wir dich optimal für die Berufspraxis
          als Webentwickler*in aus. Da fast jede Website kleinere oder größere
          JavaScripte verwendet, liegt neben HTML & CSS ein starker Fokus auf
          dem Erlernen von JavaScript und der Library React. Ihr lernt die
          wichtigsten Sprachen und Technologien, um vollwertige Webseiten zu
          erstellen.
        </p>
        <p>
          Neben den Basics in Grafikdesign und Projektmanagement, stärken wir
          eure Präsentationsskills, Teamfähigkeit und die Fähigkeit des
          selbstständigen Lernens. Und das alles neben deinem Job in Teilzeit!
        </p>
      </div>
      {window.screen.width > 768 ? (
        <section className='praxis-info-illustration'>
          <div className='bars-container'>
            <div
              className='bar-wrapper text2'
              onClick={(e) => {
                showText(e);
                setGetJobImg('/img/getJob.svg');
                setGetJobActive(false);
              }}
            >
              <div
                className='bar2 outer-bar text2'
                style={{
                  backgroundColor: text2 ? 'var(--super-lila)' : null,
                }}
              >
                <div className='verstehenAnwenden text2'>
                  <img src='/img/Front-End.svg' alt='' className='text2' />
                </div>
                <div className='inner-bar inner-bar2'></div>
              </div>
            </div>
            <div
              className='bar-wrapper text1'
              onClick={(e) => {
                showText(e);
                setGetJobImg('/img/getJob.svg');
                setGetJobActive(false);
              }}
            >
              <div
                className='bar1 outer-bar '
                style={{
                  backgroundColor: text1 ? 'var(--super-green)' : null,
                }}
              >
                <div className='text1' id='st-arrowImg'>
                  <img src='/img/Group216.svg' alt='' className='text1' />
                </div>
                <div className='inner-bar inner-bar1'></div>
              </div>
            </div>

            <div
              className='bar-wrapper text5'
              onClick={(e) => {
                showText(e);
                setGetJobImg('/img/getJob.svg');
                setGetJobActive(false);
              }}
            >
              <div
                className='bar5 outer-bar text5'
                style={{
                  backgroundColor: text5 ? 'var(--super-yellow)' : null,
                }}
              >
                <div className='text5' id='nd-arrowImg'>
                  <img
                    src='/img/Group214.svg'
                    alt=''
                    className='text5 arrows'
                  />
                </div>
                <div className='inner-bar inner-bar5'></div>
              </div>
            </div>
          </div>
          <article className='bar-text-container'>
            {text1 && (
              <div>
                <h3 className='colorHeader1'>Plus Skills</h3>
                <p>
                  Design & UX, Learn to learn, <br /> Project Management Basics,{' '}
                  <br /> Presentation Basics
                </p>
              </div>
            )}

            {text2 && (
              <div>
                <h3 className='colorHeader3'>Front-End</h3>
                <p>
                  Web Development Essentials, HTML, <br /> CSS, Git, Command
                  line /Terminal, <br /> CSS-Extensions, CSS-Frameworks, CMS,
                  Javascript, REST API, Javascript Frameworks/Libraries
                </p>
              </div>
            )}

            {text5 && (
              <div>
                <h3 className='colorHeader2'> Abschlussprojekt</h3>
                <p>
                  Reales Projekt, Konzeption & <br /> Planung,
                  Projektmanagement, <br />
                  Prototyping, Design, <br /> Front-End-Entwicklung, Testing,{' '}
                  <br />
                  Präsentation
                </p>
              </div>
            )}
          </article>
        </section>
      ) : null}
      {window.screen.width <= 768 ? <Accordion_frontend /> : null}

      <div className='neugierCTA'>
        <h2>
          Bist du neugierig geworden? <br /> Hier findest du das Curriculum.
        </h2>
        <div className='buttons'>
          <Curriculum
            buttonText='Curriculum'
            buttonWidth='150px'
            hubspot={kurseData[0].kurseKursePage[1].hubspotFormID}
          />
          <Beratung_flexible
            buttonText={'BERATUNG'}
            buttonWidth={'150px'}
            // buttonMinWidth='100%'
            buttonTextColor={'#000'}
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
            font-size: 1.1rem;
            font-weight: 300;
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
            margin: 0;
            position: relative;

            // padding: 0;
          }

          .inner-bar {
            position: absolute;
            height: 102%;
            width: 0%;
            transition: width 0.3s ease-out;
            // padding: 0;
            // margin: 0;
            top: -1px;
            left: -1%;
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
            border: 6px solid var(--super-green);
            width: 10%;
            padding: 0;
          }
          .bar1 .inner-bar {
            background-color: var(--super-green);
            padding: 0;
          }

          #st-arrowImg img {
            width: 100%;
          }
          #st-arrowImg {
            position: absolute;
            left: 120%;
            width: 490%;
          }
          #st-arrowImg:hover {
            cursor: pointer;
          }
          .bar2 .inner-bar {
            background-color: var(--super-lila);
          }
          .bar2 {
            border: 6px solid var(--super-lila);
            width: 70%;
            padding: 0;
          }

          .verstehenAnwenden {
            position: absolute;
            z-index: 2;
            width: 27%;
            top: 35%;
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
          }

          .getJob img {
            width: 80%;
          }

          .bar5 .inner-bar {
            background-color: var(--super-yellow);
          }
          .bar5 {
            border: 6px solid var(--super-yellow);
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
            // right: 50px;
          }

          //=========================

          h2 {
            font-size: 4rem;
            font-family: 'Neue_Machina_Light';
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
          }
          .neugierCTA h2 {
            font-size: 3rem;
            width: 80%;
            margin-top: 125px;
            margin-bottom: 30px;
            padding-left: 5%;
          }
          .buttons {
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }

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
            color: var(--super-green);
            font-size: 3rem;
            margin-bottom: 0;

            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: var(--super-green);
            font-weight: 300;

            transition: all 1s;
          }
          .colorHeader2 {
            color: var(--super-yellow);
            font-size: 3rem;
            margin-bottom: 0;
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: var(--super-yellow);
            font-weight: 300;
          }
          .colorHeader3 {
            color: var(--super-lila);
            font-size: 3rem;
            margin-bottom: 0;
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: var(--super-lila);
            font-weight: 300;
          }

          #__heading {
            background: '#fff';
          }
          #__item {
            background: '#fff';
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
            .fsPraxis h2 {
              font-size: 1.8rem;
              line-height: 28px;
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
              line-height: 28px;
            }
            .fsPraxis h2 {
              font-size: 1.4rem;
            }
            .neugierCTA {
              display: block;
            }
            .neugierCTA h2 {
              font-size: 1rem;
              width: 80%;
            }
            .mobile-section article p {
              font-size: 0.7rem;
            }
            .buttons {
              display: flex;
              justify-content: space-between;
              width: 90%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default UX_UI_Praxis;
