import { Fragment } from "react";

import {  Badge, SliderItemTop, SliderItemBottom, SliderItemTextContainer, SliderItemTextTitle, SliderItemTextSubtitle } from './reviews-slider.styles';

const ReviewsSlider = ({ data }) => {
    const { name, title, quote } = data;
    return (
        <Fragment>
            <SliderItemTop>
                <Badge src='/assets/pet-badge.jpg' alt='pet-badge' />
                <SliderItemTextContainer>
                    <SliderItemTextTitle>{name}</SliderItemTextTitle>
                    <SliderItemTextSubtitle>{title}</SliderItemTextSubtitle>
                </SliderItemTextContainer>
            </SliderItemTop>
            <SliderItemBottom>
                <p>{quote}</p>
            </SliderItemBottom>
        </Fragment>
    )
}

export default ReviewsSlider;