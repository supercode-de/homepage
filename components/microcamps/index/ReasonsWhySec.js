import reasons from "../../microcamps/data/reasonsData";
import ReasonsWhyOneReason from "../index/ReasonsWhyOneReason";


const ReasonsWhySec = () => {
    return (
        <section className="reasonsWhySec">
            <div className="wrap">
                <article className="reasonsWhySec__textarea" id="wiesoWir">
                    <p>07 gute Gründe</p>
                    <h3>Warum</h3>
                    <h3>
                        <span className="headlines_stroke">MicroCamps?</span>
                    </h3>
                    <div className="reasonsWhySec__textarea__list">
                        <ul>
                            {reasons.map((reason, i) => (
                                <ReasonsWhyOneReason
                                    key={i}
                                    id={reason.id}
                                    title={reason.title}
                                    reason={reason.reason}
                                />
                            ))}
                        </ul>
                    </div>
                </article>
                <img src="img/microcamps/people_center.png" alt="People from Supercode" />
            </div>

            <style jsx>{`
                .reasonsWhySec .wrap {
                    padding: 10% 5% 0 5%;
                }
                .reasonsWhySec__textarea h3 {
                    color: var(--clr-super-lila);
                }
                .reasonsWhySec__textarea h3 .headlines_stroke {
                    -webkit-text-stroke: 0.025em var(--clr-super-lila);
                }
                .reasonsWhySec__textarea__list {
                    margin: 5% 0 10% 0;
                }
                .reasonsWhySec__textarea__list ul {
                    padding: 0;
                    list-style: none;
                }
                .reasonsWhySec img {
                    width: 100%;
                    transform: translateY(5%);
                }
            `}</style>
        </section>
    );
};

export default ReasonsWhySec;
