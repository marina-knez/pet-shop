import styled from "styled-components"

export const CartIconContainer = styled.div`
    padding: 0 50px;
    cursor: pointer;
    position: relative;
    left: 0;

    @media screen and (max-width: 768px) {
        display: block;
        font-size: 1.5rem;
        left: 50px;
        padding: 30px 15px 10px;
    }
`

export const ItemCount = styled.span`
    position: absolute;
    top: -15px;
    text-align: center;
    background-color: #f2ea00;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: .7rem;

    @media screen and (max-width: 768px) {
        top: 15px;
    }
`