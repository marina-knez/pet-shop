import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { getProductToView } from '../../store/product/product.action';

import { addItemToCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, ProductCardInfo, ProductCardTitle } from './product-card.styles';

export type Product = {
    id: number;
    title: string;
    imageUrl: string;
    productCode: string;
    description: string;
    size: string;
    price: number;
    ingredients: string;
    content: string;
    quantity: number;
};

export type ProductCardProps = {
    product: Product;
    category: string;
};

const ProductCard = ({ product, category }: ProductCardProps) => {

    const { id, title, imageUrl, price } = product;
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, {...product, quantity: 1}));

    const handleProductClick = () => {
        dispatch(getProductToView(id, category));
    };

    return (
        <ProductCardContainer>
            <Link to={`/shop/${category}/` + id} onClick={() => handleProductClick()}>
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