import React, { useState } from 'react';
import Link from 'next/link';
import NavigationMobileKurse from './NavigationMobileKurse';

const NavigationMobile = (props) => {
  const [toggleKurse, setToggleKurse] = useState(true);

  const closeToggleKurse = () => {
    setToggleKurse(true);
  };
  return (
    <div
      id='navigation-mobile'
      className={props.isHiddenMobile ? 'isHidden' : 'isNotHidden'}
    >
      <NavigationMobileKurse
        closeToggleKurse={closeToggleKurse}
        toggleKurse={toggleKurse}
      />
      <button
        className='navigation-mobile-close'
        onClick={props.toggleNavigationMobile}
      >
        &#10539;
      </button>

      <div className='navigation-mobile-container'>
        <ul>
          <li>
            <a onClick={() => setToggleKurse(false)}>Bootcamps</a>
          </li>

          {/* <li>
            <Link href='/workshops'>
              <a onClick={props.toggleNavigationMobile}>Workshops</a>
            </Link>
          </li> */}
          <li>
            <Link href="/microcamps" passHref>
              <a onClick={props.toggleNavigationMobile}>MicroCamps</a>
            </Link>
          </li>
          <li>
            <Link href='/team' passHref>
              <a onClick={props.toggleNavigationMobile}>Team</a>
            </Link>
          </li>
          <li>
              <Link href="/microcamps/unsere-story" passHref>
                <a onClick={props.toggleNavigationMobile}>Unsere Story</a>
              </Link>
            </li>
          <li>
            <Link href='/#faq' passHref>
              <a onClick={props.toggleNavigationMobile}>FAQ</a>
            </Link>
          </li>
          <li>
            <a onClick={props.toggleJetztAnmelden}>Kontakt</a>
          </li>
          <li>
            <Link href='/blog' passHref>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
          #navigation-mobile {
            position: fixed;
            background: var(--super-black);
            top: 0;
            bottom: 0;
            color: var(--super-green);
            transition: all 0.5s;
            width: 100%;
            height: 200vh;
            z-index: 999;
            display: flex;
            justify-content: center;
            overflow-y: hidden;
            // das ist notwendig, weil auf ios safari beim scrollen die adresszeile unten immer eine lücke hat entstehen lassen, so dass man auf die webseite hindurch gucken konnte. das löst es halbwegs
            transform: translate3d(0,0,0);
          }
          .isHidden {
            right: -100%;
          }
          .isNotHidden {
            right: -100%;
          }
          .hbspt-form {
            width: 500px;
          }

          .navigation-mobile-container {
            padding: 5em;
            // display: block;
            height: 100vh;
            display: flex;
            align-items: center;
          }
          .navigation-mobile-close {
            top: 60px;
            z-index: 9998;
            right: 20px;
            cursor: pointer;
            position: absolute;
            box-shadow: none;
            border: none;
            border-radius: 0;
            padding: 0;
            margin: 0;
            color: #f0f0f0;
            background: none;
            font-weight: 300;
            font-size: 4em;
            height: 4vmax;
            min-height: 50px;
            width: 4vmax;
            min-width: 50px;
          }
          .navigation-mobile-close:hover {
            color: var(--super-green);
          }

          ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            // font-size: 4em;
            font-size: clamp(1.25rem, 0.7rem + 2.75vw, 4rem);
            text-transform: uppercase;
            justify-content: flex-end;
            align-items: center;
            padding: 0;
          }
          ul li {
            margin: 20px 0;
          }
          a {
            text-decoration: none;
          }
          a:visited {
            color: var(--super-green);
          }
          a:hover {
            text-decoration: underline;
            color: var(--super-white);
            cursor: pointer;
          }
          a:active {
            color: var(--super-lila);
          }

          .isNotHidden {
            right: 0;
          }
        `}
      </style>
    </div>
  );
};

export default NavigationMobile;
