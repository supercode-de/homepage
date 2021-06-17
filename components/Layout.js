import Navigation_neu from './Navigation_neu';
// import Footer from "../components/Footer";
import Footer_neu from '../components/Footer_neu';
import Banner from '../components/Banner';
import Head from 'next/head';
import JetztAnmdelden from './JetztAnmelden';
import NavigationMobile from './NavigationMobile';
import React, { Component } from 'react';

import Pixel from './small/facebook/index';

class Layout extends Component {
  state = {
    isHidden: true,
    isHiddenMobile: true,
  };
  toggleJetztAnmelden = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };
  toggleNavigationMobile = () => {
    this.setState({ isHiddenMobile: !this.state.isHiddenMobile });
  };
  render() {
    return (
      <div id='super-layout'>
        <Head>
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
          <Navigation_neu
            toggleJetztAnmelden={this.toggleJetztAnmelden}
            isHidden={this.state.isHidden}
            toggleNavigationMobile={this.toggleNavigationMobile}
            isHiddenMobile={this.state.isHiddenMobile}
          />
        )}
        {this.props.oneComponent ? (
          ''
        ) : (
          <JetztAnmdelden
            toggleJetztAnmelden={this.toggleJetztAnmelden}
            isHidden={this.state.isHidden}
          />
        )}

        {this.props.oneComponent ? (
          ''
        ) : (
          <NavigationMobile
            toggleNavigationMobile={this.toggleNavigationMobile}
            isHiddenMobile={this.state.isHiddenMobile}
            toggleJetztAnmelden={this.toggleJetztAnmelden}
          />
        )}
        {this.props.children}
        {this.props.oneComponent ? '' : <Footer_neu />}

        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700|Fira+Sans:100,200,300,400,500,600,700,800,900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
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
            :root {
              --super-green: #3dd7ac;
              --super-lila: #5d3ede;
              --super-blau: #070021;
              --super-black: #03000f;
              --super-yellow: #ffda1a;
            }
            html {
              scroll-behavior: smooth;
            }
            .image-item-partner {
              align-self: center;
            }
            section .right h1 {
              font-size: 2em;
              color: #000;
            }
            section .right h2 {
              color: #000;
            }
            section .right img {
              width: 80% !important;
            }
            html,
            body {
              padding: 0;
              margin: 0;
            }
            * {
              box-sizing: border-box;
              font-family: 'Neue_Machina_Regular_400', sans-serif;
            }
            a,
            button {
              font-family: 'Neue_Machina_Regular_400', sans-serif;
            }
            p {
              font-size: 1.125rem;
              line-height: 1.563rem;
            }
            h1,
            h2 {
              font-size: 4em;
              line-height: 1.2em;
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
              width: 10%;
            }

            // .accordion__heading {
            //   display: flex;
            //   justify-content: space-between;

            // }

            .accordion__heading,
            .accordion__panel {
              padding: 2rem 3rem;
              background: var(--super-lila);
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
            // .bootcamps .react-multi-carousel-track {
            //   gap: 2rem;
            // }
            .bootcamps .react-multiple-carousel__arrow--right {
              right: 0.5%;
            }
            .bootcamps .react-multiple-carousel__arrow--left {
              left: 0.5%;
            }
            // Styling Carousel Blog End

            @media (max-width: 768px) {
              body {
                font-size: 10px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Layout;
