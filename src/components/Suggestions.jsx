import { Wrapper } from "../assets/wrappers/Suggestions";

const Suggestions = () => {
  return (
    <Wrapper className="fixed-width">
      <div className="suggestions__text">
        <h4 className="suggestions__title" style={{ color: "#000" }}>
          Your reliable web and app development partner
        </h4>

        <p className="suggestions__subtitle">
          We make successful products that turn great ideas into user-friendly
          solutions for consumers and businesses.
        </p>
      </div>

      <ul className="suggestions__list">
        <li className="suggestions__item">Completely tailored software.</li>
        <li className="suggestions__item">
          Daily support with project manager.
        </li>
        <li className="suggestions__item">
          Projects delivered on time, always.
        </li>
        <li className="suggestions__item">Testing and quality assurance.</li>
        <li className="suggestions__item">Professional marketing expertise.</li>
        <li className="suggestions__item">Transparent costs and support.</li>
      </ul>
    </Wrapper>
  );
};
export default Suggestions;
