import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 150px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;

  .customer-area__title {
    margin-bottom: 35px;
    text-align: center;
  }
  .customer-area__subtitle {
    margin-bottom: 85px;
    text-align: center;
  }
  .customer-area__menu {
    display: flex;
    gap: 100px;
    margin-bottom: 50px;

    > button {
      color: inherit;
      background-color: var(--white);
      cursor: pointer;
      transition: 0.4s linear;
      font-size: 23px !important;
    }
    > button:hover,
    > button.active {
      color: var(--blue);
    }
  }
  .customer-area__list {
    display: grid;
    grid-template-columns: auto auto;
    gap: 40px;
    margin-bottom: 50px;
  }

  .customer-area__button {
    color: var(--white);
  }

  @media screen and (max-width: 768px){
    .customer-area__menu {
      gap: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      & button{
        padding: 15px 10px;
      }
    }
    .customer-area__list {
    grid-template-columns: auto;
    gap: 50px;
  }
  }
`;
