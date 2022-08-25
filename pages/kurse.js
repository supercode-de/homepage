import Layout from "../components/Layout";
import WS_Header from "../components/WS_Header";
import WS_HeaderCTA from "../components/WS_HeaderCTA";
import LerneProgrammieren from "../components/LerneProgrammieren";
import Bootcamps from "../components/Bootcamps";
import AuflistungWS from "../components/WS_Auflistung";
import Kurse_BGS from "../components/Kurse_BGS";
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
            <WS_Header img="/img/kurse_header.png" kurs="Bootcamps"/>
            <WS_HeaderCTA />
            <LerneProgrammieren />
            <Bootcamps kurseData={kurseData[0].kurseKursePage} />
            <AuflistungWS />
            <Kurse_BGS />
            <Alumni />
            <Newsletter />
            <Kurse_FooterCTA bgColor="var(--super-white)" color="var(--super-black)"/>
          </main>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
