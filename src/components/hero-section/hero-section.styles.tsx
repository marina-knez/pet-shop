import styled from "styled-components";
import { SliderContainer } from "../slider/slider.styles";

export const HeroSliderContainer = styled(SliderContainer)`
    height: 95vh;

    @media screen and (max-width: 768px) {
        height: 85vh;
    }
`