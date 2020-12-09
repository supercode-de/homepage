import HeaderWS_neu from "../components/HeaderWS_neu";
// import HeaderWS from "../components/HeaderWS";
import HeaderCallToActionWS_neu from "../components/HeaderCallToActionWS_neu";
import HeaderCallToActionWS from "../components/HeaderCallToActionWS";

import AnfängerBisBusinessWS from "../components/AnfängerBisBusinessWS";
import WorkITWS from "../components/WorkITWS";
import AuflistungWS from "../components/AuflistungWS";
import AVGSWS from "../components/AVGSWS_neu";
import AbsolventenWS from "../components/AbsolventenWS";
import AbsolventenWS_neu_v2 from "../components/AbsolventenWS_neu_v2";
import { useWindowSize } from "../components/functions/windowSize";
import LerneProgrammierenWS from "../components/LerneProgrammierenWS";
import UnserCampusKurse from "../components/UnserCampusKurse";
import UpToDate from "../components/UpToDate";
import FooterCallToAction from "../components/FooterCallToAction";
import FooterCallToActionWS from "../components/FooterCallToActionWS";

import Layout from "../components/Layout";
import dates from "../components/data/dates.json";
export default function Workshop() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className="container">
          <main>
            <HeaderWS_neu />
            {/* <HeaderWS width={width} /> */}
            <HeaderCallToActionWS_neu />
            {/* <HeaderCallToActionWS /> */}
            <AnfängerBisBusinessWS />
            <WorkITWS />

            <AuflistungWS />
            <AVGSWS />
            <AbsolventenWS_neu_v2 />
            {/* <AbsolventenWS /> */}

            {/* <LerneProgrammierenWS /> */}
            {/* <UnserCampusKurse width={width} /> */}

            <UpToDate />

            {/* <FooterCallToAction month={dates.WorkshopMonth} bald={true} /> */}
            <FooterCallToActionWS month={dates.WorkshopMonth} bald={true} />
          </main>

          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
