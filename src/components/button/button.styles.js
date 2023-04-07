import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
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
        background-color: black;
        color: #f2ea00;
        border: 1px solid black;
    }
`

export const InvertedButton = styled(BaseButton)`
    background-color: black;
    color: #f2ea00;
`