import styled from 'styled-components';

export const SliderContainer = styled.div`
    width: 100%;
    height: 95vh;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
`

/*.section-center {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 80vw;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
}*/

export const SliderItem = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;

    &.--active-slide {
        width: 100%;
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

export const SliderItemLeft = styled.section`
    position: absolute;
    top: 25%;
    padding-left: 3rem;
    width: 30%;
`

export const SliderItemTextTitle = styled.h1`
    padding-bottom: 3rem;
`

export const SliderItemTextSubtitle = styled.h2`
    padding-bottom: 3rem;
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