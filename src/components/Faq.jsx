import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useState } from "react";
import { Wrapper } from "../assets/wrappers/Faq";

const faqs = [
  {
    question: "1. What is your privacy and security policy?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aut voluptate sapiente labore ab, perferendis inventore. Excepturi quae, culpa blanditiis odio explicabo omnis aut accusantium ea et officiis sint sed.",
  },
  {
    question: "2. How long is the development timeline?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aut voluptate sapiente labore ab, perferendis inventore. Excepturi quae, culpa blanditiis odio explicabo omnis aut accusantium ea et officiis sint sed.",
  },
  {
    question: "3. What type of companies do you work with?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aut voluptate sapiente labore ab, perferendis inventore. Excepturi quae, culpa blanditiis odio explicabo omnis aut accusantium ea et officiis sint sed.",
  },
  {
    question: "4. How many team members for a project?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aut voluptate sapiente labore ab, perferendis inventore. Excepturi quae, culpa blanditiis odio explicabo omnis aut accusantium ea et officiis sint sed.",
  },
  {
    question: "5. What warranties are to ensure deliverables are met?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aut voluptate sapiente labore ab, perferendis inventore. Excepturi quae, culpa blanditiis odio explicabo omnis aut accusantium ea et officiis sint sed.",
  },
  {
    question: "6. Do you outsource work?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aut voluptate sapiente labore ab, perferendis inventore. Excepturi quae, culpa blanditiis odio explicabo omnis aut accusantium ea et officiis sint sed.",
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Wrapper className="full-width">
      <div className="faq__content fixed-width">
        <h2 className="faq__title">FAQ</h2>
        <p className="faq__subtitle">
          Below is a list of frequently asked questions. If you can't find what
          you’re looking for then feel free to ask us directly via email
        </p>
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                padding: "38px 0",
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === index ? <CiCircleMinus /> : <CiCirclePlus />
                }
              >
                <Typography variant="h5">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default Faq;
