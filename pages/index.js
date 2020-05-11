import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FooterCallToAction from '../components/FooterCallToAction'
import UnserCampus from '../components/UnserCampus'
import FAQ from '../components/FAQ'
import MeldeDich from '../components/MeldeDich'
import Bewerbungsprozess from '../components/Bewerbungsprozess'
import Header from '../components/Header'
import HeaderCallToAction from '../components/HeaderCallToAction'
import Zukunft from '../components/Zukunft'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Super-code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <Header />
        <HeaderCallToAction />
        <Zukunft />
        {/* <Bewerbungsprozess /> */}
        <MeldeDich />
        {/* <UnserCampus /> */}
        <FAQ />
        <FooterCallToAction month="Mai" />
        <Footer />
      </main>


      <style jsx>{`
       
      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700|Fira+Sans:100,200,300,400,500,600,700,800,900&display=swap');        
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Fira Sans', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          body {
            font-size: 10px;
          }
          }
      }
      `}</style>
    </div>
  )
}
