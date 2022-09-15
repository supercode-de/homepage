import MC_Warteliste_Popup from "../MC_Warteliste_Popup"
const CourseDetailHeader = (props) => {
    const { subTheme, title, image, duration, modell, headerDescription, wartelisteLinkFormID } = props.kurs

    return (
        <section className="courseDetailHeader">
            <img
                className="headerBackground"
                src={`/img/${image}`}
                alt={title}
            />
            <div className="wrap">
                <article className="courseDetailHeader__textBlock">
                    <h2>
                        {subTheme}
                    </h2>
                    <h2>{title}</h2>
                    <p>
                        {modell} | {duration}
                    </p>
                    <div className="plusList">
                        {props.kurs.toolsInternal && props.kurs.toolsInternal.map((tool, index) => (
                            <img src={`/img/${tool.image}`} alt={tool.name} key={index} />
                        ))}
                        <p>+ more</p>
                    </div>
                    <p>{headerDescription}</p>
                    <MC_Warteliste_Popup wartelisteLinkFormID={wartelisteLinkFormID}/>

                </article>
            </div>

            <style jsx>{`
                .courseDetailHeader {
                    position: relative;
                    color: var(--clr-super-white);
                }
                .courseDetailHeader .headerBackground {
                    pointer-events: none;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: -1;
                }
                .courseDetailHeader__textBlock {
                    width: 50%;
                    margin: 0 0 0 auto;
                }
                .courseDetailHeader__textBlock h2 {
                    font-weight: 800;
                }
                .courseDetailHeader__textBlock .plusList {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin: 1% 0 5% 0;
                }
                .courseDetailHeader__textBlock .plusList img {
                    background-color: var(--clr-super-white);
                    display: inline-block;
                    border-radius: 50%;
                    padding: 10px;
                    z-index: 2;
                    width: 50px;
                    aspect-ratio: 1;
                }
                .courseDetailHeader__textBlock .plusList p {
                    padding: 0 0 0 2%;
                }
                .courseDetailHeader__textBlock a {
                    font-size: var(--fs-500);
                    background-color: var(--clr-super-green);
                    color: var(--clr-super-lila);
                    margin-top: 5%;
                }
                @media only screen and (max-width: 992px) {
                    .courseDetailHeader__textBlock {
                        width: 100%;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default CourseDetailHeader;
