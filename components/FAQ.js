import Collapsible from "./FAQItem"
import faqData from './data/faq'
import { useWindowSize } from './functions/windowSize'

const FAQ = () => {
    const width = useWindowSize().width / 12
    return (
        <div id="faq">
            <span className="aside">FAQ Yourself</span>
            {faqData.map((faq, i) =>
                <Collapsible trigger={faq.question} key={i} > <p>{faq.answer}</p></Collapsible>
            )
            }
            <style jsx>{`
                #faq {
                    padding: 10vh ${width * 2}px;
                    
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    position: relative;
                    background-color: #000;
                    background-image:
                      linear-gradient(
                        to right,
                        rgba(255, 0, 0, 0.25) 0,
                        rgba(255, 0, 0, 0.25) 1px,
                        transparent 1px,
                        transparent 100%
                      ),
                      linear-gradient(
                        to bottom,
                        rgba(255, 0, 0, 0.25) 0,
                        rgba(255, 0, 0, 0.25) 1px,
                        transparent 1px,
                        transparent 100%
                      )
                    ;
                    background-position: 0 0, 0 0;
                    background-size: ${width}px ${width}px;
                }
                .Collapsible {
                    
                }
                .aside {
                    position: absolute;
                    transform: rotate(-90deg);
                    transform-origin: left;
                    left: calc(${width}px - .5em);
                    top: 50%;
                    color: #3DD7AC
                  }
            `}</style>
        </div >
    );
}

export default FAQ;