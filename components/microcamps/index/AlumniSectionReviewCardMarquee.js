import alumniBewertungen from "../../microcamps/data/alumniBewertungen";

const AlumniSectionReviewCardMarquee = (props) => {

    return (
        <div className="alumniSection__reviewGrid__card--outer">
            <div className="alumniSection__reviewGrid__card--inner">
                {alumniBewertungen.map((bewertung, i) => (
                    <div className="card">
                        <h5>{bewertung.name}</h5>
                        <p>{bewertung.jobtitel}</p>
                        <p className="flexible">{bewertung.bewertung}</p>
                    </div>
                ))}

            </div>


            <style jsx>{`
                .alumniSection__reviewGrid__card h5 {
                    padding: 0 0 0 5%;
                }
                .alumniSection__reviewGrid__card p {
                    white-space: pre-line;
                    padding: 0 0 0 5%;
                    margin: 0 0 2% 0;
                    font-size: clamp(1rem, 0.8875rem + 0.5625vw, 1.5625rem);
                }
                .alumniSection__reviewGrid__card--inner p:last-of-type {
                    // padding: 2% 0 0 5%;
                    background-image: url("/img/microcamps/questionmark.svg");
                    background-repeat: no-repeat;
                }

                .alumniSection__reviewGrid__card--outer {
                    padding: 30px;
                    border-radius: 50px;
                }
                .alumniSection__reviewGrid__card--inner {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                }
                .card {
                    display: flex;
                    flex-direction: column;
                    background: var(--super-blau);
                    width: 30vw;
                    margin-right: 50px;
                    padding: 30px;
                    border-radius: 50px;
                }
                .card h5 {
                    margin: 0;
                }
                .flexible {
                    flex-grow: 1;
                    margin-top: 20px;
                    width: 100%;
                }
                @media (max-width: 1024px) {
                    .card {
                        width: 50vw;
                    }
                }
                @media (max-width: 768px) {
                    .card {
                        width: 60vw;
                    }
                }
                @media (max-width: 425px) {
                    .card {
                        width: 80vw;
                    }
                }
            `}</style>
        </div>
    );
};

export default AlumniSectionReviewCardMarquee;
