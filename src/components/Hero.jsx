import Header from "./Header";
import { Wrapper } from "../assets/wrappers/Hero";
import headerBg from "../assets/images/header_bg.jpg";

const Hero = () => {
  return (
    <Wrapper className="full-width">
      <div className="hero fixed-width">
        <Header />
        <div className="hero__content">
          <h2 className="hero__content-title">
            Leaders in Software Design & Development
          </h2>
          <p className="hero__content-subtitle">
            Establishing a technology company takes a strong software team to
            deliver on what needs to be done.
          </p>
          <button>View our work</button>
        </div>
      </div>
      <img src={headerBg} alt="" className="hero__image-bg" />
    </Wrapper>
  );
};
export default Hero;
