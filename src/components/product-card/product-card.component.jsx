import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, ProductCardInfo, ProductCardTitle } from './product-card.styles';

const ProductCard = ({ product }) => {
    const { title, imageUrl, price } = product;
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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