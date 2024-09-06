import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -400px;
  z-index: 3;
  width: 100%;
  background-color: var(--white);
  .our-work__list {
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px ;
    color: #000;
    margin-bottom: 85px;
  }
  .our-work__button {
    margin-bottom: 150px;
  }
  @media screen and (max-width: 768px){
    .our-work__list{
      grid-template-columns: auto;
    }
  }
`;
