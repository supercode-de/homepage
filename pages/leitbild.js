import Layout from '../components/Layout';

import Header_Subpages from '../components/Header_Subpages';
import Leitbild_Body from '../components/Leitbild_Body';

export default function Home(props) {
  if (process.browser) {
    return (
      <Layout banner={true}>
        <div className='container'>
          <main>
            <Header_Subpages headline='Leitbild' />
            <Leitbild_Body />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return '';
  }
}
