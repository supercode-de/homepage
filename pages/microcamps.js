import Layout from "../components/Layout";


import { useWindowSize } from "../components/functions/windowSize";
export default function blog() {
    if (process.browser) {
        const width = useWindowSize().width / 12;
        return (
            <Layout banner={true}>

            </Layout>
        );
    } else {
        return "";
    }
}
