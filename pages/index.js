import Head from 'next/head'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Super-code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
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
