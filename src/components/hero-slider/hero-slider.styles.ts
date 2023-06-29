import styled from "styled-components";
import { SliderItem } from "../slider/slider.styles";

export const HeroSliderItem = styled(SliderItem)`
    width: 100%;
    left: 0;

    &.--active-slide {
        width: 100%;
    }
`

export const SliderItemLeft = styled.section`
    position: absolute;
    top: 25%;
    padding-left: 5rem;
    width: 40%;

    @media screen and (max-width: 768px) {
        top: 5%;
        padding-left: 3rem;
        width: 60%;
    }
`

export const SliderItemTextTitle = styled.h1`
    padding-bottom: 3rem;
    font-size: 1.7rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const SliderItemTextSubtitle = styled.h2`
    padding-bottom: 3rem;
    font-size: 1.7rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const SliderItemRight = styled.section`
    height: 100%;
`

export const SliderItemImage = styled.img`
    margin-bottom: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
`