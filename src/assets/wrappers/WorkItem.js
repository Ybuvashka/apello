import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 565px;
  height: auto;
  margin: 0 auto;
  transition: width 0.3s ease;
  .work-image {
    object-fit: cover;
    margin-bottom: 45px;
    width: 100%;
    height: 402px;
    transition: height 0.3s ease;
  }
  .work-title {
    margin-bottom: 25px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%; 
    .work-image {
      height: 250px; 
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    .work-image {
      height: 450px; 
    }
  }

  @media screen and (max-width: 480px) {
    .work-image {
      height: 250px; 
    }
  }
`;
