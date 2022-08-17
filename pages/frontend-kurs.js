import Layout from '../components/Layout';
import Kurse_Header from "../components/Kurse_Header";
import HeaderTermine_Webdev from '../components/HeaderTermine_Webdev';
import Kurse_HeaderCTA from '../components/Kurse_HeaderCTA';
import FE_Praxis from '../components/FE_Praxis';
import Kurse_TrainerTeam from '../components/Kurse_TrainerTeam';
import VZ_Tagesablauf from '../components/VZ_Tagesablauf';
import Bildungsberatung from '../components/Bildungsberatung';
import Kurse_FooterCTA from '../components/Kurse_FooterCTA';

import { useWindowSize } from '../components/functions/windowSize';
import ZahlenUndFakten from '../components/ZahlenUndFakten';
export default function FrontendKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='fullstack-kurse'>
          <Kurse_Header kursForm="Frontend"/>
          <HeaderTermine_Webdev />
          <Kurse_HeaderCTA wochen="13" monate="3"/>
          <FE_Praxis />
          <Kurse_TrainerTeam kursForm="frontend"/>
          {/* <FE_ZahlenUndFakten /> */}
          <ZahlenUndFakten 
            alumniName="Denise Brachwitz-Linden" 
            alumniAG="9Elements"
            alumniZitat="Das Bootcamp bei SuperCode hat mir eine neue Perspektive geboten. Bereits vor Ende des Kurses hatte ich schon zwei Jobangebote und das, obwohl ich Quereinsteigerin bin!"
            alumniImg="/img/alumni/Denise-BrachwitzLinden.jpg"
          />
          <VZ_Tagesablauf />
          <Bildungsberatung />
          <Kurse_FooterCTA />
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
