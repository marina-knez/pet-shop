import styled from "styled-components";
import { SliderContainer } from "../slider/slider.styles";

export const ReviewsSliderContainer = styled(SliderContainer)`
    height: 55vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 6rem 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 100vh;
    }
`

export const ReviewsSliderBody = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const ReviewsSliderBodyLeft = styled(ReviewsSliderBody)`
    background-color: #f2f0a1;
    padding-left: 6rem;
    z-index: 1;

    @media screen and (max-width: 768px) {
        padding-left: 2rem;
    }
`

export const ReviewsSliderBodyRight = styled(ReviewsSliderBody)`

    @media screen and (max-width: 768px) {
        margin-top: 6rem;
        margin-bottom: 2rem;
    }
`

export const SliderBodyTextName = styled.p`
    text-transform: uppercase;
`

export const SliderBodyTextTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    padding-right: 3rem;
`

export const SliderBodyTextSubtitle = styled.p`
    font-size: 1.2rem;
`