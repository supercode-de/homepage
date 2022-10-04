const AlumniSectionReviewCard = (props) => {
    const { name, jobtitel, bewertung } = props
    return (
        <div className="alumniSection__reviewGrid__card">
            <h5>{name}</h5>
            <p>{jobtitel}</p>
            <p>{bewertung}</p>

            <style jsx>{`
                .alumniSection__reviewGrid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                .alumniSection__reviewGrid__card h5 {
                    padding: 0 0 0 5%;
                }
                .alumniSection__reviewGrid__card p {
                    white-space: pre-line;
                    padding: 0 0 0 5%;
                    margin: 0 0 2% 0;
                    font-size: clamp(1rem, 0.8875rem + 0.5625vw, 1.5625rem);
                }
                .alumniSection__reviewGrid__card p:last-of-type {
                    padding: 2% 0 0 5%;
                    background-image: url("/img/microcamps/questionmark.svg");
                    background-repeat: no-repeat;
                }
            `}</style>
        </div>
    );
};

export default AlumniSectionReviewCard;
