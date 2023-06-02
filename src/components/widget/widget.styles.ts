import styled from "styled-components";

export const WidgetContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-gap: .5rem;
    justify-items: center;
    align-content: center;
    padding: 100px 25px;
`;

export const WidgetItem = styled.section`
    text-align: center;
    border-right: 1px solid lightgrey;
    width: 100%;

    &:last-child {
        border-right: none;
    }

    & span > svg {
        color: #fff600;
        font-size: 25px;
    }
`;