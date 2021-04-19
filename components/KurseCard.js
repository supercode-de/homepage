import Curriculum from "./Curriculum_Popup";
import Typeform_neu_small from "./TypeForm_neu_small";
const KurseCard = (props) => {
    const { headline, umfang, start, copy } = props.data
    return (
        <section className="kurseCard">
            <div>
                <h5>{headline}</h5>
                <p>{umfang}</p>
                <p>{start}</p>
                <p>{copy}</p>
            </div>
            <div className="buttons">
                <Typeform_neu_small />
                <Curriculum buttonText="Curriculum"/>
            </div>

            <style jsx>{`
                .kurseCard {
                    border: 4px solid var(--super-green);
                    white-space: pre-line;
                    padding: 43px 28px;
                    width: 27%;
                }
                .kurseCard div:first-child {
                    min-height: 315px;
                }
                .buttons {
                    display: flex;
                    gap: 1rem;
                }
                h5 {
                    font-family: "Neue_Machina_Ultrabold";
                    font-size: 2.5rem;
                    margin: 0;
                }
                p {
                    font-family: "Neue_Machina_Regular_400";
                    line-height: 25px;
                }

            `}
                
            </style>
        </section>
    );
}

export default KurseCard;