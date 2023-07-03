import styled from 'styled-components';

export const AboutPageContainer = styled.div`
    margin: 50px;

    @media screen and (max-width: 1024px) {
        margin: 20px;
    }
`

export const AboutPageTitle = styled.h2`
    font-size: 3rem;
`

export const AboutPageContent = styled.p`
    font-size: 1.2rem;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
    }
`