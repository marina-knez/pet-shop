import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { HeroArrowContainer, ReviewsArrowContainer, Arrow, ArrowRight } from './slider-arrows.styles';

type SliderArrowsProps = {
    onArrowClickLeft: () => void;
    onArrowClickRight: () => void;
    hero: boolean;
  };

const SliderArrows = ({ onArrowClickLeft, onArrowClickRight, hero }: SliderArrowsProps) => {
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