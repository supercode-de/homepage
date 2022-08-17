import Layout from "../components/Layout";
import UX_UI_HeaderCTA from "../components/UX_UI_HeaderCTA";
import UX_UI_Praxis from "../components/UX_UI_Praxis";
import UX_UI_TrainerTeam from "../components/UX_UI_TrainerTeam";
import UX_UI_Tagesablauf from "../components/UX_UI_Tagesablauf";
import Bildungsberatung from "../components/Bildungsberatung";
import UX_UI_FooterCTA from "../components/UX_UI_FooterCTA";

import { useWindowSize } from "../components/functions/windowSize";
export default function UXUIKurs() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout navstroke="0.1px" banner={true} dropdownColor="var(--super-lila)">
        <div className="ux/ui-kurse">

          <UX_UI_HeaderCTA />
          <UX_UI_Praxis />
          <UX_UI_TrainerTeam />
          <UX_UI_Tagesablauf />
          <Bildungsberatung />
          <UX_UI_FooterCTA />
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
