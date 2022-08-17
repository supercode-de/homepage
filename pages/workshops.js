import HeaderWS from '../components/HeaderWS';
import HeaderCallToActionWS_neu from '../components/HeaderCallToActionWS_neu';
import AnfängerBisBusinessWS from '../components/AnfängerBisBusinessWS';
import WorkITWS from '../components/WorkITWS';
import AuflistungWS from '../components/AuflistungWS';
import AVGSWS from '../components/AVGSWS_neu';
import Alumni from '../components/Alumni';
import UpToDate from '../components/UpToDate';
import FooterCallToActionWS from '../components/FooterCallToActionWS';

import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import dates from '../components/data/dates.json';

export default function Workshop() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className='container'>
          <main>
            <HeaderWS />
            <HeaderCallToActionWS_neu />
            <AnfängerBisBusinessWS />
            <WorkITWS />
            <AuflistungWS />
            <AVGSWS />
            <Alumni />
            <UpToDate />
            <FooterCallToActionWS />
          </main>
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
