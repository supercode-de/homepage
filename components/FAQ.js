import Collapsible from "./Collapsible"
import faqData from './data/faq'
import { useWindowSize } from './windowSize'

const FAQ = () => {
    const width = useWindowSize().width / 12
    return (
        <div id="faq">
            {faqData.map((faq, i) =>
                <Collapsible trigger={faq.question} key={i} > <p>{faq.answer}</p></Collapsible>
            )
            }
            <style jsx>{`
                #faq {
                    padding: 10vh 5%;
                    
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
                
            `}</style>
        </div >
    );
}

export default FAQ;