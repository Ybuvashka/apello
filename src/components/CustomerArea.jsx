import { Wrapper } from "../assets/wrappers/CustomerArea";
import AssistanceIn from "../components/AssistanceIn";
import { useState } from "react";
const content = [
  [
    {
      title: "1. Research",
      description:
        "We can help you to better understand your target audience, enabling you to create a more powerful value proposition for your business.",
    },
    {
      title: "2. Requirements",
      description:
        "Based on research insights, we can help you to determine how your product and service should function.",
    },
    {
      title: "3. UI Design",
      description:
        "We’re able to create unique and aesthetically pleasing visual design solutions that fulfil both your user needs and business goals.",
    },
    {
      title: "4. Prototyping",
      description:
        "We can provide you with a clickable prototype so you can test and play with your product; allowing you to get a better feel for the user experience.",
    },
  ],
  [
    {
      title: "5. Research",
      description:
        "We can help you to better understand your target audience, enabling you to create a more powerful value proposition for your business.",
    },
    {
      title: "6. Requirements",
      description:
        "Based on research insights, we can help you to determine how your product and service should function.",
    },
    {
      title: "7. UI Design",
      description:
        "We’re able to create unique and aesthetically pleasing visual design solutions that fulfil both your user needs and business goals.",
    },
    {
      title: "8. Prototyping",
      description:
        "We can provide you with a clickable prototype so you can test and play with your product; allowing you to get a better feel for the user experience.",
    },
  ],
  [
    {
      title: "9. Research",
      description:
        "We can help you to better understand your target audience, enabling you to create a more powerful value proposition for your business.",
    },
    {
      title: "10. Requirements",
      description:
        "Based on research insights, we can help you to determine how your product and service should function.",
    },
    {
      title: "11. UI Design",
      description:
        "We’re able to create unique and aesthetically pleasing visual design solutions that fulfil both your user needs and business goals.",
    },
    {
      title: "12. Prototyping",
      description:
        "We can provide you with a clickable prototype so you can test and play with your product; allowing you to get a better feel for the user experience.",
    },
  ],
];

const CustomerArea = () => {
  const [activeContentIndex, setContentIndex] = useState(0);
  return (
    <Wrapper className="fixed-width">
      <h2 className="customer-area__title">Where are you now?</h2>

      <p className="customer-area__subtitle">
        Use the tabs below to identify what stage you’re at so we can help you
        to move on to the next phase of your project.
      </p>
      <div className="customer-area__menu">
        <button
          className={activeContentIndex === 0 ? "active" : ""}
          onClick={() => setContentIndex(0)}
        >
          Design
        </button>
        <button
          className={activeContentIndex === 1 ? "active" : ""}
          onClick={() => setContentIndex(1)}
        >
          Develop
        </button>
        <button
          className={activeContentIndex === 2 ? "active" : ""}
          onClick={() => setContentIndex(2)}
        >
          Launch
        </button>
      </div>
      <div className="customer-area__list">
        {content[activeContentIndex].map((item, index) => (
          <AssistanceIn
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <button className="customer-area__button">Contact us</button>
    </Wrapper>
  );
};
export default CustomerArea;
