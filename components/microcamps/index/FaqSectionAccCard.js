import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqSectionAccCard = (props) => {
  const { frage} = props;
  return (
    <Accordion
      expanded={props.expanded === `panel${props.index}`}
      onChange={props.handleChange(`panel${props.index}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{frage}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {/* {antwort} */}
          Platzhalter
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqSectionAccCard;
