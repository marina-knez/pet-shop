import { createAction } from "../../utilities/reducer/reducer.utilities";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) => createAction(
    CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean
);

  export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + productToAdd.quantity } 
          : cartItem
      );
    }
    return [...cartItems, { ...productToAdd, quantity: productToAdd.quantity }];
  };

  const incrementCartItem = (cartItems, cartItemToIncrement) => {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToIncrement.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  };
  
  const decrementCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    };

    return cartItems.map((cartItem) => 
            cartItem.id === cartItemToRemove.id 
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
  };
  
  const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  
  export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };

  export const incrementItemInCart = (cartItems, cartItemToIncrement) => {
    const newCartItems = incrementCartItem(cartItems, cartItemToIncrement);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };
  
  export const decrementItemInCart = (cartItems, cartItemToRemove) => {
    const newCartItems = decrementCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };
  
  export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };