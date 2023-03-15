import { useState, useEffect } from 'react';

import "./slider.styles.scss";

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
        <div className='slider-container'>
            {data.map((item, indexItem) => {
                let position = "--next-slide";

                if(indexItem === index) {
                    position = "--active-slide";
                }

                if(indexItem === index - 1 || (index === 0 && indexItem === data.length - 1)) {
                    position = "--last-slide";
                }

                return (
                    <div className={`slider-item ${position}`} key={item.id} index={item.index} data={item}>
                        <section className='slider-item__left'>
                            <h1 className='slider-item__text-title'>{item.title}</h1>
                            <h2 className='slider-tiem__text-subtitle'>{item.subtitle}</h2>
                            {children}
                        </section>
                        <section className='slider-item__right'>
                            <img src={item.imageUrl} alt={item.imageTitle} title={item.imageTitle} 
                            className="slider-item__image"
                            />
                        </section>
                    </div>
                    )
            })}
        </div>
    )
}

export default Slider;