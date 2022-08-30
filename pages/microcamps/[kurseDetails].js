import Head from 'next/head';
import LayoutMC from "../../components/LayoutMC";

import { useWindowSize } from "../../components/functions/windowSize";
export default function kurseDetails() {
    if (process.browser) {
        const width = useWindowSize().width / 12;
        return (
            <LayoutMC banner={true}>
                <h1>Kursedetails</h1>
            </LayoutMC>
        );
    } else {
        return (
            <Head>
                <meta
                    property='og:image:secure'
                    content='https://www.super-code.de/img/microcamps/people_center.png'
                />
                <meta
                    property='og:image'
                    content='http://www.super-code.de/img/microcamps/people_center.png'
                />
                <meta property='og:url' content='https://www.super-code.de/microcamps' />
                <meta property='og:type' content='Website' />
                <meta
                    property='og:title'
                    content='MicroCamps'
                />

                <title>MicroCamps - Kursedetails</title>
                <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
                <link rel='alternate icon' href='/favicon.ico' />
            </Head>
        );
    }
}
