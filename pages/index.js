import FooterCallToAction from '../components/FooterCallToAction'
import UnserCampus from '../components/UnserCampus'
import FAQ from '../components/FAQ'
import MeldeDich from '../components/MeldeDich'
import Header from '../components/Header'
import HeaderCallToAction from '../components/HeaderCallToAction'
import Zukunft from '../components/Zukunft'
import Weiterbildung from '../components/Weiterbildung'
import Bewerbungsprozess from '../components/Bewerbungsprozess'

import { useWindowSize } from '../components/functions/windowSize'
import Layout from '../components/Layout'


export default function Home() {
  if (process.browser) {
    const width = useWindowSize().width / 12
    return (
      <Layout banner={true}>
        <div className="container">
          <main>
            <Header width={width} />
            <HeaderCallToAction />
            <Zukunft width={width} />
            <UnserCampus width={width} />
            <Weiterbildung />
            <Bewerbungsprozess />
            <MeldeDich />
            <FAQ />
            <FooterCallToAction month="Mai" />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    )
  } else { return "" }



}
