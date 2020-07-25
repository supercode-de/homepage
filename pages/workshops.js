import HeaderWS from "../components/HeaderWS";
import HeaderCallToActionWS from "../components/HeaderCallToActionWS";
import { useWindowSize } from "../components/functions/windowSize";
import LerneProgrammierenWS from "../components/LerneProgrammierenWS";
import UnserCampusKurse from "../components/UnserCampusKurse";
import FooterCallToAction from "../components/FooterCallToAction";
import Layout from "../components/Layout";

export default function Workshop() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className="container">
          <main>
            <HeaderWS width={width} />
            <HeaderCallToActionWS />
            <LerneProgrammierenWS />
            <UnserCampusKurse width={width} />
            <FooterCallToAction month="September" />
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
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
