import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from "../../store/cart/cart.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                }
            </CartItems>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} className="button" onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;