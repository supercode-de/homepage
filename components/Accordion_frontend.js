import React, { useState, useEffect, useRef } from 'react';

// import Chevron from '../public/img/chevron-uxui.svg';

export default function Accordion() {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className='accordion'>
      <div className='accordion__wrapper'>
        <div
          onClick={() => setToggle2(!toggle2)}
          className='accordion-visible bar2'
        >
          {/* <span>Lorem ipsum dolor sit amet.</span> */}
          <img src='/img/Front-End.svg' alt='' id='verstehen' />
          <img className={toggle2 && 'active'} src='/img/chevron.svg' />
        </div>

        <div
          className={toggle2 ? 'accordion-toggle animated' : 'accordion-toggle'}
          style={{ height: toggle2 ? `140px` : '0px' }}
          // ${heightEl}
          ref={refHeight}
        >
          <p aria-hidden={toggle2 ? 'true' : 'false'}>
            Web Development Essentials, HTML, <br /> CSS, Git, Command line
            /Terminal, <br /> CSS-Extensions, CSS-Frameworks, CMS, Javascript,
            REST API, Javascript Frameworks/Libraries
          </p>
        </div>
      </div>
      <div className='accordion__wrapper'>
        <div onClick={toggleState} className='accordion-visible unwrap'>
          <div className='bar1'></div>
          <img src='/img/Group211.svg' id='green__arrow' alt='' />
          {/* <span>
            UX/UI: Design- <br /> Preparation
          </span> */}
          <img className={toggle && 'active img'} src='/img/chevron.svg' />
        </div>

        <div
          className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
          style={{ height: toggle ? `100px` : '0px' }}
          ref={refHeight}
        >
          <p aria-hidden={toggle ? 'true' : 'false'}>
            Design & UX, Learn to learn, <br /> Project Management Basics,{' '}
            <br /> Presentation Basics
          </p>
        </div>
      </div>

      <div className='accordion__wrapper'>
        <div
          onClick={() => setToggle5(!toggle5)}
          className='accordion-visible unwrap'
        >
          <div className='bar3'></div>
          <img src='/img/Group215.svg' id='green__arrow2' alt='' />
          {/* <span>
            UX/UI: Design- <br /> Preparation
          </span> */}
          <img className={toggle5 && 'active img'} src='/img/chevron.svg' />
        </div>

        <div
          className={toggle5 ? 'accordion-toggle animated' : 'accordion-toggle'}
          style={{ height: toggle5 ? `60px` : '0px' }}
          ref={refHeight}
        >
          <p aria-hidden={toggle5 ? 'true' : 'false'}>
            Reales Projekt, Konzeption & <br /> Planung, Projektmanagement,{' '}
            <br />
            Prototyping, Design, <br /> Front-End-Entwicklung, Testing, <br />
            Präsentation
          </p>
        </div>
      </div>

      <style jsx>{`
          .accordion p {
            color: var(--super-black);
          }

          .accordion__wrapper {
            margin: 25px 0;
          }
          .accordion {
            width: 90%;
            margin: 60px auto 0;
            border-radius: 3px;
          }

          .accordion-visible {
            width: 100%;

            cursor: pointer;
            border: 3px solid var(--super-lila);
            display: flex;
            justify-content: space-between;
            align-items: center;
            // padding: 7px 15px;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
          }
          .unwrap {
            border: none;
            padding-right: 4.5%;
          }
          .bar1 {
            border: 8px solid var(--super-green);
            width: 10%;
            height: 70px;
          }
          .bar2 {
            border: 8px solid var(--super-lila);
            height: 76px;
            padding: 0px 15px;
          }
          .bar3 {
            border: 8px solid var(--super-yellow);
            width: 10%;
            height: 70px;
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

          #verstehen {
            transform: rotate(0deg);
            width: 22%;
            position: relative;
            left: 65%;
          }

          #green__arrow {
            transform: rotate(0deg);
            width: 55%;
          }
          #green__arrow2 {
            transform: rotate(0deg);
            width: 55%;
          }

          #gestaltung,
          #getIn {
            transform: rotate(0deg);
            width: 50%;
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
            font-size: 1rem;
            margin: 0;
            padding: 22px 15px;
            pointer-events: none;
            line-height: 1;
          }
          @media (max-width: 320px) {
            #verstehen {
              width: 40%;
              left: 43%;
            }
            #gestaltung {
              width: 60%;
              left: 14%;
            }
            #green__arrow {
              width: 75%;
            }
            #green__arrow2 {
              width: 65%;
            }
          }
        `}
      </style>
    </div>
  );
}
