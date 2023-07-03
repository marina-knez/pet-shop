import styled from "styled-components";

export const WidgetContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-gap: .5rem;
    justify-items: center;
    align-content: center;
    padding: 100px 25px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(2, 50%);
        grid-gap: 1.5rem;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(4, 25%);
        grid-gap: 1.5rem;
    }
`;

export const WidgetItem = styled.section`
    text-align: center;
    border-right: 1px solid lightgrey;
    width: 100%;

    @media screen and (max-width: 1024px) {
        &:nth-child(even) {
            border-right: none;
        }
    }

    @media screen and (max-width: 768px) {
        border-right: none;
        border-bottom: 1px solid lightgrey;
    }

    &:last-child {
        border-right: none;

        @media screen and (max-width: 768px) {
        border-bottom: none;
    }
    }

    & span > svg {
        color: #fff600;
        font-size: 25px;
    }
`;