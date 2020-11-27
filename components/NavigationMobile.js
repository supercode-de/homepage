import React from "react";
//import './navigation-mobile.css'
import Link from "next/link";

const JetztAnmdelden = (props) => {
  return (
    <div
      id="navigation-mobile"
      className={props.isHiddenMobile ? "isHidden" : "isNotHidden"}
    >
      <button
        className="navigation-mobile-close"
        onClick={props.toggleNavigationMobile}
      >
        &#10539;
      </button>

      <div className="navigation-mobile-container">
        <ul>
          <li>
            <Link href="/kurse">
              <a onClick={props.toggleNavigationMobile}>Kurse</a>
            </Link>
          </li>

          <li>
            <Link href="/workshops">
              <a onClick={props.toggleNavigationMobile}>Workshops</a>
            </Link>
          </li>
          <li>
            <Link href="/#faq">
              <a onClick={props.toggleNavigationMobile}>FAQ</a>
            </Link>
          </li>
          <li>
            <a onClick={props.toggleJetztAnmelden}>Kontakt</a>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          #navigation-mobile {
            position: fixed;
            padding: 5em;
            background: #03000f;
            top: 0;
            bottom: 0;
            color: #3dd7ac;
            overflow-y: scroll;
            transition: all 0.5s;
            width: 100%;
            z-index: 99998;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Neue_Machina_Regular_400";
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
            display: block;
          }
          .navigation-mobile-close {
            top: 60px;
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
            color: #3dd7ac;
          }

          ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            font-size: 4em;
            text-transform: uppercase;
            justify-content: flex-end;
            align-items: center;
          }
          ul li {
            margin: 20px 0;
          }
          a {
            text-decoration: none;
          }
          a:visited {
            color: #3dd7ac;
          }
          a:hover {
            text-decoration: underline;
            color: #fff;
            cursor: pointer;
          }
          a:active {
            color: #5d3ede;
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

          @media screen and (max-width: 768px) {
            .isNotHidden {
              right: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default JetztAnmdelden;
