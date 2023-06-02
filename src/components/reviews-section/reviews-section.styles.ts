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
`

export const ReviewsSliderBody = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
`

export const ReviewsSliderBodyLeft = styled(ReviewsSliderBody)`
    background-color: #f2f0a1;
    padding-left: 6rem;
    z-index: 1;
`

export const SliderBodyTextName = styled.p`
    text-transform: uppercase;
`

export const SliderBodyTextTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin: 0 0;
    padding-right: 3rem;
`

export const SliderBodyTextSubtitle = styled.p`
    font-size: 1.2rem;
`