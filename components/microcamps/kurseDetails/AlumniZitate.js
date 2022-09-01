import alumniZitateData from "../data/alumniZitateData";

const AlumniZitate = (props) => {
    const filteredZitat = alumniZitateData.filter(alumniZitat => alumniZitat.theme === props.theme)
    return (
        <>

            {filteredZitat[0] &&
                <article className="scheduleSection__alumniZitat">
                    <img src={`/img/${filteredZitat[0].alumniImage}`} alt={`SuperCode Alumni ${filteredZitat[0].alumniName}`} />
                    <div className="scheduleSection__alumniZitat__textArea">
                        <p>{filteredZitat[0].alumniZitat}</p>
                        <p>{filteredZitat[0].alumniName}</p>
                    </div>
                <style jsx>{`
                    .scheduleSection__alumniZitat {
                        width: 50%;
                        margin: 0 auto;
                        display: flex;
                        align-items: center;
                        gap: 50px;
                    }
                    .scheduleSection__alumniZitat__textArea p {
                        padding: 2% 0 0 5%;
                    }
                    .scheduleSection__alumniZitat__textArea p:first-of-type {
                        background-image: url(/img/questionmark.svg);
                        background-repeat: no-repeat;
                    }

                    @media only screen and (max-width: 1200px) {
                        .scheduleSection__alumniZitat {
                            width: 100&;
                            flex-wrap: wrap;
                        }

                        img {
                            width: 60%;
                            margin: 0 auto;
                        }
                    }
                `}</style>
                </article>
            }
        </>
    );
}

export default AlumniZitate;