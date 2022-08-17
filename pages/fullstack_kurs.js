import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';

import Kurse_Header from '../components/Kurse_Header';
import HeaderTermine_Webdev from '../components/HeaderTermine_Webdev';
import Kurse_HeaderCTA from '../components/Kurse_HeaderCTA';
import FS_Praxis from '../components/FS_Praxis';
import Kurse_TrainerTeam from '../components/Kurse_TrainerTeam';
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
          <Kurse_TrainerTeam kursForm="fullstack"/>
          <ZahlenUndFakten 
            alumniName="Emilija-Sekulic" 
            alumniAG="smartin ADVERTISING"
            alumniZitat="An alle Karrierewechsler*innen da draußen: Fangt einfach an. Schreibt die ersten Zeilen in HTML, denn “Hallo Welt” könnte der Beginn von etwas Großem sein!"
            alumniImg="/img/alumni/Emilija-Sekulic.png"
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
