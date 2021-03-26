import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
import LeitBildBody from "../components/LeitBildBody";
import LeitBildHeader from "../components/LeitBildHeader";

export default function Home(props) {
    if (process.browser) {
        const width = useWindowSize().width / 12;
        return (
            <Layout banner={true}>
                <div className="container">
                    <main>
                        <LeitBildHeader width={width} />
                        <LeitBildBody width={width} />

                    </main>
                    <style jsx>{``}</style>
                </div>
            </Layout>
        );
    } else {
        return "";
    }
}
