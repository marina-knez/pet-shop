import styled from "styled-components";
import { SliderItem } from "../slider/slider.styles";

export const ReviewsSliderItem = styled(SliderItem)`
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    &.--active-slide {
        width: 50%;

        @media screen and (max-width: 1024px) {
            width: 100%;
        }
    }
`

export const SliderItemTop = styled.section`
    padding-left: 5rem;
    padding-bottom: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const SliderItemTextContainer = styled.section`
    width: 100%;
`

export const SliderItemTextTitle = styled.h1`
    font-size: 1.7rem;
    margin: 0 0 0 .5rem;
`

export const SliderItemTextSubtitle = styled.h2`
    font-size: 1rem;
    margin: 0 0 0 .5rem;
`

export const SliderItemBottom = styled.section`
    width: 85%;
    padding-left: 1.9rem;
    padding-right: 2rem;

    @media screen and (max-width: 1024px) {
        width: 90%;
        font-size: 1.3rem;
    }
`

export const SliderItemImage = styled.img`
    margin-bottom: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Badge = styled.img`
    width: 80px;
    height: 80px;
`