import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faAward, faMapLocationDot, faComments } from '@fortawesome/free-solid-svg-icons';

import { WidgetContainer, WidgetItem } from './widget.styles';

const Widget = () => {
    return (
        <WidgetContainer>
            <WidgetItem>
                <span><FontAwesomeIcon icon={faTruck} /></span>
                <h3>Free delivery</h3>
                <p>for all orders above €34 / 256.17 kn</p>
            </WidgetItem>
            <WidgetItem>
                <span><FontAwesomeIcon icon={faAward} /></span>
                <h3>Taste guarantee</h3>
                <p>if your dog doesn't like the food, return it</p>
            </WidgetItem>
            <WidgetItem>
                <span><FontAwesomeIcon icon={faMapLocationDot} /></span>
                <h3>Stores throughout Croatia</h3>
                <p>for the best shopping experience</p>
            </WidgetItem>
            <WidgetItem>
                <span><FontAwesomeIcon icon={faComments} /></span>
                <h3>Need advice or help?</h3>
                <p>ask us, we are here for you.</p>
            </WidgetItem>
        </WidgetContainer>
    )
}

export default Widget;