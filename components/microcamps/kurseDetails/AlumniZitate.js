import alumniZitateData from "../../../data/alumniZitateData";

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

                </article>
            }
        </>
    );
}

export default AlumniZitate;