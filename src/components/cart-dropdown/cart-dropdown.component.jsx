import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
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