import { DotsContainer, Dot } from "./slider-dots.styles";

const SliderDots = ({ data, activeIndex, onDotClick }) => {
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