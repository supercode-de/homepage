import Layout from "../components/Layout";
import Blog from "../components/Blog";

import { useWindowSize } from "../components/functions/windowSize";
export default function blog() {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <Blog />
          </main>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
