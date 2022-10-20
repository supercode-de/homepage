import MC_Warteliste_Popup from "../MC_Warteliste_Popup"
const TermineMicrocamps = (props) => {
    return (

        <div className="single-card">
            <div className="left-wrapper">
                <h4>{props.kursTitel}</h4>
                <div className="info-text">
                    <p className="start-date">Startdatum: {props.datum}</p>
                </div>

                <p className="places-wr">
                    <span className="circle">max. 8 Plätze</span>
                </p>
                <MC_Warteliste_Popup
                    wartelisteLinkFormID={props.wartelisteLinkFormID}
                    theme={props.data.data.theme}
                />
            </div>
            <div className="right-wrapper">
                <img src={props.trainerImage} alt={props.trainerName} />
                <h5>{props.trainerName}</h5>
                <h6>{props.trainerTitel}</h6>
            </div>

            <style jsx>{`
                .single-card {
                    display: inline-flex;
                    align-items: center;
                    background-color: var(--clr-super-lila);
                    border-radius: 25px;
                    color: var(--clr-super-white);
                    padding: 3.125rem;
                    gap: 20px;
                }
                .left-wrapper .info-text{
                    margin: 0 0 0.625rem 0;
                }
                .start-date {
                    color: var(--super-green);
                    font-family: var(--ff-reg-bold);
                    font-size: var(--fs-300);
                }
                .btn{
                    font-size: var(--fs-300);
                    background-color: var(--clr-super-green);
                    color: var(--clr-super-lila);
                    margin-top: 5%;
                }

                .left-wrapper .places-wr .circle {
                    background: url("/img/microcamps/world_circle.svg") center center/contain no-repeat;
                    padding: var(--fs-300);
                }
        
                .right-wrapper img {
                    height: 120px;
                    width: 120px;
                    object-fit: cover;
                    border-radius: 100%;
                    margin-bottom: 35px;
                }
                .right-wrapper h5 {
                    line-height: inherit;
                    margin-bottom: 15px;
                }
                .right-wrapper h5,
                .right-wrapper h6 {
                    font-size: var(--fs-300);
                }
        
                .right-wrapper h6  {
                    font-weight: 400;
                    margin: 0;
                }


                @media (max-width: 500px) {
                    .single-card {
                        display: block;
                    }
                    .right-wrapper {
                        text-align: center;
                        margin-top: 20px;
                    }
                }
                @media (max-width: 425px) {
                    .single-card {
                        padding: 2rem;
                    }
                    .left-wrapper h4 {
                        line-height: 100%;
                    }
                    .left-wrapper .info-text .start-date {
                        background: none;
                        margin-top: 10px;
                    }
                    .right-wrapper img {
                        margin-bottom: 10px;
                    }
                }
            `}</style>
        </div>
    );
}

export default TermineMicrocamps;