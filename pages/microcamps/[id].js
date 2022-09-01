import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import LayoutMC from "../../components/LayoutMC";
import CourseDetailHeader from "../../components/microcamps/kurseDetails/CourseDetailHeader";

import DarkInfoTextTop from "../../components/microcamps/index/DarkInfoTextTop"
import StickyNav from "../../components/microcamps/kurseDetails/StickyNav";
import OverviewSection from "../../components/microcamps/kurseDetails/OverviewSection";
// import BootcampSection from "../../components/microcamps/kurseDetails/BootcampSection";
// import CurriculumSection from "../../components/microcamps/kurseDetails/CurriculumSection";
// import ScheduleSection from "../../components/microcamps/kurseDetails/ScheduleSection";
// import TeamSection from "../../components/microcamps/kurseDetails/TeamSection";
// import ToolsSection from "../../components/microcamps/kurseDetails/ToolsSection";
// import ClassSection from "../../components/microcamps/kurseDetails/ClassSection";
// import BootcampFillUp from "../../components/microcamps/kurseDetails/BootcampFillUp";
import AllCoursesArea from "../../components/microcamps/index/AllCoursesArea"
import DarkInfoTextBottom from "../../components/microcamps/index/DarkInfoTextBottom";
import BigPictureSection from "../../components/microcamps/BigPictureSection";
import NewsletterSection from "../../components/microcamps/index/NewsletterSection";
import LastBlueSection from "../../components/microcamps/LastBlueSection";
import kurseDataMC from "../../components/microcamps/data/courseData.json";

export default function kurseDetails() {
    const router = useRouter();
    const { id } = router.query
    const [kursData, setKursData] = useState([])
    useEffect(() => {
        if (!router.isReady) return;
        const kurs = kurseDataMC.filter(
            (kurs) => kurs.id === id
        )[0];
        setKursData(kurs)
    }, [router.query.id, router.isReady])


    if (process.browser) {
        return (
            <LayoutMC banner={true}>
                <CourseDetailHeader kurs={kursData} />
                <DarkInfoTextTop />
                <StickyNav />
                <OverviewSection kurs={kursData} />
                <AllCoursesArea />
                <DarkInfoTextBottom />
                <BigPictureSection />
                <NewsletterSection />
                <LastBlueSection />
            </LayoutMC>
        );
    } else {
        return ''
    }
}
