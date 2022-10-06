const Timetable = (props) => {
    return (
        <article className="scheduleSection__weekGrid">
            {props.timetableData.map((timetableElement, index) => (
                <div key={index} className="scheduleSection__weekGrid__day">
                    <p className="dayHeadline">{timetableElement.wochentag}</p>
                    {timetableElement.blocks.map((timetableBlock, index) => (
                        <div key={index} className="scheduleSection__weekGrid__day__card">
                            <p className="headline">{timetableBlock.title}</p>
                            <p className="time">{timetableBlock.duration}</p>
                            <p className="text">
                                {timetableBlock.description}
                            </p>
                        </div>
                    ))}
                </div>
            ))}

            <style jsx>{`
                .scheduleSection__weekGrid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 20px;
                    margin-bottom: 10%;
                }
                .scheduleSection__weekGrid__day .dayHeadline {
                    text-align: center;
                    margin: 0 0 5% 0;
                }
                .scheduleSection__weekGrid__day__card {
                    background-color: var(--clr-super-lila);
                    color: var(--clr-super-white);
                    padding: 8%;
                    margin: 0 0 5% 0;
                    border-radius: 20px;
                }
                .scheduleSection__weekGrid__day__card .headline {
                    font-weight: 800;
                    font-size: var(--fs-300);
                }
                .scheduleSection__weekGrid__day__card .time {
                    font-size: var(--fs-200);
                }
                .scheduleSection__weekGrid__day__card .text {
                    margin: 5% 0;
                    font-size: var(--fs-200);
                }

                @media only screen and (max-width: 1200px) {
                    .scheduleSection__weekGrid {
                        grid-template-columns: 1fr;
                    }
                }
                @media (max-width: 768px) {
                    .scheduleSection__weekGrid {
                        width: 70%;
                        margin: 0 auto;
                    }
                }
                @media (max-width: 425px) {
                    .scheduleSection__weekGrid {
                        width: 100%;
                    }
                }
            `}</style>
        </article>
    );
}

export default Timetable;