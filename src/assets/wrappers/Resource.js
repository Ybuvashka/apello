import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;

  padding: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  .resource__image {
    margin-bottom: 50px;
    height: 250px;
  }
  .resource__content {
    text-align: left;
    margin-left: 30px;

    .resource__title {
      margin-bottom: 20px;
      margin-right: 32px;
    }
    .resource__description {
      margin-right: 56px;
      font-size: 16px;
      color: var(--gray);
    }
  }
  @media screen and (max-width: 740px) {
    width: 100%;
    .resource__image {
      width: 50%;
      height: auto;
      margin-left: 30px;
      
    }
    
  }
  @media screen and (max-width: 414px){
    width: 100%;
    .resource__image {
      width: 100%;
      margin-left: 0px;
    }
  }
`;
