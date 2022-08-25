import Beratung_flexible from './Beratung_flexible';
import Curriculum from './Curriculum_Popup';
import kurseData from './data/kursedata.json';
import { useState } from 'react';
import Accordion_frontend from './Accordion_fullstack';

const Kurse_FS_Praxis = () => {
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(true);
  const [text3, setText3] = useState(false);

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
      e.target.className.includes('text3') ||
      e.target.className.includes('inner-bar3')
    ) {
      setText3(true);
    } else {
      setText3(false);
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
    <section className='fsPraxis'>
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
          selbstständigen Lernens.
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
              className='bar-wrapper text3'
              onClick={(e) => {
                showText(e);
                setGetJobImg('/img/getJob.svg');
                setGetJobActive(false);
              }}
            >
              <div
                className='bar3 outer-bar text3'
                style={{
                  backgroundColor: text3 ? 'var(--super-green)' : null,
                }}
              >
                <div className='gestaltungBenutzeroberflächen'>
                  <img src='/img/Back-End.svg' alt='' className='text3' />
                </div>
                <div className='inner-bar inner-bar3'></div>
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
                  backgroundColor: text1 ? 'var(--super-yellow)' : null,
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
                  backgroundColor: text5 ? 'var(--super-black)' : null,
                }}
              >
                <div className='text5' id='nd-arrowImg'>
                  <img src='/img/Group214.svg' alt='' className='text5' />
                </div>
                <div className='inner-bar inner-bar5'></div>
              </div>
            </div>
          </div>
          <article className='bar-text-container'>
            {text1 && (
              <div>
                <h3 className='colorHeader2'>Plus Skills</h3>
                <p>
                  Design & UX, Learn to learn, Project Management Basics,
                  Presentation Basics <br /> <br />
                  Das Bewerbungscoaching unterstützt euch bei der Jobsuche mit
                  durchdesignten Unterlagen und optimalen Digital-Profilen.
                </p>
              </div>
            )}

            {text2 && (
              <div>
                <h3 className='colorHeader3'>
                  <span>Front-End</span> inkl. <br /> React.js
                </h3>
                <p>
                  Web Development Essentials, HTML, CSS, Git, Command line
                  /Terminal, CSS-Extensions, CSS-Frameworks, CMS, Javascript,
                  REST API, Javascript Frameworks/Libraries
                </p>
              </div>
            )}

            {text5 && (
              <div>
                <h3 className='colorHeader4'> Abschlussprojekt</h3>
                <p>
                  Reales Projekt, Konzeption & Planung, Projektmanagement,
                  Prototyping, Design, Front- und Backend-Entwicklung, Testing,
                  Präsentation
                </p>
              </div>
            )}
            {text3 && (
              <div>
                <h3 className='colorHeader1'> Back-End</h3>
                <p>
                  Essentials, Node.js, Express.js, npm, API & Datenbanken, Mongo
                  DB
                </p>
              </div>
            )}
          </article>
        </section>
      ) : null}
      {window.screen.width <= 768 ? <Accordion_frontend /> : null}

      <div className='neugierCTA'>
        <p className='neugierCTA_txt'>
          Bist du neugierig geworden? <br /> Hier findest du das{' '}
          <span className='circle'>Curriculum.</span>
        </p>
        <div className='buttons'>
          <Curriculum
            buttonText='Curriculum'
            buttonColor='#000'
            hubspot={kurseData[0].kurseKursePage[0].hubspotFormID}
          />
          <Beratung_flexible
            buttonText={'BERATUNG'}
            buttonWidth={'150px'}
            // buttonMinWidth='100%'
            buttonTextColor={'#000'}
          />
        </div>
      </div>
      <style jsx>{`
          .fsPraxis {
            padding: 40px 0 40px 2%;
          }

          .fsPraxis p {
            width: 65%;
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
          }

          .inner-bar {
            position: absolute;
            height: 102%;
            width: 0%;
            transition: width 0.3s ease-out;
            top: -1px;
            left: -1%;
          }
          .inner-bar span {
            position: absolute;
            text-align: right;
            left: 300px;
            width: 100%;
          }

          .bar-wrapper:hover .inner-bar {
            width: 102%;
            transform: width 1s;
          }
          .bar-wrapper {
            padding: 10px 0;
          }
          .circle {
            position: relative;
          }

          .bar-wrapper:hover {
            cursor: pointer;
          }
          .bar1 {
            border: 6px solid var(--super-yellow);
            width: 10%;
            padding: 0;
          }
          .bar1 .inner-bar {
            background-color: var(--super-yellow);
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
            width: 28%;
            top: 35%;
            right: 7%;
          }
          .verstehenAnwenden > img {
            width: 100%;
          }
          .bar3 .inner-bar {
            background-color: var(--super-green);
          }
          .bar3 {
            border: 6px solid var(--super-green);
            width: 50%;
          }

          .gestaltungBenutzeroberflächen {
            position: absolute;
            z-index: 2;
            width: 34%;
            top: 35%;
            right: 7%;
          }
          .gestaltungBenutzeroberflächen > img {
            width: 100%;
          }

          .bar4 .inner-bar {
            background-color: var(--super-black);
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
            background-color: var(--super-black);
          }
          .bar5 {
            border: 6px solid var(--super-black);
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
          }

          h2 {
            font-family: 'Neue_Machina_Light';
            color: var(--super-black);
          }
          p {
            color: var(--super-black);
            font-size: 1.563rem;
            font-weight: 300;
          }
          .praxisInfos,
          .plus-skills-infos {
            margin: 5rem;
          }
          .praxisInfos p:nth-of-type(1){
            margin-top: 50px;
            margin-bottom: 20px;
          }
          .letterstroke {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: var(--super-black);
            font-weight: 300;
          }
          .neugierCTA {
            display: block;
            position: relative;
            margin-top: 160px;
            margin-bottom: 105px;
          }

          .fsPraxis .neugierCTA_txt {
            font-family: 'Neue_Machina_Light';
            font-size: 5rem;
            width: 80%;
            color: var(--super-black);
            padding-left: 5%;
          }
          .buttons {
            display: flex;
            justify-content: flex-end;
          }

          .neugierCTA p span.circle::after {
            position: absolute;
            background: url('/img/Vector64.svg') center/contain no-repeat;
            height: 336%;
            width: 103%;
            right: -3%;
            bottom: -110%;
            content: '';
            transform: scale(1.1, 0.6);
            display: block;
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
            line-height: 3rem;
          }
          .colorHeader3 span {
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: var(--super-lila);
            font-weight: 300;
          }
          .colorHeader4 {
            // color: var(--super-lila);
            font-size: 3rem;
            margin-bottom: 0;
            color: transparent;
            letter-spacing: 2px;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: var(--super-black);
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
              margin-top: 100px;
            }
            .neugierCTA h2 {
              font-size: 1.5rem;
              line-height: 28px;
              width: 80%;
            }
            .fsPraxis .neugierCTA_txt {
              font-size: 2rem;
              line-height: 28px;
              margin-bottom: 50px;
            }
          }
          @media (max-width: 565px) {
            h2 {
              font-size: 2rem;
            }
            .fsPraxis h2 {
              font-family: 'Neue_Machina_Ultrabold';
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
              font-size: 1.7rem;
              line-height: 20px;
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

            .fsPraxis .neugierCTA_txt {
              font-family: 'Neue_Machina_Light';

              margin-top: 60px;
              margin-bottom: 30px;
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

export default Kurse_FS_Praxis;
