import { Wrapper } from "../assets/wrappers/Header";
import logo from "../assets/images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import {useState, useEffect} from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Wrapper $click={click}>
      <header className="header">
        <div className="header__mobile">
          <img src={logo} alt="logo" className="logo" />
          <div className="menuToggleBtn" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul className="header__nav" >
          <li className="header__nav-item">
            <a>Home</a>
          </li>
          <li className="header__nav-item">
            <a>Portfolio</a>
          </li>
          <li className="header__nav-item">
            <a>Process</a>
          </li>
          <li className="header__nav-item">
            <a>Team</a>
          </li>
          <li className="header__nav-item">
            <a>Resources</a>
          </li>
          <li className="header__nav-item ">
            <a className="header__btn">Get project quote</a>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
};

export default Header;
