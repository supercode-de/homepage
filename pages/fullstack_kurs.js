import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import FS_Header from '../components/FS_Header';
import FS_HeaderCTA from '../components/FS_HeaderCTA';
import FS_Praxis from '../components/FS_Praxis';
import FS_TrainerTeam from '../components/FS_TrainerTeam';
import FS_ZahlenUndFakten from '../components/FS_ZahlenUndFakten';
import FS_Tagesablauf from '../components/FS_Tagesablauf';
import FS_Bildungsberatung from '../components/FS_Bildungsberatung';
import FooterCallToAction_neu from '../components/FooterCallToAction_neu';
export default function FullstackKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='fullstack-kurse'>
          <FS_Header datum='21.06.' />
          <FS_HeaderCTA />
          <FS_Praxis />
          <FS_TrainerTeam />
          <FS_ZahlenUndFakten />
          <FS_Tagesablauf />
          <FS_Bildungsberatung />
          <FooterCallToAction_neu />
        </div>
        {/*
         */}
      </Layout>
    );
  } else {
    return '';
  }
}