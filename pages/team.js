// import FooterCallToAction from "../components/FooterCallToAction";
// import UnserCampus from "../components/UnserCampus";
import FAQ from "../components/FAQ";
// import MeldeDich from "../components/MeldeDich";
// import Header from "../components/Header";
// import HeaderCallToAction from "../components/HeaderCallToAction";
// import Zukunft from "../components/Zukunft";
// import Weiterbildung from "../components/Weiterbildung";
// import Bewerbungsprozess from "../components/Bewerbungsprozess";
// import SuperPartner from "../components/SuperPartner";
import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
// import Finanzierung from "../components/Finanzierung";
// import dates from "../components/data/dates.json";
import HeaderTeam from "../components/HeaderTeam";
import Team from "../components/Team";
import Stellen from "../components/Stellen";

import FooterCallToActionTeam from "../components/FooterCallToActionTeam";

export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            {/* <Header width={width} />
            <HeaderCallToAction />
            <Zukunft width={width} />
            <UnserCampus width={width} />
            <Weiterbildung />
            <SuperPartner width={width} />
            <Finanzierung />
            <Bewerbungsprozess />
            <MeldeDich />
            <FAQ width={width} />
            <FooterCallToAction month={dates.VzTzMonth} /> */}

            <HeaderTeam />
            <Team />
            <Stellen />

            <FooterCallToActionTeam />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
