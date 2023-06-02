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

    & p {
        text-transform: uppercase;
    }
`

export const PuppyGuideTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem 0;
`

export const PuppyGuideSubtitle = styled.h3`
    font-size: 1.2rem;
    padding-bottom: 4rem;
`

export const PuppyGuideSectionRight = styled.section`
    position: absolute;
    right: 10rem;
    bottom: 0;
`

export const NavLink = styled(Link)`
    color: #f2ea00;

    &:hover {
        color: grey;
    }
`