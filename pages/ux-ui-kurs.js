import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import UX_UI_Header from '../components/UX_UI_Header';
import UX_UI_HeaderCTA from '../components/UX_UI_HeaderCTA';
import UX_UI_Praxis from '../components/UX_UI_Praxis';
import UX_UI_TrainerTeam from '../components/UX_UI_TrainerTeam';

import UX_UI_Tagesablauf from '../components/UX_UI_Tagesablauf';
import FS_Bildungsberatung from '../components/FS_Bildungsberatung';
import FooterCallToAction_neu from '../components/FooterCallToAction_neu';
export default function FrontendKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout navstroke='0.1px' banner={true}>
        <div className='ux/ui-kurse'>
          <UX_UI_Header datum='23.08.' />
          <UX_UI_HeaderCTA />
          <UX_UI_Praxis />
          <UX_UI_TrainerTeam />

          <UX_UI_Tagesablauf />
          <FS_Bildungsberatung />
          <FooterCallToAction_neu />
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
