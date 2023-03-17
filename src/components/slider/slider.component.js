import { useState, useEffect } from 'react';

import { SliderContainer, SliderItem, SliderItemLeft, SliderItemRight, SliderItemTextTitle, SliderItemTextSubtitle, SliderItemImage } from './slider.styles';

const Slider = ({ data, children }) => {

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
        }, 10000);
        return () => {
            clearInterval(slider)
        }
    }, [index]);

    return (
        <SliderContainer>
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
                        <SliderItemLeft>
                            <SliderItemTextTitle>{item.title}</SliderItemTextTitle>
                            <SliderItemTextSubtitle>{item.subtitle}</SliderItemTextSubtitle>
                            {children}
                        </SliderItemLeft>
                        <SliderItemRight>
                            <SliderItemImage src={item.imageUrl} alt={item.imageTitle} title={item.imageTitle}
                            />
                        </SliderItemRight>
                    </SliderItem>
                    )
            })}
        </SliderContainer>
    )
}

export default Slider;