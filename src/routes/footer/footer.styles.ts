import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 3rem;

    @media screen and (max-width: 1024px) {
        gap: 2rem;
    }
`
export const FooterSectionTop = styled(FooterContainer)`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightgrey;
    padding: 3rem 0;
    position: relative;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`

export const FooterSectionBottom = styled(FooterContainer)`
    flex-direction: row;
    align-items: center;
    padding: 0 60px;
    margin: 3rem 0;

    @media screen and (max-width: 1024px) {
        justify-content: center;
    }
`

export const FooterLinkSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;

    & p {
        font-size: 1.3rem;
        
        @media screen and (max-width: 1024px) {
            font-size: 1.5rem;
        }
    }

    &:nth-child(2) {
        @media screen and (max-width: 1024px) {
            display: none;
        }
    }

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

export const FooterLink = styled(Link)`
    color: black;
    font-size: 1.3rem;
    cursor: pointer;

    &:hover {
        color: #f2ea00;
    }

    @media screen and (max-width: 1024px) {
        font-size: 1.5rem
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

export const Copyright = styled.span`
    font-size: 1.4rem;
`