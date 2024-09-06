import styled from "styled-components";

export const Wrapper = styled.div`
  color: #000;
  background-color: var(--background-gray);
  padding: 150px 0 185px;
  margin-top: 200px;
  .assesstments__content {
    margin-left: 230px;

    .assesstments__header {
      margin-bottom: 35px;
    }
    .assestments__text {
      margin-bottom: 45px;
      font-size: 16px;
      line-height: 30px;
      color: var(--gray);
    }
    .assesstments__list {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1024px){
    .assesstments__content {
      margin: 0;
      text-align: center;
      .assesstments__list{
        justify-content: center;
      }
    }
  }
`;
