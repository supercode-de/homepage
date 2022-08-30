const SolutionLearningUxUi = () => {
  return (
    <section className="solution-wrapper">
      <div className="content-wrapper">
        <h2>Wir machen Bildung wieder fair, transparent und sexy – Digitale Bildung für alle!</h2>
        <p>
          Vorbei ist das Zeitalter von Präsenzkursen und Klassenzimmern. Wir holen euch bewusst deutschlandweit an die PCs, damit wir und ihr die Möglichkeit habt, eine Community aufzubauen.
        </p>
        <p>
          Unsere Kurse sind limitiert auf bis zu acht Personen, damit ihr in der Gruppe eine tolle Lernerfahrung habt und nicht nur einer unter vielen seid. Unsere Preise sind fair und transparent und ermöglichen es auch bei einem schmalen Portmonee dennoch qualitative Bildung zu erfahren. So sollte Bildung immer sein!
        </p>
      </div>

      <div className="img-wrapper">
        <img src="/img/microcamps/people_center.png" alt="erfolgreiche supercode Teilnehmende" />
      </div>

      <style jsx>{`
        .solution-wrapper {
          padding: 12.5rem 10.125rem;
        }
        .solution-wrapper p:nth-of-type(1) {
          margin-bottom: 2rem;
        }
        .solution-wrapper .img-wrapper {
          display: flex;
          justify-content: center;
        }
        @media only screen and (max-width: 576px) {
          .solution-wrapper {
            padding: 3.125rem 4.5rem;
          }
          .solution-wrapper .img-wrapper img {
            max-width: 100%;
          }
        }
      
      `}</style>
    </section>
  );
};

export default SolutionLearningUxUi;
