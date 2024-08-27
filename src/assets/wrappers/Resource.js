import styled from "styled-components";

export const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 340px;
  margin-bottom: 160px;
  .resource__image{
    margin-bottom: 50px;
    height: 250px;
  }
  .resource__content{
    text-align: left;
    margin-left: 30px;
    
    .resource__title{
      margin-bottom: 20px;
      margin-right:32px;
    }
    .resource__description{
      margin-right:56px;
      font-size: 16px;
      color: var(--gray);
    }
  }
`