import Navigation_neu from "./Navigation_neu";

import Footer from "../components/Footer";
import Footer_neu from "../components/Footer_neu";
import Banner from "../components/Banner";
import Head from "next/head";
import JetztAnmdelden from "./JetztAnmelden";
import NavigationMobile from "./NavigationMobile";
import React, { Component } from "react";

import Pixel from "./small/facebook/index";

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
      <div id="super-layout">
        <Head>
          <meta
            property="og:image:secure"
            content="https://www.super-code.de/img/page-preview.jpg"
          />
          <meta
            property="og:image"
            content="http://www.super-code.de/img/page-preview.jpg"
          />
          <meta property="og:url" content="https://www.super-code.de" />
          <meta property="og:type" content="Website" />
          <meta
            property="og:title"
            content="Super-code.de - Programmieren lernen war noch nie digitaler."
          />
          {/* <meta property="og:description" content="/img/page-preview.jpg" /> */}
          <title>Super-code</title>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="alternate icon" href="/favicon.ico" />


        </Head>
        <Pixel name="FACEBOOK_PIXEL_1" />
        {this.props.banner ? <Banner /> : <Banner />}
        {this.props.oneComponent ? (
          ""
        ) : (
          <Navigation_neu
            toggleJetztAnmelden={this.toggleJetztAnmelden}
            isHidden={this.state.isHidden}
            toggleNavigationMobile={this.toggleNavigationMobile}
            isHiddenMobile={this.state.isHiddenMobile}
          />
        )}
        {this.props.oneComponent ? (
          ""
        ) : (
          <JetztAnmdelden
            toggleJetztAnmelden={this.toggleJetztAnmelden}
            isHidden={this.state.isHidden}
          />
        )}

        {this.props.oneComponent ? (
          ""
        ) : (
          <NavigationMobile
            toggleNavigationMobile={this.toggleNavigationMobile}
            isHiddenMobile={this.state.isHiddenMobile}
            toggleJetztAnmelden={this.toggleJetztAnmelden}
          />
        )}
        {this.props.children}
        {this.props.oneComponent ? "" : <Footer_neu />}

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700|Fira+Sans:100,200,300,400,500,600,700,800,900&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap");
          @font-face {
            font-family: "Neue_Machina_Regular_400";
            src: url("/Neue_Machina_Regular_400.otf");
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
            font-family: "Fira Sans", sans-serif;
          }
          * {
            box-sizing: border-box;
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

          // Styling Carousel Blog End
          @media (max-width: 768px) {
            body {
              font-size: 10px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
