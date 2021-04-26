import Curriculum from "./Curriculum_Popup";
import Typeform_neu_small from "./TypeForm_neu_small";
const KurseCard = (props) => {
    const { headline, umfang, start, copy, hubspotFormID, headlineID } = props.data
    return (
        <section className="kurseCard">
            <div className="headlines">
                <h5 id={headlineID} >{headline}</h5>
            </div>
            <div className="text">
                <p>{umfang}</p>
                <p>{start}</p>
                <p>{copy}</p>
            </div>
            <div className="buttons">
                <Typeform_neu_small />
                <Curriculum buttonText="Curriculum" hubspot={hubspotFormID} />
            </div>
            <style jsx>{`
                .kurseCard {
                    border: 4px solid var(--super-green);
                    background: var(--super-lila);
                    white-space: pre-line;
                    // display: flex;
                    // flex-direction: column;
                    min-height: 100%;
                    padding: 43px 28px;
                    margin: 0 2rem;

                    display: grid;
                    // grid-template-rows: .7fr 2fr .2fr;
                    grid-template-rows: 0.3fr 1.1fr minmax(20px, 60px);
                    grid-template-areas:
                    "headlines"
                    "text"
                    "buttons";                             
                }
                .headlines { grid-area: headlines; }
                .text { grid-area: text; }
                .buttons { grid-area: buttons; }

                .kurseCard:hover {
                    background: var(--super-blau);
                }
                .buttons {
                    min-width: 100%;

                    display: flex;                
                    gap: 1rem;
                    // border: 5px solid black;
                }
                h5 {
                    font-family: "Neue_Machina_Ultrabold";
                    font-size: 2.5rem;
                    margin: 0;
                    padding: 0;
                }
                p {
                    font-family: "Neue_Machina_Regular_400";
                    line-height: 25px;
                }

                @media (max-width: 1440px) {
                    h5 {
                        font-size: 2rem;
                    }
                    .kurseCard {
                        grid-template-rows: 0.2fr 1.2fr minmax(20px, 60px);
                    }
                }
                @media (max-width: 768px) {
                    .kurseCard {
                        // grid-template-rows: 0.2fr 1.2fr minmax(20px, 60px);
                    }
                    h5 {
                        font-size: 1.6rem;
                    }
                    p {
                        font-size: 14.7px;
                    }                
                }
                @media (max-width: 425px) {
                    .kurseCard {
                        padding-bottom: 80px;
                    }
                    .buttons {
                        flex-direction: column;

                    }
                }
                @media (max-width: 375px) {
                    h5 {
                        font-size: 1.5rem;
                    }
                }
                @media (max-width: 320px) {
                    
                }
            `}

            </style>
        </section>
    );
}

export default KurseCard;