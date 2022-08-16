import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';

import Header_Kurse from '../components/Header_Kurse';
import VZHeaderTermine from '../components/VZHeaderTermine';
import HeaderCTA from '../components/HeaderCTA';
import FS_Praxis from '../components/FS_Praxis';
import TrainerTeam_Kurse from '../components/TrainerTeam_Kurse';
import FS_ZahlenUndFakten from '../components/FS_ZahlenUndFakten';
import VZ_Tagesablauf from '../components/VZ_Tagesablauf';
import Bildungsberatung from '../components/Bildungsberatung';
import FooterCallToActionKurse from '../components/FooterCallToActionKurse';

export default function FullstackKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='fullstack-kurse'>
          <Header_Kurse kursForm="Fullstack"/>
          <VZHeaderTermine />
          <HeaderCTA wochen="22" monate="5"/>
          <FS_Praxis />
          <TrainerTeam_Kurse kursForm="fullstack"/>
          <FS_ZahlenUndFakten />
          <VZ_Tagesablauf />
          <Bildungsberatung />
          <FooterCallToActionKurse />
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
