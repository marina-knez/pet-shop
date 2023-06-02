import { Fragment } from "react";

import {  Badge, SliderItemTop, SliderItemBottom, SliderItemTextContainer, SliderItemTextTitle, SliderItemTextSubtitle } from './reviews-slider.styles';

type ReviewsSliderProps = {
    data: {
      name: string;
      title: string;
      quote: string;
    };
  };

const ReviewsSlider = ({ data }: ReviewsSliderProps) => {
    const { name, title, quote } = data;
    return (
        <Fragment>
            <SliderItemTop>
                <Badge src="/assets/pet-badge.jpg" alt="pet-badge" title="pet-badge" />
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