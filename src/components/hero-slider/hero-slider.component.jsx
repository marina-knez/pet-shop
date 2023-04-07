import { Fragment } from "react";

import { useNavigate } from 'react-router-dom';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {  SliderItemLeft, SliderItemRight, SliderItemTextTitle, SliderItemTextSubtitle, SliderItemImage } from './hero-slider.styles';

const HeroSlider = ({ data }) => {

    const { title, subtitle, imageUrl, imageTitle, route } = data;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <Fragment>
            <SliderItemLeft>
                <SliderItemTextTitle>{title}</SliderItemTextTitle>
                <SliderItemTextSubtitle>{subtitle}</SliderItemTextSubtitle>
                <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={onNavigateHandler} className="button">SHOP NOW</Button>
            </SliderItemLeft>
            <SliderItemRight>
                <SliderItemImage src={imageUrl} alt={imageTitle} title={imageTitle}
                />
            </SliderItemRight>
        </Fragment>
    )
}

export default HeroSlider;