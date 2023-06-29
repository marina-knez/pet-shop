import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PuppyGuideSectionContainer = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    margin: 0 auto 5rem;
    background-color: grey;
`

export const PuppyGuideSectionLeft = styled.section`
    position: absolute;
    top: 10%;
    margin-left: 5rem;
    padding-left: 5rem;
    padding-top: 5rem;
    background-color: #f2f0a1;
    opacity: .8;
    width: 50%;
    height: 80%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        top: 0;
        padding-left: 2rem;
    }

    & p {
        text-transform: uppercase;

        @media screen and (max-width: 768px) {
            font-size: 1.4rem;
        }
    }
`

export const PuppyGuideTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem 0;

    @media screen and (max-width: 768px) {
            font-size: 3.5rem;
        }
`

export const PuppyGuideSubtitle = styled.h3`
    font-size: 1.2rem;
    padding-bottom: 4rem;

    @media screen and (max-width: 768px) {
            font-size: 1.6rem;
        }
`

export const PuppyGuideSectionRight = styled.section`
    position: absolute;
    right: 10rem;
    bottom: 0;

    @media screen and (max-width: 768px) {
        right: 0;
        width: 50%;
        bottom: 70px;

        & img {
            width: 100%;
        }
    }
`

export const NavLink = styled(Link)`
    color: #f2ea00;

    &:hover {
        color: grey;
    }
`