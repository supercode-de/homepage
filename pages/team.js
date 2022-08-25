import Layout from "../components/Layout";
import Team_Header from "../components/Team_Header";
import Team_Gallery from "../components/Team_Gallery";
import Team_WerdeTeil from "../components/Team_WerdeTeil";
import Team_Stellenanzeigen from "../components/Team_Stellenanzeigen"
import Team_FooterCTA from "../components/Team_FooterCTA";

import { useWindowSize } from "../components/functions/windowSize";
export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <Team_Header />
            <Team_Gallery />
            <Team_WerdeTeil />
            <Team_Stellenanzeigen/>
            <Team_FooterCTA />
          </main>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
