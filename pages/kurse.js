import Layout from "../components/Layout";
import HeaderKurse_neu from "../components/HeaderKurse_neu";
import HeaderCallToActionWS_neu from "../components/HeaderCallToActionWS_neu";
import FEoderFSKurse from "../components/FEoderFSKurse";
import Bootcamps from "../components/Bootcamps";
import AuflistungWS from "../components/WS_Auflistung";
import BGSKurse from "../components/BGSKurse";
import Alumni from "../components/Alumni";
import Newsletter from "../components/Newsletter";
import Kurse_FooterCTA from "../components/Kurse_FooterCTA";

import kurseData from "../components/data/kursedata.json";
import { useWindowSize } from "../components/functions/windowSize";
export default function Workshop() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className="container">
          <main>
            <HeaderKurse_neu />
            <HeaderCallToActionWS_neu />
            <FEoderFSKurse />
            <Bootcamps kurseData={kurseData[0].kurseKursePage} />
            <AuflistungWS />
            <BGSKurse />
            <Alumni />
            <Newsletter />
            <Kurse_FooterCTA />
          </main>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
