import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 180px;
  background-color: var(--bg-dark-blue);
  height: calc(100vh - 50px);
  z-index: -1;
  margin-bottom: 50px;
  
  .our-work__data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .our-work_header {
      margin-bottom: 80px;
      text-align: center;
    }
    .our-work__statistics {
      display: grid;
      grid-template-columns: auto auto auto auto;
      gap: 20px 140px;
      
      .counter {
        display: block;
        text-align: left;
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 150px;
    .our-work__statistics{
      grid-template-columns: auto auto !important;
      
    }
  }
`;
