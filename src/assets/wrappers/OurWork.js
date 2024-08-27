import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 180px;
    background-color: var(--bg-dark-blue);
    height: calc(100vh - 50px);
    z-index: -1;
    .our-work__data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .our-work_header{
        margin-bottom: 80px;
      }
      .our-work__statistics {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 140px;
        .counter {
          display: block;
          text-align: left;
        }
      }
      
    }
`;
