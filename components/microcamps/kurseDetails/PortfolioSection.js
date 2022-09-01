import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useState } from "react";
import styled from "@emotion/styled";

const PortfolioSection = () => {
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
        <section className="portfolioSection" id="portfolioSection">
            <div className="wrap">
                <div className="portfolioSection__headline">
                    <p>UX/UI Portfolio</p>
                    <h3>Build an interview-ready portfolio</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In malesuada facilisis orci nunc. Pellentesque semper ut
                        lobortis elementum morbi. Neque ultrices dui egestas sit
                        et a. Nec, eget mi purus nec sollicitudin pellentesque
                        euismod.
                    </p>
                </div>
                <div className="portfolioSection__arccordion">
                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                    >
                        <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <Typography className="headline">
                                Collapsible Group Item #1
                            </Typography>
                            <Typography className="time">
                                Pre-Bootcamp
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                    >
                        <AccordionSummary
                            aria-controls="panel2d-content"
                            id="panel2d-header"
                        >
                            <Typography className="headline">
                                Collapsible Group Item #1
                            </Typography>
                            <Typography className="time">
                                Pre-Bootcamp
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
