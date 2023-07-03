import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 1.5rem;
    background-color: #f2ea00;
    color: black;
    text-transform: uppercase;
    font-family: 'Kalam';
    font-weight: bolder;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all .3s linear;

    &:hover {
        background-color: grey;
        color: #f2ea00;
        border: 1px solid grey;
    }
`

export const InvertedButton = styled(BaseButton)`
    background-color: grey;
    color: #f2ea00;

    &:hover {
        background-color: #f2ea00;
        color: grey;
        border: 1px solid #f2ea00;
    }
`

export const BaseButtonLarge = styled(BaseButton)`
    height: 70px;
    padding: 10px 90px;
    font-size: 1.7rem;
`

export const BaseButtonScroll = styled.button`
    position: fixed;
    right: 35px;
    bottom: 35px;
    margin-top: -5rem;
    padding: 1rem;
    border: none;
    border-radius: 100%;
    background-color: rgb(242, 234, 0);
    cursor: pointer;
`