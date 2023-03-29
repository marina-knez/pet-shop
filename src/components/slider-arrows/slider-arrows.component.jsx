
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SliderArrows= ({ onArrowClickLeft, onArrowClickRight }) => {
    return (
        <div>
            <button className='button-arrow-left' onClick={onArrowClickLeft}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className='button-arrow-right' onClick={onArrowClickRight}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}

export default SliderArrows;