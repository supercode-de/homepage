import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import LeitBildBody from '../components/LeitBildBody';
import LeitBildHeader from '../components/LeitBildHeader';
import Leitbild_Impressum_header from '../components/Leitbild_Impressum_Header';

export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className='container'>
          <main>
            <Leitbild_Impressum_header headline='Leitbild' />
            <LeitBildBody />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
