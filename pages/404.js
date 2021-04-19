import Header404_neu from "../components/Header404_neu";

import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";

export default function Custom404() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className="container">
          <main>
            <Header404_neu />
          </main>
        </div>
      </Layout>
    );
  } else {
    return <h1>404</h1>;
  }
}
