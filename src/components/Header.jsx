import { Wrapper } from "../assets/wrappers/Header";
import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import styled from "styled-components";

const NavMenu = styled.ul`
  @media screen and (max-width: 768px) {
    display: ${( props ) => (props.isToggleOpen === "true" ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(true);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <Wrapper>
      <header className="header">
        <img src={logo} alt="logo" className="logo" />

        <NavMenu
          className="header__nav"
          isToggleOpen={isToggleOpen}
        >
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
          <li className="header__nav-item header__btn">
            <a>Get project quote</a>
          </li>
        </NavMenu>

        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </header>
    </Wrapper>
  );
};
export default Header;
