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
      transition: width 0.3s ease;
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
  @media screen and (max-width: 1280px) {
    .relationships__list {
      gap: 120px 90px !important;
    }
  }
  @media screen and (max-width: 1024px) {
    .relationships__list {
      grid-template-columns: auto auto auto !important;
      gap: 120px 80px !important;

      /* .relationships__list :nth-last-child(1) {
        grid-column: 2 / span 2;
      }
      .relationships__list :nth-last-child(1) {
        grid-column: 2 / span 2;
      } */
    }
  }
  @media screen and (max-width: 768px) {
    .relationships__list {
      padding: 100px 0 !important;
      grid-template-columns: auto auto !important;
      gap: 120px 50px !important;
      
    }

    .partnerships__list{
      grid-template-columns: auto auto !important;
    }
  }

  @media screen and (max-width: 480px){
    .relationships__list {
      grid-template-columns: auto !important;
    }
    .partnerships__list{
      grid-template-columns: auto !important;
    }
  }
`;
