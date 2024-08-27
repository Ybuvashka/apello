import styled from "styled-components";
import CallbackBg from "../images/callback-bg.jpg";
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${CallbackBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  

  .callback__form {
    width: 600px;
    background-color: var(--white);
    color: #000;
    padding: 30px 60px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    & > * {
      display: block;
    }
    .callback__header {
      margin-bottom: 125px;
    }
    .callback__button {
      color: #fff;
      margin: 0 auto 40px;
    }
  }
`;
