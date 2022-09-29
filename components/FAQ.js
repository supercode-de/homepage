import Accordion_FAQ from "./Accordion_FAQ";
import Collapsible from "./FAQItem";

const FAQ = (props) => {
  console.log("FAW", props);
  return (
    <div id="faq">
      <h2>FAQ</h2>

      {/* <div className="grid">
        {props.faqData.map((faq, i) => (
          <Collapsible trigger={faq.question} key={i}>
            {" "}
            <p>{faq.answer}</p>
          </Collapsible>
        ))}
      </div> */}
      <div className="grid">
          <Accordion_FAQ faqData={props.faqData}/>
      </div>

      <style jsx>{`
          #faq {
            padding: 100px calc(100vw / 12) 150px;
            position: relative;
            background: var(--super-black);
          }
          h2 {
            margin-top: 5%;
            margin-bottom: 5%;
            margin-left: -2%;
            display: block;
            color: transparent;
            font-weight: 400;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: var(--super-green);
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0 5%;
          }

          .aside {
            position: absolute;
            transform: rotate(-90deg);
            transform-origin: left;
            left: 2em;
            top: 50%;
            color: var(--super-white);
          }

          @media (max-width: 768px) {
            #faq {
              padding: 10px calc(100vw / 12) 50px;
            }
            .grid {
              display: block;
              padding: 10px;
            }
            .aside {
              display: none;
            }
          }
          @media (max-width: 425px) {
            h2 {
              font-size: 3rem;
            }
          }
        `}</style>
    </div>
  );
}

export default FAQ;