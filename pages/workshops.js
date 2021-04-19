import HeaderWS_neu from "../components/HeaderWS_neu";
import HeaderCallToActionWS_neu from "../components/HeaderCallToActionWS_neu";
import AnfängerBisBusinessWS from "../components/AnfängerBisBusinessWS";
import WorkITWS from "../components/WorkITWS";
import AuflistungWS from "../components/AuflistungWS";
import AVGSWS from "../components/AVGSWS_neu";
import AbsolventenWS_neu_v2 from "../components/AbsolventenWS_neu_v2";
import UpToDate from "../components/UpToDate";
import FooterCallToActionWS from "../components/FooterCallToActionWS";

import { useWindowSize } from "../components/functions/windowSize";
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
            <HeaderCallToActionWS_neu />
            <AnfängerBisBusinessWS />
            <WorkITWS />
            <AuflistungWS />
            <AVGSWS />
            <AbsolventenWS_neu_v2 />
            <UpToDate />
            <FooterCallToActionWS month={dates.WorkshopMonth} bald={true} />
          </main>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
