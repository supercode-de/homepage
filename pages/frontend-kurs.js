import Layout from '../components/Layout';

import Kurse_Header from "../components/Kurse_Header";
import Kurse_HeaderTermine_Webdev from '../components/Kurse_HeaderTermine_Webdev';
import Kurse_HeaderCTA from '../components/Kurse_HeaderCTA';
import FE_Praxis from '../components/FE_Praxis';
import Kurse_TrainerTeam from '../components/Kurse_TrainerTeam';
import ZahlenUndFakten from '../components/ZahlenUndFakten';
import Kurse_Tagesablauf from '../components/Kurse_Tagesablauf';
import Bildungsberatung from '../components/Bildungsberatung';
import Kurse_FooterCTA from '../components/Kurse_FooterCTA';

import { useWindowSize } from '../components/functions/windowSize';
export default function FrontendKurse() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='fullstack-kurse'>
          <Kurse_Header kursForm="Frontend"/>
          <Kurse_HeaderTermine_Webdev />
          <Kurse_HeaderCTA wochen="13" monate="3"/>
          <FE_Praxis />
          <Kurse_TrainerTeam kursForm="frontend"/>
          <ZahlenUndFakten 
            alumniName="Denise Brachwitz-Linden" 
            alumniAG="9Elements"
            alumniZitat="Das Bootcamp bei SuperCode hat mir eine neue Perspektive geboten. Bereits vor Ende des Kurses hatte ich schon zwei Jobangebote und das, obwohl ich Quereinsteigerin bin!"
            alumniImg="/img/alumni/Denise-BrachwitzLinden.jpg"
          />
          <Kurse_Tagesablauf kurs="code" dauer="drei" welt="Codens" />
          <Bildungsberatung />
          <Kurse_FooterCTA />
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
