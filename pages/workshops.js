import Layout from '../components/Layout';
import HeaderWS from '../components/HeaderWS';
import HeaderCallToActionWS_neu from '../components/HeaderCallToActionWS_neu';
import AnfängerBisBusinessWS from '../components/AnfängerBisBusinessWS';
import WS_WorkIT from '../components/WS_WorkIT';
import WS_Auflistung from '../components/WS_Auflistung';
import WS_AVGS from '../components/WS_AVGS';
import Alumni from '../components/Alumni';
import Newsletter from '../components/Newsletter';
import WS_FooterCTA from '../components/WS_FooterCTA';

import { useWindowSize } from '../components/functions/windowSize';
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
            <WS_WorkIT />
            <WS_Auflistung />
            <WS_AVGS />
            <Alumni />
            <Newsletter />
            <WS_FooterCTA />
          </main>
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
