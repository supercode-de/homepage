import HeaderWS_neu from "../components/HeaderWS_neu";
// import HeaderWS from "../components/HeaderWS";
import HeaderCallToActionWS_neu from "../components/HeaderCallToActionWS_neu";
import HeaderCallToActionWS from "../components/HeaderCallToActionWS";

import AnfängerBisBusinessWS from "../components/AnfängerBisBusinessWS";
import WorkITWS from "../components/WorkITWS";
import AuflistungWS from "../components/AuflistungWS";
import AVGS from "../components/AVGSWS";
import AbsolventenWS from "../components/AbsolventenWS";
import { useWindowSize } from "../components/functions/windowSize";
import LerneProgrammierenWS from "../components/LerneProgrammierenWS";
import UnserCampusKurse from "../components/UnserCampusKurse";
import FooterCallToAction from "../components/FooterCallToAction";
import Layout from "../components/Layout";
import dates from "../components/data/dates.json";
export default function Workshop() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className="container">
          <main>
            <HeaderWS_neu width={width} />
            {/* <HeaderWS width={width} /> */}
            <HeaderCallToActionWS_neu />
            {/* <HeaderCallToActionWS /> */}
            <AnfängerBisBusinessWS width={width} />
            <WorkITWS width={width} />

            <AuflistungWS width={width} />
            <AVGS />
            <AbsolventenWS width={width} />

            {/* <LerneProgrammierenWS /> */}
            {/* <UnserCampusKurse width={width} /> */}
            <FooterCallToAction month={dates.WorkshopMonth} bald={true} />
          </main>

          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
