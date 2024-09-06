import styled from "styled-components";

export const Wrapper = styled.header`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 145px;
    position: relative;
    .header__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      .header__nav-item{
        cursor: pointer;
      }
      .header__nav-item:not(:last-child) {
        margin-right: 52px;
      }
      .header__btn {
        padding: 12px 15px;
        border: 1px solid var(--br-white);
        border-radius: 7px;
      }
    }

    .menuToggleBtn {
      display: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      user-select: none;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;

      .header__mobile {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .menuToggleBtn {
          display: block;
        }
      }
      .header__nav {
        max-height: ${({ $click }) => ($click ? "700px" : "0")};
        opacity: ${({ $click }) => ($click ? "1" : "0")};
        transition: max-height 0.8s ease, opacity 0.5s ease;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 5px;
        gap: 20px;

        .header__nav-item {
          display: block;
          text-align: center;
          margin-right: 0px !important;
        }
      }
    }
  }
`;
