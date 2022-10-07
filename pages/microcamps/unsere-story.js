import Head from 'next/head';
import LayoutMC from "../../components/LayoutMC";
import HeaderOurStory from "../../components/microcamps/unsere-story/HeaderOurStory"
import UxUiPaySection from "../../components/microcamps/unsere-story/UxUiPaySection"
import SolutionLearningUxUi from "../../components/microcamps/unsere-story/SolutionLearningUxUi";
import LiveOnlineUiUx from "../../components/microcamps/unsere-story/LiveOnlineUiUx";
import MeetTeam from "../../components/microcamps/unsere-story/MeetTeam";
import AllCoursesArea from '../../components/microcamps/index/AllCoursesArea';
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
                    <AllCoursesArea />
                    <BigPictureSection />
                    <NewsletterSection />
                    <FAQ faqData={faqdata} />
                    <LastBlueSection />
                </div>

            </LayoutMC>
        );
    } else {
        return ""
    }
}
