import Header from '../components/Header'
import HeaderCallToAction from '../components/HeaderCallToAction'
import Zukunft from '../components/Zukunft'
import UnserCampus from '../components/UnserCampus'
import Weiterbildung from '../components/Weiterbildung'
import SuperPartner from '../components/SuperPartner'
import Finanzierung from '../components/Finanzierung'
import Bewerbungsprozess from '../components/Bewerbungsprozess'
import MeldeDich from '../components/MeldeDich'
import FAQ from '../components/FAQ'
import FooterCallToAction from '../components/FooterCallToAction'


import { useWindowSize } from '../components/functions/windowSize'
import Layout from '../components/Layout'
import dates from '../components/data/dates.json'

export default function Home(props) {

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
            <SuperPartner width={width} />
            <Finanzierung />
            <Bewerbungsprozess />
            <MeldeDich />
            <FAQ width={width} />
            <FooterCallToAction month={dates.VzTzMonth} />
          </main>
          <style jsx>{``}</style>
        </div>
      </Layout>
    )
  } else { return "" }



}
