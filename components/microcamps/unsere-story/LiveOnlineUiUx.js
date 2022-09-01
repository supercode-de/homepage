const LiveOnlineUiUx = () => {
  return (
    <section className="online-uiux-wrapper">
      <div className="content-wrapper">
        <h2>Live, online, Praxis- und Teilzeit-optimiert!</h2>
        <p>
          Unsere MicroClasses verfolgen einen Learning-by-Doing-Ansatz, bei dem ihr live mit den neuesten Echtzeit-Design und Coding-Tools zusammenarbeitet. Sie sind so konzipiert, dass ihr ganz bequem neben eurem Job daran teilnehmen könnt. Sie sind ein Produkt aus langjährigen Erfahrung im Bereich der Vollzeit Bootcamps und eine tolle Teamleistung!
        </p>
        <p>
          Dies spiegelt sich auch in den 5/5 Bewertungen unserer Alumni wieder! Im Gegensatz zu vielen anderen Bildungsanbietern ist SuperCode zu 100 % remote, zu 100 % bootstrapped mit dem Ziel, neuen und erfahrenen Designer*innen oder Coder*innen dabei zu helfen, effektiv und neben dem Job neue Skills zu erlernen.
        </p>
      </div>
      <div className="btn-wrapper">
        <a className="btn" href="#allCourses">zu den Kursen</a>
      </div>

      <style jsx>{`
        .online-uiux-wrapper {
          padding: 0 10.125rem;
        }
        .online-uiux-wrapper .btn-wrapper {
          display: flex;
          justify-content: flex-end;
        }
        .online-uiux-wrapper a {
          font-size: var(--fs-500);
          background-color: var(--clr-super-green);
          color: var(--clr-super-lila);
        }
        @media only screen and (max-width: 576px) {
          .online-uiux-wrapper {
            padding: 3.125rem 4.5rem;
          }
          .online-uiux-wrapper .btn-wrapper {
            justify-content: center;
          }
        }
      
      `}</style>
    </section>
  );
};

export default LiveOnlineUiUx;