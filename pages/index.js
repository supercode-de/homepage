import Head from 'next/head';
import Layout from '../components/Layout';
import Index_Header from '../components/Index_Header';
import Index_HeaderCTA from '../components/Index_HeaderCTA';
import Zukunft from '../components/Zukunft';
import UnserCampus from '../components/UnserCampus';
import Index_Weiterbildung from '../components/Index_Weiterbildung';
import Bootcamps from '../components/Bootcamps';
import CertquaBonn from '../components/CertquaBonn';
import Finanzierung from '../components/Finanzierung';
import Bewerbungsprozess from '../components/Bewerbungsprozess';
import MeldeDich from '../components/MeldeDich';
import FAQ from '../components/FAQ';
import Index_FooterCTA from '../components/Index_FooterCTA';

import kurseData from '../components/data/kursedata.json';
import faq from '../components/data/faq';
import useInView from "react-cool-inview";
import dynamic from 'next/dynamic'

const Index_Blog = dynamic(() => import('../components/Index_Blog'))

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
            <Index_Header />
            <Index_HeaderCTA />
            <Zukunft />
            <UnserCampus />
            <Index_Weiterbildung />
            <Bootcamps kurseData={kurseData[0].kurseIndex} />
            <CertquaBonn />
            <Finanzierung />
            <Bewerbungsprozess />
            <MeldeDich />
            {/* 
              package installiert, lazyLoading, content wird erst geladen wenn sichtbar
              */}
            <div ref={observe}>
              {/* 
              https://www.better.dev/lazy-loading-next-js 
              um Performance zu verbessern, lazy loading auf die Blog-Componente gesetzt
              wenn es erweitert werden soll:
              inView && <><Index_Blog /><Components... /></>
              */}
              {inView && <Index_Blog />}
            </div>
            <FAQ faqData={faq}/>
            <Index_FooterCTA/>
            {/* <Cookies /> */}
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
          content='super-code.de - Programmieren lernen war noch nie digitaler.'
        />

        {/* <meta property="og:description" content="/img/page-preview.jpg" /> */}
        <title>Super-code</title>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='alternate icon' href='/favicon.ico' />
      </Head>
    );
  }
}
