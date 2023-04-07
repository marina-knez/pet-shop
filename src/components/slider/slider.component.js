import { useState, useEffect, Fragment } from 'react';

import SliderDots from '../slider-dots/slider-dots.component';
import SliderArrows from '../slider-arrows/slider-arrows.component';

import HeroSlider from '../hero-slider/hero-slider.component';
import ReviewsSlider from '../reviews-slider/reviews-slider.component';

import { HeroSliderItem } from '../hero-slider/hero-slider.styles';
import { ReviewsSliderItem } from '../reviews-slider/reviews-slider.styles';

const Slider = ({ data, hero, showDots, showArrows }) => {

    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        const lastIndex = data.length - 1;
        if(index < 0) {
            setIndex(lastIndex);
        }
        if(index > lastIndex) {
            setIndex(0);
        }
    }, [index, data]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 8000);
        return () => {
            clearInterval(slider)
        }
    }, [index]);

    const onArrowClickLeft = () => {
        setIndex(index - 1);
    };

    const onArrowClickRight = () => {
        setIndex(index + 1);
    };

    
    const SliderItem = hero ? HeroSliderItem : ReviewsSliderItem;

    return (
        <Fragment>
            {showArrows && <SliderArrows onArrowClickLeft={onArrowClickLeft} onArrowClickRight={onArrowClickRight} hero={hero} />}

            {data.map((item, indexItem) => {
                let position = "--next-slide";

                if(indexItem === index) {
                    position = "--active-slide";
                }

                if(indexItem === index - 1 || (index === 0 && indexItem === data.length - 1)) {
                    position = "--last-slide";
                }

                return (
                    <SliderItem className={position} key={item.id} index={item.index} data={item}>
                        {
                            hero ?  <HeroSlider data={item} /> : <ReviewsSlider data={item} />
                        }
                    </SliderItem>
                    )
            })}

            {showDots && <SliderDots data={data} activeIndex={index} onDotClick={setIndex} />}
        </Fragment>
    )
}

export default Slider;