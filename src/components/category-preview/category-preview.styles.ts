import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 50px;
`

export const CategoryPreviewTitle = styled(Link)`
    font-size: 2.5rem;
    margin-left: 50px;
    cursor: pointer;
`

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
    margin: 50px 50px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(4, 1fr);
    }
`