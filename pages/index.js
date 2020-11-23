import FooterCallToAction from "../components/FooterCallToAction";
import UnserCampus from "../components/UnserCampus";
import FAQ from "../components/FAQ";
import MeldeDich from "../components/MeldeDich";
import Header_neu from "../components/Header_neu";
import HeaderCallToAction_neu from "../components/HeaderCallToAction_neu";
import Zukunft from "../components/Zukunft";
import Weiterbildung_neu from "../components/Weiterbildung_neu";
import Bewerbungsprozess from "../components/Bewerbungsprozess";
// import SuperPartner from "../components/SuperPartner";
import SuperStipendium from "../components/SuperStipendium";
import CertquaBonn from "../components/CertquaBonn";
import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
import Finanzierung from "../components/Finanzierung";
import Head from "next/head";
import Blog_neu from "../components/Blog_neu";
import dates from "../components/data/dates.json";
import FooterSitemap from "../components/FooterSitemap";
export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <Header_neu width={width} />
            <HeaderCallToAction_neu />
            <Zukunft width={width} />
            <UnserCampus width={width} />
            <Weiterbildung_neu width={width} />
            {/* <SuperPartner width={width} /> */}
            <SuperStipendium width={width} />
            <CertquaBonn />
            <Finanzierung />
            <Bewerbungsprozess width={width} />
            <MeldeDich />
            <Blog_neu width={width} />

            <FAQ width={width} />
            <FooterCallToAction month={dates.VzTzMonth} />
            <FooterSitemap />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return (
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
    );
  }
}
