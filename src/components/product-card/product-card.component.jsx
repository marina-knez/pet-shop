import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, ProductCardInfo, ProductCardTitle } from './product-card.styles';

import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { title, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={title} title={title} />
            <ProductCardInfo>
                <ProductCardTitle>{title}</ProductCardTitle>
                <span>{price} €</span>
            </ProductCardInfo>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} className="button">Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;