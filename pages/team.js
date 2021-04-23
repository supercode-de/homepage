import HeaderTeam from "../components/HeaderTeam";
import Team from "../components/Team";
import Stellen from "../components/Stellen";
// import Stellen_neu from "../components/Stellen_neu";
import FooterCallToActionTeam from "../components/FooterCallToActionTeam";

import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";

export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <HeaderTeam />
            <Team />
            <Stellen />
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
