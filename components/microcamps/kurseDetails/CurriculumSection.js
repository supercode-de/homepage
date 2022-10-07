import Accordion from "../../Accordion";

const CurriculumSection = (props) => {
  const {
    theme,
    subTheme,
    modell,
    duration,
    curriculumExtended,
    category,
    jobtitle,
  } = props.kurs;

  return (
    <section className="curriculumSection" id="curriculumSection">
      <div className="wrap">
        <article className="curriculumSection__introArticle">
          <div className="curriculumSection__introArticle__textWrap">
            <div className="curriculumSection__introArticle__headline">
              <h3>Steig direkt ein</h3>
              <h3>
                in die Praxis{" "}
                {theme === "design"
                  ? "des UX/UI-Designs"
                  : theme === "coding"
                  ? "der Web-Entwicklung"
                  : theme === "data"
                  ? "der Datenwissenschaften"
                  : ""}
              </h3>
            </div>
            <div className="curriculumSection__introArticle__text">
              <p>
                Unser MicroCamp ist so aufgebaut, dass du {category} Schritt für
                Schritt mit einem Curriculum lernst, das sich zu 100 % auf
                Learning-by-Doing konzentriert.
              </p>
              <p>
                Im Gegensatz zu vielen {category} Kursen, die seit Jahren
                denselben Powerpoint-lastigen Lehrplan vermitteln, lernst du in
                unserem MicroCamp die neuesten Tools, Workflows und Best
                Practices live und online.
              </p>
              <p>
                Um Zeit zu sparen und von Anfang an richtig durchzustarten,
                empfehlen wir dir, dich vor dem MicroCamp schon einmal mit der
                Materie vertraut zu machen und ein paar Praxisübungen zu
                absolvieren.
              </p>
            </div>
          </div>
          <img src="/img/microcamps/curriculumPic1.png" alt="Supercode People" />
        </article>
        <article className="curriculumSection__introArticle">
          <img src="/img/microcamps/curriculumPic2.png" alt="Supercode People" />
          <div className="curriculumSection__introArticle__textWrap">
            <div className="curriculumSection__introArticle__headline">
              <h3>
                {theme === "design"
                  ? "Erstelle UX-Fallstudien anhand realer Designvorgaben"
                  : theme === "coding"
                  ? "Erstelle richtige Webseiten anhand von Designvorgaben"
                  : theme === "data"
                  ? "Erstelle richtige Datenanalysen anhand von Praxisbeispielen"
                  : ""}
              </h3>
            </div>
            <div className="curriculumSection__introArticle__text">
              <p>
                In unserem Kurs lernst du nicht nur die Kernkompetenzen von
                Junior {jobtitle}, sondern arbeitest auch an Briefings, wie sie
                dir in der Berufspraxis begegnen würden.
              </p>
              <p>
                Dies ist eine großartige Gelegenheit, an einem Produkt zu
                arbeiten und relevante Fallstudien von Produkten zu erstellen!
              </p>
            </div>
          </div>
        </article>
        <article className="curriculumSection__curriculumView">
          <div className="curriculumSection__curriculumView__introText">
            <h4>
              {duration} | {modell}
            </h4>
            <p>
              Unser MicroCamp ist ein{" "}
              {Number(duration.slice(0, 1)) > 10
                ? Number(duration.slice(0, 1))
                : Number(duration.slice(0, 2))}
              -wöchiger Intensivkurs. Erlerne mit maximal 20 Teilnehmer*innen
              aus ganz Deutschland die Grundlagen von {subTheme}.
            </p>
          </div>
          <div className="accordion">
            <Accordion curriculumContent={curriculumExtended}/>
          </div>
          
        </article>
      </div>

      <style jsx>{`
        .curriculumSection__introArticle {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-end;
          margin: 0 0 10% 0;
        }
        .curriculumSection__introArticle__textWrap {
          width: 65%;
        }
        .curriculumSection__introArticle__headline {
          margin: 0 0 2% 0;
        }
        .curriculumSection__introArticle__headline h3 {
          color: var(--clr-super-lila);
        }
        .curriculumSection__introArticle__text p {
          margin: 0 0 1% 0;
        }
        .curriculumSection__introArticle img {
          border-radius: 25px;
          width: 30%;
          // height: fit-content;
        }
        .curriculumSection__curriculumView {
          margin: 0 5%;
        }
        .curriculumSection__curriculumView__introText {
          margin: 0 20% 0 0;
        }
        .curriculumSection__curriculumView__introText h4 {
          font-size: var(--fs-600);
          margin-bottom: 15px;
        }
        .curriculumSection__curriculumView__arccordion {
          margin: 5% 0 0 0;
          font-size: var(--fs-300);
        }
        .curriculumSection__curriculumView__arccordion .headline {
          font-size: var(--fs-500);
          font-family: var(--ff-reg-bold);
        }
        .curriculumSection__curriculumView__arccordion .time {
          font-size: var(--fs-200);
        }
        @media only screen and (max-width: 1200px) {
          .curriculumSection__introArticle__textWrap {
            width: 100%;
          }
          .curriculumSection__introArticle img {
            width: 100%;
            order: 2;
          }
        }
        @media (max-width: 425px) {
          .curriculumSection__introArticle img {
            margin: 2em 0;
          }
        }
        @media (max-width: 320px) {
          .curriculumSection__curriculumView {
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CurriculumSection;
