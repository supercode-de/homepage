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
              src: url('/FiraSans-Regular.otf')
            }
            * {
              padding: 0;
              margin: 0;
              box-sizing: border-box;
              font-family: 'Neue_Machina_Regular_400', sans-serif;
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
            html {
              scroll-behavior: smooth;
            }
            body {
              overflow-y: ${this.state.overflow_y ? 'hidden' : null};
            }

            h1,
            h2 {
              font-size: 5rem;
              line-height: 1.1em;
            }
            h3 {
              font-size: 1.2rem;
            }
            p {
              font-size: 1.563rem;
              // text-align: left;
              line-height: 115%;
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
            
            // BACKGROUND STYLES
            .lilaGitter {
              background-color: var(--super-lila);
              background-image: linear-gradient(
                  to right,
                  rgba(255, 255, 255, 0.25) 0,
                  rgba(255, 255, 255, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                ),
                linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.25) 0,
                  rgba(255, 255, 255, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                );
              background-size: calc(100vw / 12) calc(100vw / 12);
            }
            .blackGitter {
              background-color: var(--super-black);
              background-image: linear-gradient(
                  to right,
                  rgba(230, 230, 230, 0.25) 0,
                  rgba(230, 230, 230, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                ),
                linear-gradient(
                  to bottom,
                  rgba(230, 230, 230, 0.25) 0,
                  rgba(230, 230, 230, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                );
              background-size: calc(100vw / 12) calc(100vw / 12);
            }
            .blueGitter {
              background-color: var(--super-blau);
              background-image: linear-gradient(
                  to right,
                  rgba(255, 255, 255, 0.25) 0,
                  rgba(255, 255, 255, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                ),
                linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.25) 0,
                  rgba(255, 255, 255, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                );
              background-size: calc(100vw / 12) calc(100vw / 12);
            }
            .whiteGreenDots {
              background: linear-gradient(
                  90deg,
                  #fff calc(100vw / 12 - 1.5px),
                  transparent 1%
                ),
                linear-gradient(#fff calc(100vw / 12 - 1.5px), transparent 1%),
                var(--super-green);
              background-size: calc(100vw / 12) calc(100vw / 12);
            }

            img:not(#tagesablauf, .menu-button, #arrow-img img, .start-termin img, .text1, .text2, .text3, .text4, .text5) {
              border-radius: 50px;
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
              color: #fff;
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
            @media (max-width: 320px) {
              .accordion__heading {
                padding: 1.125rem;
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
          `}
        </style>
      </div>
    );
  }
}

export default Layout;
