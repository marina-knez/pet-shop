import styled from 'styled-components';

export const GuidePageContainer = styled.div`
    margin: 50px;

    @media screen and (max-width: 768px) {
        margin: 20px;
    }
`

export const GuidePageIntro = styled.div`
    padding-bottom: 50px;
`

export const GuidePageTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
`

export const GuidePageDescription = styled.p`
    font-size: 1.8rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
    }
`

export const MainContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-top: 50px;
`

export const MainContentSection = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    grid-gap: 3rem;
    flex-basis: 100%;
    border-bottom: none;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        border-bottom: 1px solid lightgrey;

        &:nth-child(odd) {
            flex-direction: column-reverse;
            border-bottom: 1px solid lightgrey;
        }
    }
`

export const MainContentSectionTitle = styled.h3`
    font-size: 1.8rem;
`

export const MainContentSectionImage = styled.img`
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const MainContentSectionDescription = styled.div`
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
        padding-bottom: 20px;
    }
`