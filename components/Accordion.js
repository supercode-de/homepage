import { useState } from "react";
const Accordion = (props) => {
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
            {props.curriculumContent.map((content, index) => {
                const active = index === activeIndex ? "active" : "hide";
                return (
                    <section className="accordion-item" key={index}>
                        <div className="accordion-title" onClick={() => onTitleClick(index)}>
                            <div className="accordion-title-arrow">
                                <p>{index === activeIndex ? "-" : "+"}</p>
                                <p>{content.ablaufTitel}</p>
                            </div>
                            <div className="accordion-title-date">
                                <p>
                                    {content.ablaufZeitraum}
                                </p>
                            </div>
                        </div>
                        <div className={`accordion-content ${active}`}>
                            <p>{content.ablaufBeschreibung}</p>
                            <ul>
                                {content.ablaufBeschreibungPunkte.map((punkt, index) => (
                                    <li key={index}>
                                        {punkt}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )
            })}
            <style jsx>{`
            .accordion-item {
                background: var(--clr-super-green);
                cursor: pointer;
                margin-bottom: 2%;
                border-radius: 50px;
                padding: 2%;
            }
            .accordion-item:nth-of-type(1){
                margin-top: 5%;
            }
            .accordion-title,
            .accordion-title-arrow{
                display: flex;
            }
            .accordion-title {
                justify-content: space-between;
            }
            .accordion-title-arrow {
                gap: 20px;
            }
            .accordion-title-arrow p {
                font-family: var(--ff-reg-bold);
                font-size: clamp(1rem, 0.6667rem + 0.6944vw, 1.5rem);
            }
            .accordion-title-date p {
                // font-size: var(--fs-200);
                font-size: clamp(0.75rem, 0.4167rem + 0.6944vw, 1.25rem);
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
            @media (max-width: 768px) {
                .accordion-item {
                    border-radius: 25px;
                    padding: 5%;
                }
            }
            @media (max-width: 425px) {
                .accordion-title-arrow {
                    order: 2;
                }
                .accordion-title {
                    flex-direction: column;
                }
                .accordion-title-date p {
                    display: none;
                }
            }
            `}</style>
        </>

    );
}

export default Accordion;