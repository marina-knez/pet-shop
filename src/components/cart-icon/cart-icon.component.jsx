import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    return (
        <CartIconContainer>
            <FontAwesomeIcon icon={faCartShopping} />
            <ItemCount>0</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;