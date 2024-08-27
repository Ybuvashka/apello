import styled from "styled-components";

export const Wrapper = styled.div`
  .relationships {
    color: #000;
    text-align: center;
    .relationships__title {
      margin-bottom: 36px;
    }
    .relationships__description {
      margin-bottom: 70px;
    }
    .relationships__list {
      background-color: var(--background-gray);
      display: grid;
      grid-template-columns: auto auto auto auto;
      justify-items: center;
      align-items: center;
      gap: 120px 140px;
      margin-bottom: 60px;
      padding: 100px 85px;
    }
  }
  .partnerhips {
    margin-bottom: 10px;
    .partnerhips__title {
      color: #000;
      margin-bottom: 30px;
      text-align: center;
    }
    .partnerships__list {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 30px 25px;
    }
  }
`;
