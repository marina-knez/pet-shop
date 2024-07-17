import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { selectProductItem, selectProductQuantity } from "../../store/product/product.selector";
import { increaseQuantity, decreaseQuantity } from "../../store/product/product.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductItemContainer, ProductItemBasicsContainer, ProductItemDetailsContainer, ProductItemBasics, ProductItemTitle, ProductItemInfo, ProductItemCartHandle, ProductItemQuantity, ProductItemQuantityKeys } from './product-details.styles';

export type CategoryItem = {
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

export type CartItem = {
  productItem: CategoryItem;
  quantity: number;
};

const ProductDetails = () => {
  const productItem = useSelector(selectProductItem) as CategoryItem;
  const quantity = useSelector(selectProductQuantity) as number;

  const { title, imageUrl, productCode, description, size, price, ingredients, content } = productItem || {};

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const cartItems = useSelector(selectCartItems) as CategoryItem[];

  const addProductToCart = () => dispatch(addItemToCart(cartItems, {...productItem, quantity}));


  const handleIncrease = () => dispatch(increaseQuantity());

  const handleDecrease = () => dispatch(decreaseQuantity());

  return (
    <ProductItemContainer>
      <ProductItemBasicsContainer>
        <div>
          <img src={imageUrl} alt={title} title={title} />
        </div>
        <ProductItemBasics>
          <ProductItemTitle>{title}</ProductItemTitle>
          <ProductItemInfo><b>Code:</b> {productCode}</ProductItemInfo>
          <ProductItemInfo><b>Description:</b> {description}</ProductItemInfo>
          <ProductItemInfo><b>Size:</b> {size}</ProductItemInfo>
          <ProductItemInfo><b>Price:</b> {price} €</ProductItemInfo>
          <ProductItemCartHandle>
            <ProductItemQuantity>
              <ProductItemQuantityKeys onClick={handleDecrease}>-</ProductItemQuantityKeys>
              <ProductItemQuantityKeys>{quantity}</ProductItemQuantityKeys>
              <ProductItemQuantityKeys onClick={handleIncrease}>+</ProductItemQuantityKeys>
            </ProductItemQuantity>
            <Button buttonType={BUTTON_TYPE_CLASSES.large} onClick={addProductToCart} className="button">Add to Cart</Button>
          </ProductItemCartHandle>
        </ProductItemBasics>
      </ProductItemBasicsContainer>
      {
        ingredients && content && (
          <ProductItemDetailsContainer>
            <p><b>Ingredients:</b></p>
            <p>{ingredients}</p>
            <p><b>Content:</b></p>
            <p>{content}</p>
          </ProductItemDetailsContainer>
        )
      }
    </ProductItemContainer>
  )
}

export default ProductDetails;
