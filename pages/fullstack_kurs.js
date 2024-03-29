import Layout from '../components/Layout';

import Kurse_Header from '../components/Kurse_Header';
import Kurse_HeaderTermine_Webdev from '../components/Kurse_HeaderTermine_Webdev';
import Kurse_HeaderCTA from '../components/Kurse_HeaderCTA';
import Kurse_FS_Praxis from '../components/Kurse_FS_Praxis';
import Kurse_TrainerTeam from '../components/Kurse_TrainerTeam';
import ZahlenUndFakten from '../components/ZahlenUndFakten';
import Kurse_Tagesablauf from '../components/Kurse_Tagesablauf';
import Bildungsberatung from '../components/Bildungsberatung';
import Kurse_FooterCTA from '../components/Kurse_FooterCTA';

import { useWindowSize } from '../components/functions/windowSize';
export default function FullstackKurse() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='fullstack-kurse'>
          <Kurse_Header kursForm="Fullstack" />
          <Kurse_HeaderTermine_Webdev />
          <Kurse_HeaderCTA wochen="22" monate="5"/>
          <Kurse_FS_Praxis />
          <Kurse_TrainerTeam kursForm="fullstack"/>
          <ZahlenUndFakten 
            alumniName="Emilija-Sekulic" 
            alumniAG="smartin ADVERTISING"
            alumniZitat="An alle Karrierewechsler:innen da draußen: Fangt einfach an. Schreibt die ersten Zeilen in HTML, denn “Hallo Welt” könnte der Beginn von etwas Großem sein!"
            alumniImg="/img/alumni/Emilija-Sekulic.png"
          />
          <Kurse_Tagesablauf kurs="code" dauer="fünf" welt="Codens"/>
          <Bildungsberatung />
          <Kurse_FooterCTA color="var(--super-white)"/>
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
