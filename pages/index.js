import FooterCallToAction from "../components/FooterCallToAction";
import UnserCampus from "../components/UnserCampus";
import FAQ from "../components/FAQ";
import MeldeDich from "../components/MeldeDich";
import Header from "../components/Header";
import HeaderCallToAction from "../components/HeaderCallToAction";
import Zukunft from "../components/Zukunft";
import Weiterbildung from "../components/Weiterbildung";
import Bewerbungsprozess from "../components/Bewerbungsprozess";
import SuperPartner from "../components/SuperPartner";
import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
import Finanzierung from "../components/Finanzierung";
import Head from 'next/head'

export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <Header width={width} />
            <HeaderCallToAction />
            <Zukunft width={width} />
            <UnserCampus width={width} />
            <Weiterbildung />
            <SuperPartner width={width} />
            <Finanzierung />
            <Bewerbungsprozess />
            <MeldeDich />
            <FAQ width={width} />
            <FooterCallToAction month="November" />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return (
      <Head>
        <meta property="og:image:secure" content="https://www.super-code.de/img/page-preview.jpg" />
        <meta property="og:image" content="http://www.super-code.de/img/page-preview.jpg" />
        <meta property="og:url" content="https://www.super-code.de" />
        <meta property="og:type" content="Website" />
        <meta property="og:title" content="Super-code.de - Programmieren lernen war noch nie digitaler." />
        {/* <meta property="og:description" content="/img/page-preview.jpg" /> */}
        <title>Super-code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
  }
}
