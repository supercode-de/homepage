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
        </article >
    );
}

export default Timetable;