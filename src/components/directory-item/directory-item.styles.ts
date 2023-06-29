import styled from 'styled-components';

export type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};

  @media screen and (max-width: 768px) {
      height: 35vh;
  }
`

export const DirectoryItemBody = styled.section`
  height: 100vh;
  width: 20%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.5;
  position: absolute;

  @media screen and (max-width: 768px) {
      width: 100%;
      height: 35vh;
  }

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    text-transform: uppercase;
    font-size: 2rem;
    color: #4a4a4a;
  }
  
  p {
    font-weight: lighter;
    font-size: 1.2rem;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    background-color: #f2ea00;
    color: black;
    font-weight: bolder;
    border: none;
    border-radius: .5rem;
  }
`

export const DirectoryItemContainer = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  overflow: hidden;

  @media screen and (max-width: 768px) {
      width: 100%;
      height: 35vh;
  }
  
  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    
    & ${DirectoryItemBody} {
      opacity: 0.7;
    }
  }
`