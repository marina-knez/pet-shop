import styled from 'styled-components';

export const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
`

export const SliderItem = styled.div`
    position: absolute;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;

    &.--active-slide {
        opacity: 1;
        transform: translateX(0);
    }

    &.--last-slide {
        transform: translateX(-100%);
    }

    &.--next-slide {
        transform: translateX(100%);
    }
`