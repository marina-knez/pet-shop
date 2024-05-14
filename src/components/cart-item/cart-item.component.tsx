import { CartItemContainer, CartItemDetails, CartItemName } from "./cart-item.styles";

export type CartItemProps = {
    cartItem: {
        title: string;
        imageUrl: string;
        price: number;
        quantity: number;
    };
};

const CartItem = ({ cartItem }: CartItemProps ) => {
    const { title, imageUrl, price, quantity } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={title} title={title} />
            <CartItemDetails>
                <CartItemName>{title}</CartItemName>
                <span>{quantity} x {price} €</span>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;