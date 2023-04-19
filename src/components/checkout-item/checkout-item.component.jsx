import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';

import { CheckoutItemContainer, ImageContainer, ItemDetails, ItemQuantity, RemoveButton } from "./checkout-item.styles";

const CheckoutItem = ({cartItem}) => {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const { title, imageUrl, quantity, price } = cartItem;

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={title} title={title} />
            </ImageContainer>
            <ItemDetails>{title}</ItemDetails>
            <ItemQuantity>
                <span onClick={removeItemHandler}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </span>
                <span>{quantity}</span>
                <span onClick={addItemHandler}>
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