import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  color: #000;
  text-align: center;
  background-color: var(--white);
  margin-bottom: 160px;
  .resources__header {
    margin-bottom: 35px;
  }
  .resources__subtitle {
    margin-bottom: 75px;
    font-size: 14px;
  }
  .resources__list {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (max-width: 1280px) {
    .resources__list {
      justify-content: center;
    }
  }

  
`;
