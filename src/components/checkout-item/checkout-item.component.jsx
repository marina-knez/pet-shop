import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { incrementItemInCart, decrementItemInCart, clearItemFromCart } from "../../store/cart/cart.action";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';

import { CheckoutItemContainer, ImageContainer, ItemDetails, ItemQuantity, RemoveButton } from "./checkout-item.styles";

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { title, imageUrl, price } = cartItem;
    const quantity = cartItem.quantity;

    const incrementItemHandler = () => dispatch(incrementItemInCart(cartItems, cartItem));
    const decrementItemHandler = () => dispatch(decrementItemInCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={title} title={title} />
            </ImageContainer>
            <ItemDetails>{title}</ItemDetails>
            <ItemQuantity>
                <span onClick={decrementItemHandler}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </span>
                <span>{quantity}</span>
                <span onClick={incrementItemHandler}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </ItemQuantity>
            <ItemDetails>{price}</ItemDetails>
            <RemoveButton onClick={clearItemHandler}>
                <FontAwesomeIcon icon={faXmark} />
            </RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;