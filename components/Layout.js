import Navigation from "./Navigation";

import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Head from "next/head";
import JetztAnmdelden from "./JetztAnmelden";
import React, { Component } from "react";

import Pixel from "./small/facebook/index";

class Layout extends Component {
  state = {
    isHidden: true,
  };
  toggleJetztAnmelden = () => {
    this.setState({ isHidden: !this.state.isHidden });
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
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Pixel name="FACEBOOK_PIXEL_1" />
        {this.props.banner ? <Banner /> : <Banner />}
        {this.props.oneComponent ? (
          ""
        ) : (
          <Navigation
            toggleJetztAnmelden={this.toggleJetztAnmelden}
            isHidden={this.state.isHidden}
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
        {this.props.children}
        {this.props.oneComponent ? "" : <Footer />}

        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700|Fira+Sans:100,200,300,400,500,600,700,800,900&display=swap');
            html {
              scroll-behavior: smooth;
            }  
            .image-item-partner {
              align-self: center
            }  
              section .right h1{
              font-size:2em;
              color:#000;
            }    
              section .right h2{
              color:#000;
            } 
            section .right img{
              width:80% !important;
            }
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: 'Fira Sans', sans-serif;
            }
            * {
              box-sizing: border-box;
            }
            // Styling Carousel Blog Start
            #blog .react-multiple-carousel__arrow {
              background: none;
              top: -1px;
            }
            #blog .react-multiple-carousel__arrow--right {
              right: 6%;
              left: auto;
            }
            #blog .react-multiple-carousel__arrow--left {
              right 10%;
              left: auto;
            }

            .--background-grid__black-white--dots {
              background: linear-gradient(
                90deg,
                #03000f calc(100vw / 12 - 1px),
                transparent 1%
              ),
              linear-gradient(
                #03000f calc(100vw / 12 - 1px),
                transparent 1%
              ),
              #fff;
              background-size: calc(100vw / 12) calc(100vw / 12);
            }

            .--background-grid__white-red--lines {
              background-color: #fff;
              background-image: linear-gradient(
                  to right,
                  rgba(255, 0, 0, 0.25) 0,
                  rgba(255, 0, 0, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                ),
                linear-gradient(
                  to bottom,
                  rgba(255, 0, 0, 0.25) 0,
                  rgba(255, 0, 0, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                );
              background-position: 0 0, 0 0;
              background-size: calc(100vw / 12) calc(100vw / 12);
            }

            .--background-grid__black-red--lines {
              background-color: #03000F;
              background-image:
                linear-gradient(
                  to right,
                  rgba(255, 0, 0, 0.25) 0,
                  rgba(255, 0, 0, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                ),
                linear-gradient(
                  to bottom,
                  rgba(255, 0, 0, 0.25) 0,
                  rgba(255, 0, 0, 0.25) 1px,
                  transparent 1px,
                  transparent 100%
                )
              ;
              background-position: 0 0, 0 0;
              background-size: calc(100vw / 12) calc(100vw / 12);
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
