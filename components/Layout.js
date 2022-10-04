import Head from 'next/head';
import Pixel from './small/facebook/index';
import Banner from '../components/Banner';
import Navigation from './Navigation';
import JetztAnmelden from './JetztAnmelden';
import NavigationMobile from './NavigationMobile';
import Footer from './Footer';

import React, { Component } from 'react';

class Layout extends Component {
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
          {/* <script src="https://static.clickskeks.at/18/d6/18d60b81-354e-4e9b-b119-078e881c7695/bundle.js" type="application/javascript"></script> */}
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
          {/* <meta property="og:description" content="/img/page-preview.jpg" /> */}
          <title>Super-code</title>
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

        <style jsx global>
          {`
            @font-face {
              font-family: 'Neue_Machina_Regular_400';
              src: url('/Neue_Machina_Regular_400.otf');
            }
            @font-face {
              font-family: 'Neue_Machina_Ultrabold';
              src: url('/Neue_Machina_Ultrabold.otf');
            }
            @font-face {
              font-family: 'Neue_Machina_Light';
              src: url('/Neue_Machina_Light.otf');
            }
            @font-face {
              font-family: "FiraSans-Regular";
              src: url('/FiraSans-Regular.ttf')
            }
            * {
              padding: 0;
              margin: 0;
              box-sizing: border-box;
              font-family: 'Neue_Machina_Regular_400', sans-serif;
              line-height: 115%;
            }
            :root {
              --super-green: #3dd7ac;
              --super-lila: #5d3ede;
              --super-blau: #070021;
              --super-black: #03000f;
              --super-white: #fff;
              --super-yellow: #ffda1a;
              --super-red: #F10606;
            }
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
            html {
              scroll-behavior: smooth;
            }
            body {
              overflow-y: ${this.state.overflow_y ? 'hidden' : null};
            }

            h1,
            h2 {
              // font-size: 5rem;
              font-size: clamp(1.5625rem, 0.875rem + 3.4375vw, 5rem);
            }
            h3 {
              font-size: 1.2rem;
            }
            p {
              // font-size: 1.563rem;
              font-size: clamp(1rem, 0.8875rem + 0.5625vw, 1.5625rem);
            }
            .super-code {
              position: absolute;
              top: 30px;
              left: 7rem;
              color: var(--super-white);
              font-size: 1.3rem;
              font-family: 'FiraSans-Regular', sans-serif;
            }
            button{
              border-radius: 5rem; 
            }

            img:not(#tagesablauf, .menu-button, #arrow-img img, .start-termin img, .text1, .text2, .text3, .text4, .text5, .accordion-visible img, .marqueeLogos, #supercodeC) {
              border-radius: clamp(1.5625rem, 1.25rem + 1.5625vw, 3.125rem);
            }

            // styling accordion auf team seite für stellenausschreibungen
            .accordion__button {
              display: flex;
              justify-content: space-between;
              width: 100%;
              padding: 20px 0;
            }
            .accordion__button:hover {
              cursor: pointer;
            }

            .accordion__button svg {
              width: 3%;
            }

            .accordion__heading,
            .accordion__panel {
              background: var(--super-lila);
            }
            .accordion__heading {
              padding: 2rem 3rem;
            }
            .accordion__panel {
              padding: 0 3rem 4rem;
            }
            .accordion__heading:hover,
            .accordion__heading:hover + .accordion__panel {
              background: var(--super-blau);
            }
            .accordion__heading {
              color: var(--super-white);
              font-size: 1.875rem;
            }

            .accordion__item {
              border: 4px solid var(--super-green);
              margin-bottom: 3rem;
              border-radius: 100px;
              overflow: hidden;
            }
            .accordion__button[aria-expanded='true'] svg,
            .accordion__button[aria-selected='true'] svg {
              transform: rotate(180deg);
            }

            // media queries für die accordion Styles
            @media (max-width: 425px) {
              .accordion__item {
                border-radius: 40px;
                margin-bottom: 0;
              }
              .accordion__heading {
                padding: 1.125rem;
              }
              .accordion__panel {
                padding: 0 1rem 2rem;
              }
              .stellen-cta a {
                width: 100%;
              }
            }
            @media (max-width: 320px) {
              .accordion__heading {
                font-size: 1.2rem;
              }

            }

            // FAQ STYLES START
            .Collapsible__contentOuter {
              margin-top: 10px;
            }
            .Collapsible__contentInner p {
              font-size: 1.4em;
            }
            // FAQ STYLES END

            // BLOGSTYLES Start
            // Container in dem der Blogarticle sitzt
            #blogDetails .right>p {
              width: 88%;
              margin: auto;
              color: #fff;
            }

            #blogDetails .right h1 {
              font-size: 4em;
              margin-top: 100px;
            }
            #blogDetails .right img {
              width: 100%;
              margin-top: 40px;
            }
            #blogDetails .right p {
              font-size: 1.125rem;
              line-height: 1.563rem;
              text-align: left;
            }

            #blogDetails .right p p {
              width: 90%;
              margin: 0 auto;
            }

            // Vermuteter Blogstyle
            #blogDetails .right a {
              color: #fff;
            }
            
            #blogDetails .right h2 {
              text-align: left;
            }
            #blogDetails .right h3 {
              font-family: 'Neue_Machina_Light';
              font-size: 1.875rem;
              line-height: normal;
              margin-top: 60px;
              margin-bottom: 20px;
            }

            #blogDetails .right em {
              font-style: normal;
            }

            // Styling Carousel Blog Start

            .react-multiple-carousel__arrow {
              z-index: 1;
            }

            #blog .react-multiple-carousel__arrow {
              background: none;
              // top: -1px;
            }
            #blog .react-multiple-carousel__arrow--right {
              right: 1%;
            }
            #blog .react-multiple-carousel__arrow--left {
              left: 1%;
            }

            .bootcamps .react-multiple-carousel__arrow--right {
              right: 0.5%;
            }
            .bootcamps .react-multiple-carousel__arrow--left {
              left: 0.5%;
            }
            // Styling Carousel Blog End
            // BLOGSTYLES End

            @media (max-width: 768px) {
              body {
                font-size: 10px;
              }

              #blogDetails .right h1 {
                font-size: 2rem;
              }
              #blogDetails .right h2 {
                font-size: 2rem;
              }
              #blogDetails .right h3 {
                font-size: 1.5rem;
              }
              #blogDetails .right>p {
                width: 100%;
                margin-top: 50px;
              }
            }
            @media (max-width: 568px) {
              #blogDetails .right h1 {
                font-size: 1.4rem;
              }
              #blogDetails .right h2 {
                font-size: 1.4rem;
              }
            }
            @media (max-width: 498px) {
              #blogDetails .right h1 {
                font-size: 1rem;
              }
              #blogDetails .right h2 {
                font-size: 1.1rem;
              }
              #blogDetails .right p {
                width: 100%;
                margin: auto;
              }
            }

            @media (max-width: 458px) {
              #blogDetails .right h1 {
                font-size: 2em;
              }
              #blogDetails .right h3 {
                margin-top: 50px;
              }
              #blogDetails .right img {
                width: 70% !important;
              }
            }
          }
          `}
        </style>
      </div>
    );
  }
}

export default Layout;
