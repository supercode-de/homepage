import Navigation from "./Navigation"
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <div id="super-layout">
      <Head>
        <title>Super-code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {props.banner ? <Banner /> : ""}
      <Navigation />
      {props.children}
      <Footer />

      <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700|Fira+Sans:100,200,300,400,500,600,700,800,900&display=swap');
          html {
            scroll-behavior: smooth;
          }        
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
         `}</style>
    </div>
  );
}

export default Layout;