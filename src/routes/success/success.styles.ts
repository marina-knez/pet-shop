import styled from "styled-components";

export const SuccessPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin: 20px;
  }
`

export const MessageContainer = styled.div`
    width: 60%;
    text-align: center;
    background-color: rgb(242, 240, 161);
    border-radius: 1rem;
    padding: 25px 0;
    margin-top: -5rem;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const MessageTitle = styled.h2`
    font-size: 1.7rem;
`

export const Message = styled.p`
    font-size: 1.4rem;
`

export const SuccessImage = styled.img`
    position: absolute;
    clip-path: circle(50% at 50% 50%);
    width: 350px;
    height: 350px;
    right: 10rem;
    top: 5rem;

    @media screen and (max-width: 1024px) {
        width: 200px;
        height: 200px;
        right: 0;
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
  }
`