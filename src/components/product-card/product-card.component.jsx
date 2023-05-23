import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { selectCartItems } from '../../store/cart/cart.selector';
import { getProductToView } from '../../store/product/product.action';

import { addItemToCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, ProductCardInfo, ProductCardTitle } from './product-card.styles';

const ProductCard = ({ product, category }) => {
    console.log('PRODUCT: ', product)

    const { id, title, imageUrl, price } = product;
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, {...product, quantity: 1}));

    const handleProductClick = () => {
        dispatch(getProductToView(id, category));
    };

    return (
        <ProductCardContainer>
            <Link to={`/shop/${category}/` + id} onClick={() => handleProductClick(id)}>
                <img src={imageUrl} alt={title} title={title} />
            </Link>
            <ProductCardInfo>
                <ProductCardTitle>{title}</ProductCardTitle>
                <span>{price} €</span>
            </ProductCardInfo>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} className="button">Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;