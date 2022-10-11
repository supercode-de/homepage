import React from 'react';
import Link from 'next/link';

const NavigationMobileKurse = (props) => {
  return (
    <div
      id='navigation-mobile'
      className={props.toggleKurse ? 'isHidden' : 'isNotHidden'}
    >
      <button
        className='navigation-mobile-close-kurse'
        onClick={() => props.closeToggleKurse()}
      >
        &#10539;
      </button>

      <div className='navigation-mobile-container'>
        <ul>
          <li>
            <Link href='/kurse/fullstack'>
              <a onClick={props.toggleNavigationMobile}>
                Fullstack Development
              </a>
            </Link>
          </li>

          <li>
            <Link href='/kurse/frontend'>
              <a onClick={props.toggleNavigationMobile}>Frontend Development</a>
            </Link>
          </li>

          <li>
            <Link href='/kurse/ux-ui-kurs'>
              <a onClick={props.toggleNavigationMobile}>UX/UI–Design</a>
            </Link>
          </li>
          {/* <li>
            <a onClick={props.toggleJetztAnmelden}>Kontakt</a>
          </li> */}
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
            z-index: 99998;
            display: flex;
            justify-content: center;
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
          .navigation-mobile-close-kurse {
            top: 60px;
            z-index: 99998;
            right: 20px;
            cursor: pointer;
            position: absolute;
            box-shadow: none;
            border: none;
            border-radius: 0;
            padding: 0;
            margin: 0;
            color: var(--super-white);
            background: none;
            font-weight: 300;
            font-size: 4em;
            // font-size: clamp(1.25rem, 0.7rem + 2.75vw, 4rem);
            height: 4vmax;
            min-height: 50px;
            width: 4vmax;
            min-width: 50px;
          }
          .navigation-mobile-close:hover {
            color: var(--super-green);
          }

          ul {
            text-align: center;
            list-style-type: none;
            display: flex;
            flex-direction: column;
            font-size: clamp(1.25rem, 0.7rem + 2.75vw, 4rem);
            text-transform: none;
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
            color: #fff;
            cursor: pointer;
          }
          a:active {
            color: var(--super-lila);
          }

          .navigation-mobile-left h1 {
            font-size: 4.3em;
            font-style: normal;
            font-weight: 800;
            margin: 0;
            line-height: 1em;
            letter-spacing: -1.5px;
          }
          .navigation-mobile-left p {
            font-size: 1.1em;
            line-height: 1.08;
            font-weight: 400;
            letter-spacing: 2px;
            margin-bottom: 14px;
            line-height: 24px;
          }
          .isNotHidden {
            right: 0;
          }
          @media screen and (max-width: 768px) {
          }
        `}
      </style>
    </div>
  );
};

export default NavigationMobileKurse;
