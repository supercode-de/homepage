import LayoutMC from "../../components/LayoutMC";
import Head from 'next/head';
import HeaderSection from "../../components/microcamps/index/HeaderSection"
import DarkInfoTextTop from "../../components/microcamps/index/DarkInfoTextTop"
import AllCoursesArea from "../../components/microcamps/index/AllCoursesArea"
import ReasonsWhySec from "../../components/microcamps/index/ReasonsWhySec"
import AlumniSection from "../../components/microcamps/index/AlumniSection"
import OurStorySection from "../../components/microcamps/index/OurStorySection";
// import DarkInfoTextBottom from "../../components/microcamps/index/darkInfoTextBottom/DarkInfoTextBottom";
// import BigPictureSection from "../../components/microcamps/bigPictureSection/BigPictureSection";
// import NewsletterSection from "../../components/microcamps/index/newsletterSection/NewsletterSection";
// import FaqSection from "../../components/microcamps/index/faqSection/FaqSection";
// import LastBlueSection from "../../components/microcamps/lastBlueSection/LastBlueSection";

import { useWindowSize } from "../../components/functions/windowSize";
export default function index() {
    if (process.browser) {
        const width = useWindowSize().width / 12;
        return (
            <LayoutMC banner={true}>
                <HeaderSection />
                <DarkInfoTextTop />
                <AllCoursesArea />
                <ReasonsWhySec />
                <AlumniSection />
                <OurStorySection />
            </LayoutMC>
        );
    } else {
        return (
            <Head>
                <meta
                    property='og:image:secure'
                    content='https://www.super-code.de/img/page-preview.jpg'
                />
                <meta
                    property='og:image'
                    content='http://www.super-code.de/img/page-preview.jpg'
                />
                <meta property='og:url' content='https://www.super-code.de' />
                <meta property='og:type' content='Website' />
                <meta
                    property='og:title'
                    content='MicroCamps - das beste Teilzeit Weiterbildungskonzept'
                />

                <title>MicroCamps</title>
                <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
                <link rel='alternate icon' href='/favicon.ico' />
            </Head>
        );
    }
}
