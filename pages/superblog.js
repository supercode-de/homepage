import Super_Blog from "../components/Super_Blog";
import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";

export default function Superblog(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <Super_Blog />
          </main>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
