import { Wrapper } from "../assets/wrappers/Header";
import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";


const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <Wrapper>
      <header className="header">
        <div className="header__mobile">
          <img src={logo} alt="logo" className="logo" />
          <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
        </div>
        <ul className="header__nav" style={{ display: isToggleOpen?'flex':'none'}}>
          <li className="header__nav-item">
            <a href="#">Home</a>
          </li>
          <li className="header__nav-item">
            <a href="#">Portfolio</a>
          </li>
          <li className="header__nav-item">
            <a href="#">Process</a>
          </li>
          <li className="header__nav-item">
            <a href="#">Team</a>
          </li>
          <li className="header__nav-item">
            <a href="#">Resources</a>
          </li>
          <li className="header__nav-item header__btn">
            <a href="#">Get project quote</a>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
};

export default Header;
