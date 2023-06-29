import styled from "styled-components";

export const ArrowContainer = styled.div`
    position: absolute;
    z-index: 1;
    height: 3rem;
`

export const HeroArrowContainer = styled(ArrowContainer) `
    width: 100%;
    top: 50%;
`

export const ReviewsArrowContainer = styled(ArrowContainer)`
    width: 10%;
    bottom: 5%;
    padding-left: 4.5rem;
`

export const Arrow = styled.button`
    position: absolute;
    border: none;
    background-color: transparent;
    height: 3rem;
    width: 3rem;
    cursor: pointer;

    & svg {
        font-size: 2rem;
        color: #f2ea00;
    }
`

export const ArrowRight = styled(Arrow)`
    right: 0;
`