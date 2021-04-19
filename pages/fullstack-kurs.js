import { useWindowSize } from "../components/functions/windowSize";
import Layout from "../components/Layout";
import FS_Header from "../components/FS_Header";
import FS_HeaderCTA from "../components/FS_HeaderCTA";
import FSPraxis from "../components/FS_Praxis";
export default function FullstackKurse(props) {
    if (process.browser) {
        const width = useWindowSize().width / 12;
        return (
            <Layout banner={true}>
                <div className="fullstack-kurse">
                    <FS_Header datum="22.03."/>
                    <FS_HeaderCTA />
                    <FSPraxis />
                </div>
            </Layout>
        );
    } else {
        return "";
    }
}
