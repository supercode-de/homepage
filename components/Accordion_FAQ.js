import { useState } from "react";
const Accordion_FAQ = (props) => {
    console.log("accordion faq", props);
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <>
            {props.faqData.map((faqItem, index) => {
                const active = index === activeIndex ? "active" : "hide";
                return (
                    <section className="accordion-item" key={index}>
                        <div className="accordion-title" onClick={() => onTitleClick(index)}>
                            <div className="accordion-title-arrow">
                                <p>{faqItem.question}</p>
                                <p>{index === activeIndex ? "-" : "+"}</p>
                            </div>
                        </div>
                        <div className={`accordion-content ${active}`}>
                            <p>{faqItem.answer}</p>
                        </div>
                    </section>
                )
            })}
            <style jsx>{`
            .accordion-item {
                cursor: pointer;
                margin-bottom: 2%;
                color: var(--super-green);
            }
            .accordion-title,
            .accordion-title-arrow{
                display: flex;
            }
            .accordion-title-arrow {
                width: 100%;
                justify-content: space-between;
                
            }
            .accordion-title-arrow p {
                font-size: var(--fs-500);
            }
            .accordion-title-date p {
                font-size: var(--fs-200);
            }
            .accordion-content ul {
                list-style-type: disc;
            }

            .hide {
                display: none;
            }

            .active {
                display: block;
            }
            .accordion-content p {
                margin: 2% 0;
            }
            .accordion-content ul li{
                font-size: var(--fs-300);
                margin-bottom: .5%;
            }
            `}</style>
        </>

    );
}

export default Accordion_FAQ;