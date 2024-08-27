import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;
  margin-top: -70px;
  background-color: var(--white);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);

  .suggestions__text {
    max-width: 400px;
    padding: 46px 53px 37px 15px;
    display: block;
    border-right: 1px solid var(--br-gray);
    margin-right: 80px;

    .suggestions__title {
      color: var(--black);
    }
    .suggestions__subtitle {
      color: var(--gray);
      font-size: 16px;
      line-height: 1.8;
    }
  }
  .suggestions__list {
    display: grid;
    gap: 50px 100px;
    grid-template-columns: auto auto auto;
    justify-items: center;
    .suggestions__item {
      color: var(--gray);
    }
  }
`;
