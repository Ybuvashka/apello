import { Wrapper } from "../assets/wrappers/Assesstments";

import Assessment1 from "../assets/images/assesstment-1.png";
import Assessment2 from "../assets/images/assesstment-2.png";
import Assessment3 from "../assets/images/assesstment-3.png";
import Assessment4 from "../assets/images/assesstment-4.png";

const Assesstments = () => {
  return (
    <Wrapper className="full-width">
      <div className="assesstments__content">
        <h2 className="assesstments__header">We're industry approved</h2>
        <p className="assestments__text">
          Appello is one of Australia’s most highly rated software <br />
          companies by recognisable directories like Clutch, GoodFirms,
          <br /> AppFutura and many more.
        </p>
        <div className="assesstments__list">
          <img src={Assessment1} alt="assesstment image" />
          <img src={Assessment2} alt="assesstment image" />
          <img src={Assessment3} alt="assesstment image" />
          <img src={Assessment4} alt="assesstment image" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Assesstments;
