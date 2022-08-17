import HeaderTeam from "../components/HeaderTeam";
import Team from "../components/Team";
import Stellen from "../components/Stellen"
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
            <Stellen/>
            <FooterCallToActionTeam />
          </main>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
