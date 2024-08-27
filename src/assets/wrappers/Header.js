import styled from "styled-components";

export const Wrapper = styled.header`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 145px;

    .header__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      .header__nav-item{
        
      }
      .header__nav-item:not(:last-child) {
        margin-right: 52px;
      }
      .header__btn {
        border: 1px solid var(--br-white);
        border-radius: 7px;
        padding: 12px 15px;
      }
    }

    .menuToggleBtn {
      display: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      position: absolute;
      right: 5px;
    }
    @media screen and (max-width: 768px) {
      .header__nav {
        
        
      }
      .menuToggleBtn {
        display: block;
      }
    }
  }
`;
