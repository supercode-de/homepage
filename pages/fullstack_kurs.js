import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import FS_Header from '../components/FS_Header';
import FS_Praxis from '../components/FS_Praxis';
import FS_TrainerTeam from '../components/FS_TrainerTeam';
import FS_ZahlenUndFakten from '../components/FS_ZahlenUndFakten';
import FS_Tagesablauf from '../components/FS_Tagesablauf';
import Bildungsberatung from '../components/Bildungsberatung';
import FooterCallToAction_neu from '../components/FooterCallToAction_neu';
import HeaderCTA from '../components/HeaderCTA';
import VZHeaderTermine from '../components/VZHeaderTermine';
export default function FullstackKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='fullstack-kurse'>
          <FS_Header datum='20.12.' />
          <VZHeaderTermine />
          <HeaderCTA wochen="22" monate="5"/>
          <FS_Praxis />
          <FS_TrainerTeam />
          <FS_ZahlenUndFakten />
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
