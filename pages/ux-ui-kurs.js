import Layout from "../components/Layout";

import Kurse_Header from "../components/Kurse_Header";
import Kurse_HeaderCTA from "../components/Kurse_HeaderCTA";
import UX_UI_Praxis from "../components/UX_UI_Praxis";

import Bildungsberatung from "../components/Bildungsberatung";
import UX_UI_FooterCTA from "../components/UX_UI_FooterCTA";

import { useWindowSize } from "../components/functions/windowSize";
import Kurse_Tagesablauf from "../components/Kurse_Tagesablauf";
import UX_UI_HeaderTermine from "../components/UX_UI_HeaderTermine";

import Kurse_TrainerTeam from "../components/Kurse_TrainerTeam";
export default function UXUIKurs() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout navstroke="0.1px" banner={true} dropdownColor="var(--super-lila)">
        <div className="ux/ui-kurse">
          <Kurse_Header kursForm="UX/UI–DESIGN" stoererTopPos="60%"/>
          <UX_UI_HeaderTermine />
          <Kurse_HeaderCTA wochen="18" monate="4" kurs="design"/>
          <UX_UI_Praxis />
          <Kurse_TrainerTeam kursForm="uxui"/>
          <Kurse_Tagesablauf kurs="design" dauer="vier" welt="UX/UI–Designs"/>
          <Bildungsberatung />
          <UX_UI_FooterCTA />
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
