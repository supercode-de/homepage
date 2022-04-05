import HeaderTeam from "../components/HeaderTeam";
import Team from "../components/Team";
// import Stellen from "../components/Stellen";
import Stellen_test from "../components/Stellen_test"
// import Stellen_neu from "../components/Stellen_neu";
import FooterCallToActionTeam from "../components/FooterCallToActionTeam";

import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
import WerdeTeilTeam from "../components/WerdeTeilTeam";

export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <HeaderTeam />
            <Team />
            <WerdeTeilTeam />
            {/* <Stellen /> */}
            <Stellen_test/>
            {/* <Stellen_neu /> */}
            <FooterCallToActionTeam />
          </main>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
