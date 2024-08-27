import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 150px;
  padding-bottom: 150px;
  color: #000;
  background-color: var(--background-gray);
  .faq__content {
    text-align: center;
    margin: 0 auto;
    .faq__title {
      margin-bottom: 35px;
    }
    .faq__subtitle {
      margin-bottom: 75px;
      font-size: 13px;
      color: var(--gray);
    }
    .faq__list {
      text-align: left;
    }
  }
`;
