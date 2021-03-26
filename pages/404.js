import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
// import Header404 from "../components/Header404";
import Header404_neu from "../components/Header404_neu";
// import WiederZurueck from "../components/WiederZurueck";

export default function Custom404() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className="container">
          <main>
            {/* <Header404 width={width} /> */}

            <Header404_neu />
            {/* <WiederZurueck width={width} /> */}
          </main>

          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return <h1>404</h1>;
  }
}
