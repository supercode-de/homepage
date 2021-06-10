import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import UX_UI_Header from '../components/UX_UI_Header';
import FE_HeaderCTA from '../components/FE_HeaderCTA';
import FSPraxis from '../components/FE_Praxis';
import FE_TrainerTeam from '../components/FE_TrainerTeam';
import FE_ZahlenUndFakten from '../components/FE_ZahlenUndFakten';
import FE_Tagesablauf from '../components/FE_Tagesablauf';
import FS_Bildungsberatung from '../components/FS_Bildungsberatung';
import FooterCallToAction_neu from '../components/FooterCallToAction_neu';
export default function FrontendKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='ux/ui-kurse'>
          <UX_UI_Header datum='23.08.' />
          <FE_HeaderCTA />
          <FSPraxis />
          <FE_TrainerTeam />
          <FE_ZahlenUndFakten />
          <FE_Tagesablauf />
          <FS_Bildungsberatung />
          <FooterCallToAction_neu />
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
