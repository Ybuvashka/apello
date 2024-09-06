import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bg-dark-blue);
  padding: 100px 0 30px;
  .footer__content {
    font-size: 15px;
    .footer__trusted-by {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 60px;
      border-bottom: 1px solid var(--white);
    }

    .footer__data {
      margin: 150px 0;
      display: flex;
      gap: 50px;
      justify-content: space-between;
      flex-wrap: wrap;

      .footer__list {
        width: 300px;
        .footer__item-h {
          margin-bottom: 20px;
        }

        .footer__item-p {
          color: var(--white);
          padding: 11px 0;
          border-bottom: 1px solid var(--white);
        }
      }
    }
    .footer__down {
      padding-top: 20px;
      border-top: 1px solid var(--white);
      display: flex;
      justify-content: space-between;
      .footer__links {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      }
    }
  }
  @media screen and (max-width: 1024px){
    .footer__data {
      justify-content: center !important;
    }
  }
  @media screen and (max-width: 768px){
    .footer__down{
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
  }
`;
