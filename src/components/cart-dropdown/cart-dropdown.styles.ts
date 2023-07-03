import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  @media screen and (max-width: 1024px) {
    width: 350px;
    height: 500px;
    top: 100px;
    right: 0;
  }

    & .button {
      margin-top: auto;
    }
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media screen and (max-width: 1024px) {
    height: 440px;
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
