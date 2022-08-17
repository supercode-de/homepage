import HeaderKurse_neu from "../components/HeaderKurse_neu";
import HeaderCallToActionWS_neu from "../components/HeaderCallToActionWS_neu";
import FEoderFSKurse from "../components/FEoderFSKurse";
import Bootcamps from "../components/Bootcamps";
import AuflistungWS from "../components/AuflistungWS";
import BGSKurse from "../components/BGSKurse";
import UpToDate from "../components/UpToDate";
import FooterCallToActionKurse from "../components/FooterCallToActionKurse";
import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
import dates from "../components/data/dates.json";
import kurseData from "../components/data/kursedata.json";
import Alumni from "../components/Alumni";

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
