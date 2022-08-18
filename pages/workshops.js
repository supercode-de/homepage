import Layout from '../components/Layout';
import WS_Header from '../components/WS_Header';
import WS_HeaderCTA from '../components/WS_HeaderCTA';
import WS_AnfaengerBisBusiness from '../components/WS_AnfaengerBisBusiness';
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
            <WS_Header img="/img/workshop_header.png" kurs="Workshops!" />
            <WS_HeaderCTA />
            <WS_AnfaengerBisBusiness />
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
