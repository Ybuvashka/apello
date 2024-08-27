import styled from "styled-components";

export const Wrapper = styled.div`
height: 100vh;
  /* position: relative;
  max-width: 100vw;
  height: 100vh; */
  padding-top: 55px;
  .hero {
    /* max-width: 1190px;
    margin: 0 auto; */
    .hero__content {
      max-width: 430px;
      overflow-wrap: break-word;
      z-index: 1;
      
      .hero__content-title {
        margin-bottom: 35px;
      }

      .hero__content-subtitle {
        line-height: 2.5;
        margin-bottom: 35px;
      }
    }
  }

  .hero__image-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
