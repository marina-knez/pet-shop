import { DotsContainer, Dot } from "./slider-dots.styles";
import { HeroSliderData } from "../hero-section/hero-section.component";

type SliderDotsProps = {
    data: HeroSliderData[];
    activeIndex: number;
    onDotClick: (index: number) => void;
  };

const SliderDots = ({ data, activeIndex, onDotClick }: SliderDotsProps) => {
    return (
        <DotsContainer>
            {
                data.map((item, index) => (
                    <Dot key={item.id} active={index === activeIndex} onClick={() => onDotClick(index)} />
                ))
            }
        </DotsContainer>
    )
}

export default SliderDots;