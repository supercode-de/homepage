import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import FE_Header from '../components/FE_Header';
import FS_Header_Termine from '../components/FS_Header_Termine';
import FS_HeaderCTA from '../components/FS_HeaderCTA';
import FE_Praxis from '../components/FE_Praxis';
import FE_TrainerTeam from '../components/FE_TrainerTeam';
import FE_ZahlenUndFakten from '../components/FE_ZahlenUndFakten';
import FS_Tagesablauf from '../components/FS_Tagesablauf';
import Bildungsberatung from '../components/Bildungsberatung';
import FooterCallToAction_neu from '../components/FooterCallToAction_neu_frontend';
import HeaderCTA from '../components/HeaderCTA';
export default function FrontendKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='fullstack-kurse'>
          <FE_Header datum='28.02.' />
          <FS_Header_Termine />
          <HeaderCTA wochen="13" monate="3"/>
          <FE_Praxis />
          <FE_TrainerTeam />
          <FE_ZahlenUndFakten />
          <FS_Tagesablauf />
          <Bildungsberatung />
          <FooterCallToAction_neu />
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
