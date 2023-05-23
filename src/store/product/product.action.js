import { createAction } from "../../utilities/reducer/reducer.utilities";
import { PRODUCT_ACTION_TYPES } from "./product.types";

export const setProductItem = (item) => (
  createAction(PRODUCT_ACTION_TYPES.SET_PRODUCT_ITEM, item)
);
  
export const getProductToView = (id, category) => async (dispatch, getState) => {
  try {
    const categories = getState().categories.categories;
    const categoryData = categories.find((cat) => cat.categoryName === category);
    const productData = categoryData.items.find((product) => product.id === id);
    dispatch(setProductItem(productData));
    dispatch(resetProductQuantity());

  } catch (error) {
      console.error(error);
  }
};

export const setProductQuantity = (quantity) => {
  return createAction(PRODUCT_ACTION_TYPES.SET_PRODUCT_QUANTITY, quantity);
};

export const decreaseQuantity = () => (dispatch, getState) => {
  const quantity = getState().product.quantity;
  if (quantity > 1) {
    dispatch(setProductQuantity(quantity - 1));
  }
};

export const increaseQuantity = () => (dispatch, getState) => {
  const quantity = getState().product.quantity;
  dispatch(setProductQuantity(quantity + 1));
};

export const resetProductQuantity = () =>
  createAction(PRODUCT_ACTION_TYPES.RESET_PRODUCT_QUANTITY);