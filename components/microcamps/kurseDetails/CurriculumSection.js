import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useState } from "react";
import styled from "@emotion/styled";

const CurriculumSection = (props) => {
  const {
    theme,
    subTheme,
    modell,
    duration,
    curriculumExtended,
    category,
    jobtitle,
  } = props.data;

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    borderRadius: "25px",
    padding: "5px",
    fontFamily: "var(--ff-reg-regular)",
    backgroundColor: "var(--clr-super-green)",
    "&:not(:first-of-type)": {
      margin: "2% 0 0 0",
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={
        <ArrowForwardIosSharpIcon
          sx={{
            fontSize: "1.2rem",
            color: "var(--clr-super-lila)",
          }}
        />
      }
      {...props}
    />
  ))(({ theme }) => ({
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: "1%",
      justifyContent: "space-between",
    },
  }));

  const [expanded, setExpanded] = useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <section className="curriculumSection" id="curriculumSection">
      <div className="wrap">
        <article className="curriculumSection__introArticle">
          <div className="curriculumSection__introArticle__textWrap">
            <div className="curriculumSection__introArticle__headline">
              <p>Curriculum</p>
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
          <img src="/img/curriculumPic1.png" alt="Supercode People" />
        </article>
        <article className="curriculumSection__introArticle">
          <img src="/img/curriculumPic2.png" alt="Supercode People" />
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
          <div className="curriculumSection__curriculumView__arccordion">
            {curriculumExtended.map((curriculumExtendedItem, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index + 1}`}
                onChange={handleChange(`panel${index + 1}`)}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography className="headline">
                    {curriculumExtendedItem.ablaufTitel}
                  </Typography>
                  <Typography className="time">
                    {curriculumExtendedItem.ablaufZeitraum}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordion-body">
                    {curriculumExtendedItem.ablaufBeschreibung}
                  </Typography>
                  <ul>
                    {curriculumExtendedItem.ablaufBeschreibungPunkte.map(
                      (einzelnePunkte, index) => (
                        <li key={index}>{einzelnePunkte}</li>
                      )
                    )}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default CurriculumSection;
