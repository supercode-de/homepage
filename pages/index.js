import Head from 'next/head'
import Banner from '../components/Banner'
<<<<<<< HEAD
import Navigation from '../components/Navigation'
=======
import Footer from '../components/Footer'
import FooterCallToAction from '../components/FooterCallToAction'
import UnserCampus from '../components/UnserCampus'
import FAQ from '../components/FAQ'
import MeldeDich from '../components/MeldeDich'
>>>>>>> 525224b6ebeed7029e5e8720c8a0282c0b75604e

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Super-code</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      </Head>
      <main>
        <Banner />
        <MeldeDich />
        <UnserCampus />
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
       
      `}</style>
    </div>
  )
}
