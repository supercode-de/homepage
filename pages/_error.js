import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
import Header404 from "../components/Header404";
import WiederZurueck from "../components/WiederZurueck";

export default function Custom404() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        <div className="container">
          <main>
            <Header404 width={width} />
            <WiederZurueck width={width} />
          </main>

          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return <h1>404 - Page Not Found</h1>;
  }
}
