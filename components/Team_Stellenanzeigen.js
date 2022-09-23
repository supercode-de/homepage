import stellenData from "./data/stellenausschreibungen.json"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Team_Stellenanzeigen = () => {
  return (
    <div id="stellen">
      <article className="stelle-boxes-headline">
        <h1>
          Super(Code)
          <br />x Super<span className="super">(You)</span>
        </h1>
      </article>
      {/* die styles für die accordion elemente selbst ist in der layout.js ab zeile 210 */}
      <section className="accordion-container">
        {stellenData.map((stelle, i) => (
          <Accordion allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {stelle.jobbezeichnung}
                <FontAwesomeIcon icon="chevron-down" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="stellen-aufgaben">
                <h3>Deine Aufgaben</h3>
                <p>{stelle.aufgabe1}</p>
                <p>{stelle.aufgabe2}</p>
                <p>{stelle.aufgabe3}</p>
              </div>
              <div className="stellen-profil">
                <h3>Dein Profil</h3>
                <p>{stelle.profil1}</p>
                <p>{stelle.profil2}</p>
                <p>{stelle.profil3}</p>
                <p>{stelle.profil4}</p>
                <p>{stelle.profil5}</p>
              </div>
              <div className="stellen-cta">
                <p className="cta">{stelle.cta}</p>
                <a href="mailto:bewerbung@super-code.de?subject=Main-Trainer*in Web-Entwicklung Teilzeit">Jetzt bewerben</a>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        ))}
      </section>
      
      <style jsx>{`
        #stellen {
          padding: 7em 0 5em;
          position: relative;
          z-index: 1;
          color: var(--super-white);
          background: var(--super-lila);
        }
        h1 {
          margin: 0 8.5% 1em;
        }
        h1 span.super {
          color: transparent;
          letter-spacing: 2px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--super-white);
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
          font-size: 15px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 20px;
          text-align: center;
          background: transparent;
          border: 1px solid var(--super-green);
          text-decoration: none;
          color: var(--super-white);
          display: inline-block;
          margin-top: 2rem;
          border-radius: 50px;
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
        @media (max-width: 320px) {
          a {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Team_Stellenanzeigen;
