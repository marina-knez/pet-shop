import styled from 'styled-components';

export const ProductItemContainer = styled.div`
    width: 100%;
`

export const ProductItemBasicsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 50px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(2, 1fr);
        justify-items: center;
        margin: 20px;

        & div {
            & img {
                height: 80%;
                object-fit: cover;
            }
        }
    }
`

export const ProductItemDetailsContainer = styled.div`
    margin: 50px;
    font-size: 1.1rem;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
    }
`

export const ProductItemBasics = styled.div`
    margin: 0 50px;

    @media screen and (max-width: 1024px) {
        margin: 0 20px;
    }
`

export const ProductItemTitle = styled.h2`
    font-size: 3rem;
    color: #333f48;
`

export const ProductItemInfo = styled.p`
    font-size: 1.1rem;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
    }
`

export const ProductItemCartHandle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
    margin-top: 0;

    @media screen and (max-width: 1024px) {
        margin-top: 50px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`

export const ProductItemQuantity = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: lightgrey;
    padding: 5px 10px;
    border-radius: .5rem;

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`

export const ProductItemQuantityKeys = styled.span`
    font-size: 2.2rem;
    text-align: center;
    display: inline-block;
    width: 50px;
    height: 60px;
    cursor: pointer;

    &:nth-child(1) {
        border-right: 1px solid darkgrey;
    }

    &:nth-child(3) {
        border-left: 1px solid darkgrey;
    }
`   