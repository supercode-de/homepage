import Layout from '../components/Layout';
import ImpressumBody from '../components/ImpressumBody';
import Leitbild_Impressum_header from '../components/Leitbild_Impressum_Header';

export default function Home(props) {
  if (process.browser) {
    return (
      <Layout banner={true}>
        <div className='container'>
          <main>
            <Leitbild_Impressum_header headline='Impressum' />
            <ImpressumBody />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
