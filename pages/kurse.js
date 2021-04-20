import HeaderKurse_neu from "../components/HeaderKurse_neu";
import HeaderCallToActionWS_neu from "../components/HeaderCallToActionWS_neu";
import FEoderFSKurse from "../components/FEoderFSKurse";
import Bootcamps from "../components/Bootcamps";
// import SuperStipendium_neu from "../components/SuperStipendium_neu";
import AuflistungWS from "../components/AuflistungWS";
import BGSKurse from "../components/BGSKurse";
import AbsolventenWS_neu_v2 from "../components/AbsolventenWS_neu_v2";
import UpToDate from "../components/UpToDate";
import FooterCallToActionKurse from "../components/FooterCallToActionKurse";

import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
import dates from "../components/data/dates.json";
import kurseData from "../components/data/testData.json";

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
            {/* <SuperStipendium_neu /> */}
            <Bootcamps kurseData={kurseData[0].kurseKursePage}/>
            <AuflistungWS />
            <BGSKurse />
            <AbsolventenWS_neu_v2 />
            <UpToDate />
            <FooterCallToActionKurse month={dates.WorkshopMonth} bald={true} />
          </main>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
