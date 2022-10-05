import AllCoursesList from "./AllCoursesList";
const AllCoursesArea = () => {
    return (
        <section className="allCoursesArea">
            <div className="wrap">
                <article className="allCoursesArea__introText" id="allCourses">
                    <h3>Live & Online – </h3>
                    <h3>
                        unsere<span className="headlines_stroke"> MicroCamps</span>
                    </h3>
                    <p>
                        Du bist wissenshungrig, möchtest aber nicht ganze 3 Monate in einem Web-Development oder UX/UI-Design Bootcamp hängen? Kein Problem! Stell dir deinen Lernpfad individuell zusammen und lerne nur das, was du wirklich brauchst.
                    </p>
                </article>
                <AllCoursesList />

            </div>
            <style jsx>{`
                .allCoursesArea {
                    background-color: var(--clr-super-lila);
                    color: var(--clr-super-white);
                    overflow: hidden;
                }
                
                .allCoursesArea__introText p {
                    margin: 1% 55% 2% 0;
                }

                @media only screen and (max-width: 992px) {
                    .allCoursesArea__introText p {
                        margin: 1% 0 2% 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default AllCoursesArea;
