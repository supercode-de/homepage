import React, { Suspense } from 'react';
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
// import Blog_neu from '../components/Blog_neu';
import FAQ from '../components/FAQ';
import FooterCallToAction from '../components/FooterCallToAction';
import Layout from '../components/Layout';
import dates from '../components/data/dates.json';
import kurseData from '../components/data/kursedata.json';

import useInView from "react-cool-inview";
import dynamic from 'next/dynamic'
const Blog_neu = dynamic(() => import('../components/Blog_neu'))


export default function Home(props) {
  if (process.browser) {
    // Vermute wenn wir das process.browser entfernen muss dieser Code Schnipsel in einen useEffect
    const { observe, inView } = useInView({
      onEnter: ({ unobserve }) => unobserve(), // only run once
    });
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
            <div ref={observe}>
              {/* 
              https://www.better.dev/lazy-loading-next-js 
              um Performance zu verbessern, lazy loading auf die Blog-Componente gesetzt
              wenn es erweitert werden soll:
              inView && <><Blog_neu /><Components... /></>
              */}
              {inView && <Blog_neu />}
            </div>
            <FAQ />
            <FooterCallToAction month={dates.VzTzMonth} />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
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
          content='Super-code.de - Programmieren lernen war noch nie digitaler.'
        />
        {/* <meta property="og:description" content="/img/page-preview.jpg" /> */}
        <title>Super-code</title>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='alternate icon' href='/favicon.ico' />
      </Head>
    );
  }
}
