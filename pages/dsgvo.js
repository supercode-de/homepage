
import DsgvoHeader from "../components/DsgvoHeader";
import DsgvoBody from "../components/DsgvoBody";
import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";

export default function Home(props) {
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <DsgvoHeader width={width} />
            <DsgvoBody width={width} />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    );
  } else {
    return "";
  }
}
