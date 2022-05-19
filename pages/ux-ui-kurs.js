import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
import UX_UI_Header from "../components/UX_UI_Header";
import UX_UI_Header_Termine from "../components/UX_UI_Header_Termine";
import UX_UI_HeaderCTA from "../components/UX_UI_HeaderCTA";
import UX_UI_Praxis from "../components/UX_UI_Praxis";
import UX_UI_TrainerTeam from "../components/UX_UI_TrainerTeam";

import UX_UI_Tagesablauf from "../components/UX_UI_Tagesablauf";
import Bildungsberatung from "../components/Bildungsberatung";
import FooterCallToAction_neu_uxui from "../components/FooterCallToAction_neu_uxui";
export default function FrontendKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout navstroke="0.1px" banner={true} dropdownColor="var(--super-lila)">
        <div className="ux/ui-kurse">
          <UX_UI_Header datum="21.02." />
          <UX_UI_Header_Termine />
          <UX_UI_HeaderCTA />
          <UX_UI_Praxis />
          <UX_UI_TrainerTeam />
          <UX_UI_Tagesablauf />
          <Bildungsberatung />
          <FooterCallToAction_neu_uxui />
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
