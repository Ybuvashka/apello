import { Wrapper } from "../assets/wrappers/Resource.js";

const Resouce = ({ image, title, description }) => {
  return (
    <Wrapper>
      <img className="resource__image" src={image} alt="resource image" />
      <div className="resource__content">
        <h4 className="resource__title">{title}</h4>
        <p className="resource__description">{description}</p>
      </div>
    </Wrapper>
  );
};
export default Resouce;
