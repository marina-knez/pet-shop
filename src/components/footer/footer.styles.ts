import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const FooterSection = styled.section`
    height: 100%;

    & a {
        color: grey;
        font-size: 2rem;
        cursor: pointer;

        &:hover {
            color: #f2ea00;
        }
    }
`

export const SocialMediaFooterSection = styled(FooterSection)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 250px;
`

export const FooterLogoContainer = styled(Link)`
    display: block;
    height: 100%;
    width: 250px;

    & svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`