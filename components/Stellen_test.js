// import Collapsible from "./FAQItem";
import stellenData from "../components/data/stellenausschreibungen_test.json"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WorkIT = (props) => {

  return (
    <div id="stellen" className="lilaGitter">
      <article className="stelle-boxes-headline">
        <h1>
          Super(Code)
          <br />x Super<span className="super">(You)</span>
        </h1>
      </article>
      {/* das ist aktuell noch hard gecoded, weil map mit dem accordion package irgendwie nicht funktioniert hat */}
      {/* die styles für die accordion elemente selbst ist in der layout.js ab zeile 210 */}
      <article className="accordion-container">
        <Accordion allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {stellenData[1].jobbezeichnung}
                <FontAwesomeIcon icon="chevron-down" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="stellen-aufgaben">
                <h3>Deine Aufgaben</h3>
                <p>{stellenData[1].aufgabe1}</p>
                <p>{stellenData[1].aufgabe2}</p>
                <p>{stellenData[1].aufgabe3}</p>
              </div>
              <div className="stellen-profil">
                <h3>Dein Profil</h3>
                <p>{stellenData[1].profil1}</p>
                <p>{stellenData[1].profil2}</p>
                <p>{stellenData[1].profil3}</p>
                <p>{stellenData[1].profil4}</p>
                <p>{stellenData[1].profil5}</p>
              </div>
              <div className="stellen-cta">
                <p className="cta">{stellenData[1].cta}</p>
                <a href="mailto:bewerbung@super-code.de?subject=Main-Trainer*in Web-Entwicklung Teilzeit">Jetzt bewerben</a>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </article>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          color: #fff;
        }
        #stellen {
          padding: 7em 0 5em;
          position: relative;
          z-index: 1;
        }
        h1 {
          margin: 0 8.5% 1em;
        }
        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          font-weight: 300;
        }
        h3 {
          margin-bottom: 1rem;
          font-size: 1.563rem;
        }
        p {
          margin-bottom: .5rem;
        }
        a {
          font-family: "FiraSans-Regular", sans-serif;          
          font-size: 15px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 20px;
          text-align: center;
          background: transparent;
          border: 1px solid #fff;
          text-decoration: none;
          color: #fff;
          display: inline-block;
          margin-top: 2rem;
        }
        a:hover {
          color: var(--super-lila);
          background: var(--super-green);
        }
        .accordion-container {
          width: 83%;
          margin: 0 auto;
        }
        .stellen-aufgaben {
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
};

export default WorkIT;
