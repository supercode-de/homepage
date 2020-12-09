import HeaderKurse from "../components/HeaderKurse";
import HeaderCallToActionKurse from "../components/HeaderCallToActionKurse";
import { useWindowSize } from "../components/functions/windowSize";
import LerneProgrammierenKurse from "../components/LerneProgrammierenKurse";
import UnserCampusKurse from "../components/UnserCampusKurse";
import FooterCallToAction from "../components/FooterCallToAction";
import Layout from "../components/Layout";
import Absolvente from "../components/Absolvente";
import dates from "../components/data/dates.json";

import HeaderKurse_neu from "../components/HeaderKurse_neu";
import HeaderCallToActionWS_neu from "../components/HeaderCallToActionWS_neu";
import FEoderFSKurse from "../components/FEoderFSKurse";
import SuperStipendium_neu from "../components/SuperStipendium_neu";
import AuflistungWS from "../components/AuflistungWS";
import BGSKurse from "../components/BGSKurse";
import AbsolventenWS_neu_v2 from "../components/AbsolventenWS_neu_v2";
import UpToDate from "../components/UpToDate";
import FooterCallToActionKurse from "../components/FooterCallToActionKurse";

export default function Workshop() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className="container">
          <main>
            {/* <HeaderKurse width={width} />
                        <HeaderCallToActionKurse />
                        <LerneProgrammierenKurse />
                        <UnserCampusKurse width={width} />
                        <Absolvente />
                        <FooterCallToAction month={dates.VzTzMonth} /> */}
            <HeaderKurse_neu />

            <HeaderCallToActionWS_neu />
            <FEoderFSKurse />
            <SuperStipendium_neu />

            <AuflistungWS />
            <BGSKurse />

            <AbsolventenWS_neu_v2 />
            <UpToDate />
            <FooterCallToActionKurse month={dates.WorkshopMonth} bald={true} />
          </main>

          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
