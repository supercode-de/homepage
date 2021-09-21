import Head from 'next/head';
import Header_neu from '../components/Header_neu';
import HeaderCallToAction_neu from '../components/HeaderCallToAction_neu';
import Zukunft from '../components/Zukunft';
import UnserCampus from '../components/UnserCampus';
import Weiterbildung_neu from '../components/Weiterbildung_neu';
import Bootcamps from '../components/Bootcamps';
import CertquaBonn from '../components/CertquaBonn';
import Finanzierung from '../components/Finanzierung';
import Bewerbungsprozess from '../components/Bewerbungsprozess';
import MeldeDich from '../components/MeldeDich';
import Blog_neu from '../components/Blog_neu';
import FAQ from '../components/FAQ';
import FooterCallToAction from '../components/FooterCallToAction';

import { useWindowSize } from '../components/functions/windowSize';
import Layout from '../components/Layout';
import dates from '../components/data/dates.json';
import kurseData from '../components/data/kursedata.json';

export default function Home(props) {
  return (
    <Layout banner={true}>
      <div className='container'>
        <main>
          <Header_neu />
          <HeaderCallToAction_neu />
          <Zukunft />
          <UnserCampus />
          <Weiterbildung_neu />
          <Bootcamps kurseData={kurseData[0].kurseIndex} />
          <CertquaBonn />
          <Finanzierung />
          <Bewerbungsprozess />
          <MeldeDich />
          <Blog_neu />
          <FAQ />
          <FooterCallToAction month={dates.VzTzMonth} />
          {/* <FooterSitemap /> */}
        </main>
        <style jsx>{``}</style>
      </div>
    </Layout>
  );
}
