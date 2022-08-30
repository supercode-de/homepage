import Head from 'next/head';
import LayoutMC from "../../components/LayoutMC";
import HeaderOurStory from "../../components/microcamps/unsere-story/HeaderOurStory"
import UxUiPaySection from "../../components/microcamps/unsere-story/UxUiPaySection"
import SolutionLearningUxUi from "../../components/microcamps/unsere-story/SolutionLearningUxUi";
import LiveOnlineUiUx from "../../components/microcamps/unsere-story/LiveOnlineUiUx";
import MeetTeam from "../../components/microcamps/unsere-story/MeetTeam";
import BigPictureSection from "../../components/microcamps/BigPictureSection";
import NewsletterSection from "../../components/microcamps/index/NewsletterSection";
import FAQ from "../../components/FAQ";
import LastBlueSection from "../../components/microcamps/LastBlueSection";

import faqdata from "../../components/microcamps/data/faqdata"

import { useWindowSize } from "../../components/functions/windowSize";
export default function index() {
    if (process.browser) {
        const width = useWindowSize().width / 12;
        return (
            <LayoutMC banner={true}>
                <div className="our-story-wrapper">
                    <HeaderOurStory />
                    <UxUiPaySection />
                    <SolutionLearningUxUi />
                    <LiveOnlineUiUx />
                    <MeetTeam />
                    <BigPictureSection />
                    <NewsletterSection />
                    <FAQ faqData={faqdata} />
                    <LastBlueSection />
                </div>

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
                <meta property='og:url' content='https://www.super-code.de/unsere-story' />
                <meta property='og:type' content='Website' />
                <meta
                    property='og:title'
                    content='MicroCamps - Unsere Geschichte'
                />

                <title>MicroCamps</title>
                <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
                <link rel='alternate icon' href='/favicon.ico' />
            </Head>
        );
    }
}
