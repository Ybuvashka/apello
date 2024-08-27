import { Wrapper } from "../assets/wrappers/AssistanseIn";

const AssistanceIn = ({title, description}) => {
  return (
    <Wrapper>
      <h5>{title}</h5>
      <p>{description}</p>
    </Wrapper>
  );
};
export default AssistanceIn;
