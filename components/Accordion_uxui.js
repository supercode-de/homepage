import React, { useState, useEffect, useRef } from 'react';

// import Chevron from '../public/img/chevron-uxui.svg';

export default function Accordion() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    // setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className='accordion'>
      <div className='accordion__wrapper'>
        <div
          onClick={toggleState}
          className='accordion-visible unwrap translate-div'
        >
          <div className='bar1'></div>
          <img src='/img/Group212.svg' id='green__arrow' alt='' />
          {/* <span>
            UX/UI: Design- <br /> Preparation
          </span> */}
          <img className={toggle && 'active img'} src='/img/chevron.svg' />
        </div>

        <div
          className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
          style={{ height: toggle ? `280px` : '0px' }}
          ref={refHeight}
        >
          <p aria-hidden={toggle ? 'true' : 'false'}>
            Unterschiede, Nutzen & Entstehung, Grundlagen des Design Thinking
            Anwendungsgebiete, Best practice Beispiel-Webseiten, UX-Communities
            Grundlagen von HTML & CSS Responsive Design & Mobile first
            Produktionszyklus für Digitalprodukte Tools: Figma, Trello
          </p>
        </div>
      </div>
      <div className='accordion__wrapper'>
        <div
          onClick={() => setToggle2(!toggle2)}
          className='accordion-visible bar2'
        >
          {/* <span>Lorem ipsum dolor sit amet.</span> */}
          <img src='/img/verstehen.svg' alt='' id='verstehen' />
          <img className={toggle2 && 'active'} src='/img/chevron.svg' />
        </div>

        <div
          className={toggle2 ? 'accordion-toggle animated' : 'accordion-toggle'}
          style={{ height: toggle2 ? `425px` : '0px' }}
          // ${heightEl}
          ref={refHeight}
        >
          <p aria-hidden={toggle2 ? 'true' : 'false'}>
            UX: Verstehen und anwenden Prinzipien des benutzerzentrierten
            Designs Projektarbeit: Anwendung von Design Thinking / agilen
            Methoden / Design-Sprints / Mindset entwickeln User-Research /
            UX-Forschungsmethoden UX-Methoden / Fachbegriffe und
            Definitionen(z.b : Pain-Points, User-Stories, User Journey etc)
            Low-Fidelity- und High-Fidelity-Design Praxisübungen für Prototyping
            / Wireframing & Erstellung eines interaktiven Prototypen in Figma
            Präsentationen mit Erklärungen
          </p>
        </div>
      </div>
      <div className='accordion__wrapper'>
        <div
          onClick={() => setToggle3(!toggle3)}
          className='accordion-visible bar3'
        >
          <img src='/img/gestaltung.svg' alt='' id='gestaltung' />
          <img className={toggle3 && 'active'} src='/img/chevron.svg' />
        </div>

        <div
          className={toggle3 ? 'accordion-toggle animated' : 'accordion-toggle'}
          style={{ height: toggle3 ? `200px` : '0px' }}
          ref={refHeight}
        >
          <p aria-hidden={toggle3 ? 'true' : 'false'}>
            Branding- und Design-Grundlagen für UI: Moodboard, UI-Typo als
            Praxisaufgabe, Designkonzept Webdesign, Accessibility (& Usability)
            Praxisprojekte: Designerstellung mit Figma (Komponenten / Grid &
            Raster / Responsive Design & Designsysteme, ggf. Animations)
          </p>
        </div>
      </div>
      <div className='accordion__wrapper'>
        <div
          onClick={() => setToggle4(!toggle4)}
          className='accordion-visible bar4 '
        >
          <img src='/img/getIn.svg' alt='' id='getIn' />
          <img className={toggle4 && 'active'} src='/img/chevron.svg' />
        </div>

        <div
          className={toggle4 ? 'accordion-toggle animated' : 'accordion-toggle'}
          style={{ height: toggle4 ? `130px` : '0px' }}
          ref={refHeight}
        >
          <p aria-hidden={toggle4 ? 'true' : 'false'}>
            Learn to learn, Presentation Basics, Portfolio vorbereiten für
            Bewerbungen, UX-fokussierter Lebenslauf, Basics Jobsuche
            UX/UI-Bereich
          </p>
        </div>
      </div>
      <div className='accordion__wrapper'>
        <div
          onClick={() => setToggle5(!toggle5)}
          className='accordion-visible unwrap translate-div'
        >
          <div className='bar1'></div>
          <img src='/img/Group215.svg' id='green__arrow2' alt='' />
          {/* <span>
            UX/UI: Design- <br /> Preparation
          </span> */}
          <img className={toggle5 && 'active img'} src='/img/chevron.svg' />
        </div>

        <div
          className={toggle5 ? 'accordion-toggle animated' : 'accordion-toggle'}
          style={{ height: toggle5 ? `200px` : '0px' }}
          ref={refHeight}
        >
          <p aria-hidden={toggle5 ? 'true' : 'false'}>
            Erstellung eines vollständig animierten interaktiven Prototyps /
            Testing & Präsentation des Produkts: Rollenspiel für Kunden
          </p>
        </div>
      </div>

      <style jsx>
        {`
          .accordion__wrapper {
            margin: 25px 0;
          }
          .accordion {
            width: 90%;
            margin: 60px auto 0;
            border-radius: 3px;
            // background: #f1f1f1;
          }

          .accordion-visible {
            // background: #7177ca;
            width: 100%;

            cursor: pointer;
            border: 3px solid var(--super-lila);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 7px 15px;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
          }
          .unwrap {
            border: none;
            // padding: 0;
            padding-right: 4.5%;
          }
          .bar1 {
            border: 8px solid var(--super-lila);
            width: 20%;
            height: 70px;
          }

          .bar2 {
            border: 8px solid var(--super-green);
            height: 76px;
          }
          .bar1 img {
          }

          .bar3 {
            border: 8px solid var(--super-yellow);
            height: 76px;
          }
          .bar4 {
            border: 8px solid var(--super-black);
            width: 70%;
            height: 76px;
          }

          .accordion-visible span {
            padding: 15px 0;
            font-size: 20px;
          }
          .accordion-visible img {
            width: 30px;
            transform: rotate(180deg);
            transition: transform 0.2s ease-in-out;
          }
          #verstehen,
          #gestaltung,
          #getIn {
            transform: rotate(0deg);
            width: 36%;
          }

          #green__arrow {
            transform: rotate(0deg);
            width: 41%;
          }
          #green__arrow2 {
            transform: rotate(0deg);
            width: 46%;
            position: relative;
          }
          #verstehen,
          #gestaltung {
            position: relative;
            left: 50%;
          }
          #getIn {
            width: 62%;
            position: relative;
            left: 15%;
          }
          .accordion-visible img.active {
            transform: rotate(0deg);
          }

          .accordion-visible h2 {
            font-size: 20px;
          }

          .accordion-toggle {
            height: 0px;
            font-size: 18px;
            opacity: 0;
            transition: opacity 0.1s ease-in-out, height 0.1s 0.2s ease-in-out;
            color: #333;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
          }

          .animated {
            opacity: 1;
            transition: height 0.3s ease-in-out, opacity 0.3s 0.3s ease-in-out;
          }

          .accordion-toggle p {
            font-size: 1.1rem;
            margin: 0;
            padding: 22px 15px;
            pointer-events: none;
            line-height: 1.3;
          }
          .translate-div {
            padding-left: 0px;
          }
        `}
      </style>
    </div>
  );
}
