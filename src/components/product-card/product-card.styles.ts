import styled from "styled-components";

export const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 450px;
    align-items: center;
    position: relative;

    img {
      width: 100%;
      height: 80%;
      object-fit: cover;
      margin-bottom: 5px;
    }
  
    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 255px;
      display: none;
    }
  
    &:hover {
      img {
        opacity: 0.8;
      }
  
      button {
        opacity: 0.85;
        display: flex;
      }
    }
`

export const ProductCardInfo = styled.div`
    width: 100%;
    padding-left: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 18px;
`

export const ProductCardTitle = styled.span`
    width: 90%;
    margin-bottom: 15px;
`