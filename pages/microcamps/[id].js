import { useRouter } from 'next/router'
import LayoutMC from "../../components/LayoutMC";
import CourseDetailHeader from "../../components/microcamps/kurseDetails/CourseDetailHeader";

import DarkInfoTextTop from "../../components/microcamps/index/DarkInfoTextTop"
import StickyNav from "../../components/microcamps/kurseDetails/StickyNav";
import OverviewSection from "../../components/microcamps/kurseDetails/OverviewSection";
import BootcampSection from "../../components/microcamps/kurseDetails/BootcampSection";
import CurriculumSection from "../../components/microcamps/kurseDetails/CurriculumSection";
import ScheduleSection from "../../components/microcamps/kurseDetails/ScheduleSection";
import TeamSection from "../../components/microcamps/kurseDetails/TeamSection";
import ToolsSection from "../../components/microcamps/kurseDetails/ToolsSection";
import ClassSection from "../../components/microcamps/kurseDetails/ClassSection";
import BootcampFillUp from "../../components/microcamps/kurseDetails/BootcampFillUp";
import AllCoursesArea from "../../components/microcamps/index/AllCoursesArea"
import DarkInfoTextBottom from "../../components/microcamps/index/DarkInfoTextBottom";
import BigPictureSection from "../../components/microcamps/BigPictureSection";
import NewsletterSection from "../../components/microcamps/index/NewsletterSection";
import FAQ from "../../components/FAQ"
import LastBlueSection from "../../components/microcamps/LastBlueSection";

import faqdata from "../../components/microcamps/data/faqdata"
import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import fs from 'fs/promises';

async function getData() {
    const filePath = path.join(process.cwd(), 'components/microcamps/data', 'courseData.json');
    const fileData = await fs.readFile(filePath);
    const data = JSON.parse(fileData);

    return data;
}

export const getStaticProps = async (context) => {
    const itemID = context.params?.id;
    const data = await getData();
    const foundItem = data.find(item => itemID === item.id);

    if (!foundItem) {
        return {
            props: { hasError: true },
        }
    }

    return {
        props: {
            foundItem
        }
    }
}

export const getStaticPaths = async () => {
    const data = await getData();
    const pathsWithParams = data.map(star => ({ params: { id: star.id } }))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export default function kurseDetails(props) {

    const router = useRouter();
    const { id } = router.query
    // const [kursData, setKursData] = useState([])
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const kurs = kurseDataMC.filter(
    //         (kurs) => kurs.id === id
    //     )[0];
    //     setKursData(kurs)
    // }, [router.query.id, router.isReady])

    // let filteredTools = []
    // for (let index = 0; index < props.foundItem.toolsInternal.length; index++) {
    //     const toolExt = toolsDataExternal.filter(
    //         (toolExt) => toolExt.name === props.foundItem.toolsInternal[index].name
    //     )[0];
    //     filteredTools.push(toolExt);
    // }

    if(props.hasError) {
        return <h1>Error</h1>
    }

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }

    if (process.browser) {
        return (
            <LayoutMC banner={true}>
                <CourseDetailHeader kurs={props.foundItem} />
                <DarkInfoTextTop />
                <StickyNav />
                <OverviewSection kurs={props.foundItem} />
                <BootcampSection curriculumOverview={props.foundItem.curriculumOverview}/>
                <CurriculumSection kurs={props.foundItem}  />
                <ScheduleSection kurs={props.foundItem} />
                <TeamSection data={props.foundItem} />
                <ToolsSection data={props.foundItem} />
                <ClassSection data={props.foundItem}  />
                <BootcampFillUp data={props.foundItem}  />
                <AllCoursesArea />
                <DarkInfoTextBottom />
                <BigPictureSection />
                <NewsletterSection />
                <FAQ faqData={faqdata}/>
                <LastBlueSection />
            </LayoutMC>
        );
    } else {
        return ''
    }
}
