import Header404 from "../components/Header404.js";
import Layout from "../components/Layout";

export default function Custom404() {
  if (process.browser) {
    return (
      <Layout>
        <div className="container">
          <main>
            <Header404 />
          </main>
        </div>
      </Layout>
    );
  } else {
    return <h1>404</h1>;
  }
}
