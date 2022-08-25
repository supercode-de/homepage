import DsgvoBody from '../components/DsgvoBody';
import Layout from '../components/Layout';
import Header_Subpages from '../components/Header_Subpages';

export default function Home(props) {
  if (process.browser) {
    return (
      <Layout banner={true}>
        <div className='container'>
          <main>
            <Header_Subpages headline='Datenschutz' />
            <DsgvoBody />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
