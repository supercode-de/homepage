import Head from "next/head";
import HeaderWS from "../components/HeaderWS";
import HeaderCallToActionWS from "../components/HeaderCallToActionWS";
import { useWindowSize } from "../components/functions/windowSize";
import LerneProgrammieren from "../components/LerneProgrammieren";

export default function Workshop() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <div className="container">
        <Head>
          <title>Super-code</title>
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" /> */}
        </Head>
        <main>
          <HeaderWS width={width} />
          <HeaderCallToActionWS />
          <LerneProgrammieren />
          {/* <Navigation /> */}
          {/* <Header width={width} /> */}

          {/* <Zukunft width={width} /> */}
          {/* <UnserCampus width={width} /> */}
          {/* <Weiterbildung /> */}
          {/* <MeldeDich /> */}
          {/* <Bewerbungsprozess /> */}
          {/* <FAQ /> */}
          {/* <FooterCallToAction month="Mai" /> */}
          {/* <Footer /> */}
        </main>

        <style jsx>{``}</style>

        <style jsx global>{`
           @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700|Fira+Sans:100,200,300,400,500,600,700,800,900&display=swap');        
           html,
           body {
             padding: 0;
             margin: 0;
             font-family: 'Fira Sans', sans-serif;
           }
   
           * {
             box-sizing: border-box;
           }
           @media (max-width: 768px) {
             body {
               font-size: 10px;
             }
             }
         }
         `}</style>
      </div>
    );
  } else {
    return "";
  }
}
