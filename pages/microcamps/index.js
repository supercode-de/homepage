// import Head from 'next/head';
import LayoutMC from "../../components/LayoutMC";
import HeaderSection from "../../components/microcamps/index/HeaderSection"
import DarkInfoTextTop from "../../components/microcamps/index/DarkInfoTextTop"
import AllCoursesArea from "../../components/microcamps/index/AllCoursesArea"
import ReasonsWhySec from "../../components/microcamps/index/ReasonsWhySec"
import AlumniSection from "../../components/microcamps/index/AlumniSection"
import OurStorySection from "../../components/microcamps/index/OurStorySection";
import DarkInfoTextBottom from "../../components/microcamps/index/DarkInfoTextBottom";
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
                <HeaderSection />
                <DarkInfoTextTop />
                <AllCoursesArea />
                <ReasonsWhySec />
                <AlumniSection />
                <OurStorySection />
                <DarkInfoTextBottom />
                <BigPictureSection />
                <NewsletterSection />
                <FAQ faqData={faqdata}/>
                <LastBlueSection />
            </LayoutMC>
        );
    } else {
        return ""
    }
}
