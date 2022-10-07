import Danke from '../components/Danke';

import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import Pixel1 from '../components/small/facebook/pixel-1';

export default function Custom404() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout> 
        <div className='container'>
          <Pixel1 name="FACEBOOK_PIXEL_1" />
          <main>
            <Danke />
          </main>
        </div>
      </Layout>
    );
  } else {
    return <h1>404</h1>;
  }
}
