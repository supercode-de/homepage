import HeaderKurse from "../components/HeaderKurse";
import HeaderCallToActionKurse from "../components/HeaderCallToActionKurse";
import { useWindowSize } from "../components/functions/windowSize";
import LerneProgrammierenKurse from "../components/LerneProgrammierenKurse";
import UnserCampusKurse from "../components/UnserCampusKurse";
import FooterCallToAction from "../components/FooterCallToAction";
import Layout from "../components/Layout";
import Absolvente from '../components/Absolvente'
import dates from '../components/data/dates.json'
export default function Workshop() {
    if (process.browser) {
        const width = useWindowSize().width / 12;
        return (
            <Layout>
                <div className="container">
                    <main>
                        <HeaderKurse width={width} />
                        <HeaderCallToActionKurse />
                        <LerneProgrammierenKurse />
                        <UnserCampusKurse width={width} />
                        <Absolvente />
                        <FooterCallToAction month={dates.VzTzMonth} />
                    </main>

                    <style jsx>{``}</style>
                </div>
            </Layout>
        );
    } else {
        return "";
    }
}
