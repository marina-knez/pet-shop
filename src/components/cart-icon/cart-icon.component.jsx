import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <FontAwesomeIcon icon={faCartShopping} />
            <ItemCount>0</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;