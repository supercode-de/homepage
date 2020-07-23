import HeaderKurse from "../components/HeaderKurse";
import HeaderCallToActionWS from "../components/HeaderCallToActionWS";
import { useWindowSize } from "../components/functions/windowSize";
import LerneProgrammierenKurse from "../components/LerneProgrammierenKurse";
import UnserCampusKurse from "../components/UnserCampusKurse";
import FooterCallToAction from "../components/FooterCallToAction";
import Layout from "../components/Layout";
import Absolvente from '../components/Absolvente'
export default function Workshop() {
    if (process.browser) {
        const width = useWindowSize().width / 12;
        return (
            <Layout>
                <div className="container">
                    <main>
                        <HeaderKurse width={width} />
                        <HeaderCallToActionWS />
                        <LerneProgrammierenKurse />
                        <UnserCampusKurse width={width} />
                        <Absolvente />
                        <FooterCallToAction month="September" />
                        {/* <Header width={width} /> */}

                        {/* <Zukunft width={width} /> */}
                        {/* <UnserCampus width={width} /> */}
                        {/* <Weiterbildung /> */}
                        {/* <MeldeDich /> */}
                        {/* <Bewerbungsprozess /> */}
                        {/* <FAQ /> */}
                        {/* <FooterCallToAction month="Mai" /> */}
                        {/* <Footer /> */}
                    </main>

                    <style jsx>{``}</style>
                </div>
            </Layout>
        );
    } else {
        return "";
    }
}
