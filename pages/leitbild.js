import Layout from '../components/Layout';
import LeitbildBody from '../components/LeitbildBody';
import Header_Subpages from '../components/Header_Subpages';

export default function Home(props) {
  if (process.browser) {
    return (
      <Layout banner={true}>
        <div className='container'>
          <main>
            <Header_Subpages headline='Leitbild' />
            <LeitbildBody />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
