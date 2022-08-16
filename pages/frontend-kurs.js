import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import Header_Kurse from "../components/Header_Kurse";
import FE_Praxis from '../components/FE_Praxis';
import FE_ZahlenUndFakten from '../components/FE_ZahlenUndFakten';
import Bildungsberatung from '../components/Bildungsberatung';
import FooterCallToAction_neu from '../components/FooterCallToAction_Kurse';
import HeaderCTA from '../components/HeaderCTA';
import VZHeaderTermine from '../components/VZHeaderTermine';
import VZ_Tagesablauf from '../components/VZ_Tagesablauf';
import TrainerTeam_Kurse from '../components/TrainerTeam_Kurse';

export default function FrontendKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='fullstack-kurse'>
          <Header_Kurse kursForm="Frontend"/>
          <VZHeaderTermine />
          <HeaderCTA wochen="13" monate="3"/>
          <FE_Praxis />
          <TrainerTeam_Kurse kursForm="frontend"/>
          <FE_ZahlenUndFakten />
          <VZ_Tagesablauf />
          <Bildungsberatung />
          <FooterCallToAction_neu />
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
