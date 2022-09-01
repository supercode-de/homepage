import Head from 'next/head';
import Pixel from './small/facebook/index';
import Banner from '../components/Banner';
import Navigation from './Navigation';
import JetztAnmelden from './JetztAnmelden';
import NavigationMobile from './NavigationMobile';
import Footer from './Footer';

import React, { Component } from 'react';

class LayoutMC extends Component {
  state = {
    isHidden: true,
    isHiddenMobile: true,
    overflow_y: false,
  };
  toggleJetztAnmelden = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };
  toggleNavigationMobile = () => {
    this.setState({
      isHiddenMobile: !this.state.isHiddenMobile,
      overflow_y: !this.state.overflow_y,
    });
  };
  toggleOverflow_y = () => {
    this.setState({ overflow_y: !this.state.overflow_y });
  };

  render() {
    return (
      <div id='super-layout'>
        <Head>
          <script src="https://static.clickskeks.at/18/d6/18d60b81-354e-4e9b-b119-078e881c7695/bundle.js" type="application/javascript"></script>
          <meta
            property='og:image:secure'
            content='https://www.super-code.de/img/page-preview.jpg'
          />
          <meta
            property='og:image'
            content='http://www.super-code.de/img/page-preview.jpg'
          />
          <meta property='og:url' content='https://www.super-code.de' />
          <meta property='og:type' content='Website' />
          <meta
            property='og:title'
            content='Super-code.de - Programmieren lernen war noch nie digitaler.'
          />
          <title>MicroCamps</title>
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
          <link rel='alternate icon' href='/favicon.ico' />
        </Head>
        <Pixel name='FACEBOOK_PIXEL_1' />
        {this.props.banner ? <Banner /> : <Banner />}
        {this.props.oneComponent ? (
          ''
        ) : (
          <Navigation
            navstroke={this.props.navstroke}
            dropdownColor={this.props.dropdownColor}
            toggleJetztAnmelden={this.toggleJetztAnmelden}
            isHidden={this.state.isHidden}
            toggleNavigationMobile={this.toggleNavigationMobile}
            isHiddenMobile={this.state.isHiddenMobile}
          />
        )}
        {this.props.oneComponent ? (
          ''
        ) : (
          <JetztAnmelden
            toggleJetztAnmelden={this.toggleJetztAnmelden}
            isHidden={this.state.isHidden}
          />
        )}

        {this.props.oneComponent ? (
          ''
        ) : (
          <NavigationMobile
            toggleNavigationMobile={this.toggleNavigationMobile}
            toggleNavigationMobileKurse={this.toggleNavigationMobileKurse}
            isHiddenMobile={this.state.isHiddenMobile}
            toggleJetztAnmelden={this.toggleJetztAnmelden}
          />
        )}

        {this.props.children}
        {this.props.oneComponent ? '' : <Footer />}

        <style jsx global>{`

          //=== RESETS START ===
          /* Box sizing rules */
            *,
            *::before,
            *::after {
                box-sizing: border-box;
            }

            /* Remove default margin */
            body,
            h1,
            h2,
            h3,
            h4,
            p,
            figure,
            blockquote,
            dl,
            dd {
                margin: 0;
                padding: 0;
            }

            /* Set core root defaults */
            html:focus-within {
                scroll-behavior: smooth;
            }

            /* Inherit fonts for inputs and buttons */
            input,
            button,
            textarea,
            select {
                font: inherit;
            }
            ul {
              list-style: none;
            }

          //=== RESETS END ===

            @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
            @font-face {
                font-family: "NeueMachina-Light";
                src: url("../fonts/NeueMachina-Light.otf") format("otf");
            }
            @font-face {
                font-family: "NeueMachina-Regular";
                src: url("../fonts/NeueMachina-Regular.otf") format("otf");
            }
            @font-face {
                font-family: "NeueMachina-Ultrabold";
                src: url("../fonts/NeueMachina-Ultrabold.otf") format("otf");
            }
            :root {
                // Colors
                --clr-super-white: hsl(0, 0%, 100%);
            
                --clr-super-yellow: hsl(50, 100%, 55%);
            
                --clr-super-green: hsl(163, 100%, 46%);
            
                --clr-super-lila: hsl(252, 71%, 56%);
                --clr-super-lila-shadow: hsl(252, 71%, 40%);
            
                --clr-super-blue: hsl(253, 100%, 6%);
            
                --clr-super-black: hsl(252, 100%, 3%);
                --clr-super-black--shadow: hsla(252, 100%, 3%, 0.3);
            // Die Farben wurden doppelt definiert, da diese Layout Datei teils auf andere Components zugreift, die mit den alten Variablen arbeitet. Fallback quasi
                --super-green: #3dd7ac;
                --super-lila: #5d3ede;
                --super-blau: #070021;
                --super-black: #03000f;
                --super-white: #fff;
                --super-yellow: #ffda1a;
                --super-red: #F10606;
            
                // Fonts
                --ff-reg-light: "NeueMachina-Light";
                --ff-reg-regular: "NeueMachina-Regular";
                --ff-reg-bold: "NeueMachina-Ultrabold";
                --ff-reg-logo: "Fira Sans", sans-serif;
                // Sizes
                // --fs-100: 0.6875rem; // 11px
                --fs-100: clamp(0.6875rem, 4vw, 0.6875rem);
                // --fs-200: 1rem; // 16px
                --fs-200: clamp(0.6rem, 4vw, 1rem);
                // --fs-300: 1.25rem; // 20px
                --fs-300: clamp(1rem, 4vw, 1.25rem);
                // --fs-400: 1.375rem; // 22px
                --fs-400: clamp(1.1rem, 4vw, 1.375rem);
                // --fs-500: 1.5rem; // 24px
                --fs-500: clamp(1.2rem, 4vw, 1.5rem);
                // --fs-550: 1.5rem; // 33px
                --fs-550: clamp(1.2rem, 4vw, 2.063rem);
                // --fs-600: 2.5rem; // 40px
                --fs-600: clamp(1.5rem, 4vw, 2.5rem);
                // --fs-700: 3.125rem; // 50px
                --fs-700: clamp(1.875rem, 4vw, 3.125rem);
                // --fs-800: 4.0625rem; // 65px
                --fs-800: clamp(2.4375rem, 3vw, 4.0625rem);
                // --fs-900: 5rem; // 80px
                --fs-900: clamp(1.875rem, 4vw, 5rem);
                // --fs-999: 9.375rem; // 150px
                --fs-999: clamp(4rem, 10vw, 9.375rem);
            }
            
            html {
                font-size: 100%;
                font-family: var(--ff-reg-regular);
            }
            .App {
                overflow: clip;
            }
            .mainContent {
                position: relative;
            }
            .wrap {
                width: min(100% - 5%, 1920px);
                padding: 10% 5%;
                margin-inline: auto;
                
            }
            // @include mq(lg) {
            //   padding: 10%;
            // }

            @keyframes rotation {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(359deg);
                }
            }
            
            a {
                font-family: var(--ff-reg-regular);
                color: inherit;
                transition: all 0.2s;
            }
            
            .active__navlink {
                border-bottom: 6px solid var(--clr-super-white);
            }
            
            p {
                font-family: var(--ff-reg-regular);
                font-size: var(--fs-300);
                line-height: 115%;
            }
            
            h1,
            h2,
            h3,
            h4,
            h5 {
                font-family: var(--ff-reg-regular);
            }
            .headlines_stroke {
              -webkit-text-stroke: 0.025em var(--clr-super-white);
              color: transparent;
          }
          .circle {
              white-space: nowrap;
          }
            h1 {
                font-size: var(--fs-600);
                font-weight: 400;
            }
            h2 {
                font-size: var(--fs-900);
                line-height: 110%;
                font-weight: 300;
            }
            h3 {
                font-size: var(--fs-800);
                line-height: 100%;
                font-weight: 300;
            }
            h4 {
                font-size: var(--fs-500);
                line-height: 30px;
            }
            h5 {
                font-size: var(--fs-600);
                margin: 5% 0 0 0;
                line-height: 39px;
            }
            
            .hs-form-9384135a-d6de-4c51-9497-c2d167e58afd_e65059cb-2396-45fa-8d3d-a15aa60599c1 .hs-button:hover {
                opacity: 0.8;
            }
            //  button styles
            .btn {
              display: inline-flex;
              cursor: pointer;
              text-align: center;
              padding: 2% 6%;
              border-radius: 100px;
              text-decoration: none;
              font-weight: 800;
              transition: all 0.2s;
            }
            .btn:hover {
              opacity: 0.8;
            }
            // loading animation
            .loading-Div {
              margin: 10% auto;
              text-align: center;
            }
            .loading-Div .circle {
              font-size: 10rem;
              transform: scale(1);
              transform-origin: center center;
              animation: rotation 5s linear infinite;
            }


            // unsere-story allgemeine styles start
            .our-story-wrapper .content-wrapper {
              max-width: 955px;
              margin-bottom: 3.125rem;
            }
            .our-story-wrapper h2:not(.lastBlueSection h2, .bigPictureSection .textWrap h2) {
              color: var(--clr-super-lila);
              font-size: var(--fs-800);
              margin-bottom: 2%;
            }
            .our-story-wrapper p:not(.our-story-wrapper p) {
              font-size: var(--fs-200);
              max-width: 80%;
            }
            @media only screen and (max-width: 576px) {
              .meet-team-wrapper {
                padding: 3.125rem 4.5rem;
              }
            }

            // unsere-story allgemeine styles end
          `}
        </style>
      </div>
    );
  }
}

export default LayoutMC;
