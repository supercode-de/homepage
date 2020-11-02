import FooterCallToAction from "../components/FooterCallToAction";
import UnserCampus from "../components/UnserCampus";
import FAQ from "../components/FAQ";
import MeldeDich from "../components/MeldeDich";
import Header from "../components/Header";
import HeaderCallToAction from "../components/HeaderCallToAction";
import Zukunft from "../components/Zukunft";
import Weiterbildung from "../components/Weiterbildung";
import Bewerbungsprozess from "../components/Bewerbungsprozess";
import SuperPartner from "../components/SuperPartner";
import Layout from "../components/Layout";
import Finanzierung from "../components/Finanzierung";
import Head from "next/head";
import Blog from "../components/Blog";
import dates from "../components/data/dates.json";
export default function Home() {
  return (
    <Layout banner={true}>
      <div className="container">
        <main>
          <Header />
          <HeaderCallToAction />
          <Zukunft />
          <UnserCampus />
          <Weiterbildung />
          <SuperPartner />
          <Finanzierung />
          <Bewerbungsprozess />
          <Blog />
          <MeldeDich />
          <FAQ />
          <FooterCallToAction month={dates.VzTzMonth} />
        </main>
        <style jsx>{``}</style>
      </div>
    </Layout>
  );
}
