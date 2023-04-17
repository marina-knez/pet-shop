import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
    return (
        <CartDropdownContainer>
            <CartItems />
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} className="button">CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;