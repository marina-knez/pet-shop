import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { HeroArrowContainer, ReviewsArrowContainer, Arrow, ArrowRight } from './slider-arrows.styles';

const SliderArrows = ({ onArrowClickLeft, onArrowClickRight, hero }) => {
    const Arrows = hero ? HeroArrowContainer : ReviewsArrowContainer;

    return (
        <Arrows>
            <Arrow onClick={onArrowClickLeft}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Arrow>
            <ArrowRight onClick={onArrowClickRight}>
                <FontAwesomeIcon icon={faArrowRight} />
            </ArrowRight>
        </Arrows>
    )
}

export default SliderArrows;