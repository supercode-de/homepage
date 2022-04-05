import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import FE_Header from '../components/FE_Header';
import FE_Header_Termine from '../components/FE_Header_Termine';
import FE_HeaderCTA from '../components/FE_HeaderCTA';
import FE_Praxis from '../components/FE_Praxis';
import FE_TrainerTeam from '../components/FE_TrainerTeam';
import FE_ZahlenUndFakten from '../components/FE_ZahlenUndFakten';
import FE_Tagesablauf from '../components/FE_Tagesablauf';
import Bildungsberatung from '../components/Bildungsberatung';
import FooterCallToAction_neu from '../components/FooterCallToAction_neu_frontend';
export default function FrontendKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='fullstack-kurse'>
          <FE_Header datum='28.02.' />
          <FE_Header_Termine />
          <FE_HeaderCTA />
          <FE_Praxis />
          <FE_TrainerTeam />
          <FE_ZahlenUndFakten />
          <FE_Tagesablauf />
          <Bildungsberatung />
          <FooterCallToAction_neu />
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
