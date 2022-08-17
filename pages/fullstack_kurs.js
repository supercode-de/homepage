import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';

import Kurse_Header from '../components/Kurse_Header';
import HeaderTermine_Webdev from '../components/HeaderTermine_Webdev';
import Kurse_HeaderCTA from '../components/Kurse_HeaderCTA';
import FS_Praxis from '../components/FS_Praxis';
import TrainerTeam_Kurse from '../components/TrainerTeam_Kurse';
import FS_ZahlenUndFakten from '../components/FS_ZahlenUndFakten';
import VZ_Tagesablauf from '../components/VZ_Tagesablauf';
import Bildungsberatung from '../components/Bildungsberatung';
import Kurse_FooterCTA from '../components/Kurse_FooterCTA';
import ZahlenUndFakten from '../components/ZahlenUndFakten';

export default function FullstackKurse(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='fullstack-kurse'>
          <Kurse_Header kursForm="Fullstack"/>
          <HeaderTermine_Webdev />
          <Kurse_HeaderCTA wochen="22" monate="5"/>
          <FS_Praxis />
          <TrainerTeam_Kurse kursForm="fullstack"/>
          {/* <FS_ZahlenUndFakten /> */}
          <ZahlenUndFakten 
            alumniName="Daniel Rauh" 
            alumniAG="LIKWIDCARE"
            alumniZitat="Der Kurs bei SuperCode hat sich absolut gelohnt. Nun habe ich eine neue Job-Perspektive für die Zukunft und auch viele neue Kontakte und Freunde gewonnen."
            alumniImg="/img/alumni/Daniel-Rauh.jpg"
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
