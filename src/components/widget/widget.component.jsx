import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faAward, faMapLocationDot, faComments } from '@fortawesome/free-solid-svg-icons';

import { WidgetContainer, WidgetItem } from './widget.styles';

const Widget = () => {
    return (
        <WidgetContainer>
            <WidgetItem>
                <span><FontAwesomeIcon icon={faTruck} /></span>
                <h3>Besplatna dostava</h3>
                <p>za sve narudžbe iznad 34€ / 256,17 kn</p>
            </WidgetItem>
            <WidgetItem>
                <span><FontAwesomeIcon icon={faAward} /></span>
                <h3>Garancija okusa</h3>
                <p>ako hranu neće, vrati ostatak vreće</p>
            </WidgetItem>
            <WidgetItem>
                <span><FontAwesomeIcon icon={faMapLocationDot} /></span>
                <h3>Dućani širom Hrvatske</h3>
                <p>za najbolje iskustvo kupovine</p>
            </WidgetItem>
            <WidgetItem>
                <span><FontAwesomeIcon icon={faComments} /></span>
                <h3>Trebaš savjet ili pomoć?</h3>
                <p>pitaj nas, tu smo ti</p>
            </WidgetItem>
        </WidgetContainer>
    )
}

export default Widget;