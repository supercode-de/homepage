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

      <style jsx>{`
        .bootcampSection .wrap {
          padding: 0 5% 0 5%;
        }
        .bootcampSection__headline {
          margin: 0 0 2% 0;
        }
        .bootcampSection__headline h3 {
          color: var(--clr-super-lila);
        }
        .bootcampSection__list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        .bootcampSection__list__item {
          display: flex;
          gap: 35px;
          align-items: center;
        }
        .bootcampSection__list__item .headlines_stroke {
          -webkit-text-stroke: 0.025em var(--clr-super-lila);
          color: transparent;
          font-weight: 800;
        }
        .bootcampSection .num_wrapper {
          width: 12%;
        }
      
        @media only screen and (max-width: 992px) {
          .bootcampSection__list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default BootcampSection;
