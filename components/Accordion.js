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
                            <div classNAme="accordion-title-date">
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

        // <section className="accordion-item">
        //     <div className="accordion-title" onClick={(() => setIsActive(!isActive))}>
        //         <div className="accordion-title-arrow">
        //             <p>{isActive ? "-" : "+"}</p>
        //             <p>{props.curriculumContent.ablaufTitel}</p>
        //         </div>
        //         <div classNAme="accordion-title-date">
        //             <p>
        //                 {props.curriculumContent.ablaufZeitraum}
        //             </p>
        //         </div>
        //     </div>
        //     {isActive && <div className="accordion-content">
        //         <p>{props.curriculumContent.ablaufBeschreibung}</p>    
        //         <ul>
        //             {props.curriculumContent.ablaufBeschreibungPunkte.map((punkt, index) => (
        //                 <li>
        //                     {punkt}
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>}


        // </section>

    );
}

export default Accordion;