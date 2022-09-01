const BootcampSection = (props) => {
  return (
    <section className="bootcampSection">
      <div className="wrap">
        <article className="bootcampSection__headline">
          <p>Curriculum</p>
          <h3>Was dich in diesem MicroCamp erwartet:</h3>
        </article>
        <article className="bootcampSection__list">
          {props.curriculumOverview.map((curriculumItem, index) => (
            <div key={index} className="bootcampSection__list__item">
              <div className="num_wrapper">
                <h2 className="headlines_stroke">
                  {index === 9 ? `${index + 1}` : `0${index + 1}`}
                </h2>
              </div>
              <div>
                <h4>{curriculumItem.curriculumTitle}</h4>
                <p>{curriculumItem.curriculumPreview}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default BootcampSection;
