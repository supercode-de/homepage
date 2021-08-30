import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import ImpressumBody from '../components/ImpressumBody';
import ImpressumHeader from '../components/ImpressumHeader';
import Leitbild_Impressum_header from '../components/Leitbild_Impressum_Header';

export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='container'>
          <main>
            <Leitbild_Impressum_header headline='Impressum' />
            <ImpressumBody width={width} />
            {/* <DsgvoHeader width={width} />
            <DsgvoBody width={width} /> */}
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
