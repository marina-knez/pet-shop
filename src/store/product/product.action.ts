import { createAction, Action, ActionWithPayload, withMatcher } from "../../utilities/reducer/reducer.utilities";
import { PRODUCT_ACTION_TYPES, ProductItem, Quantity } from "./product.types";
import { Category } from "../categories/category.types";
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from "../store";
import { AnyAction } from "redux";

export type SetProductItem = ActionWithPayload<PRODUCT_ACTION_TYPES.SET_PRODUCT_ITEM, ProductItem>;

export type SetProductQuantity = ActionWithPayload<PRODUCT_ACTION_TYPES.SET_PRODUCT_QUANTITY, Quantity>;

export type ResetProductQuantity = Action<PRODUCT_ACTION_TYPES.RESET_PRODUCT_QUANTITY>;

export const setProductItem = withMatcher((item: ProductItem): SetProductItem => (
  createAction(PRODUCT_ACTION_TYPES.SET_PRODUCT_ITEM, item)
));

export const getProductToView = (id: number, category: string): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  AnyAction
> => async (dispatch, getState) => {
  try {
    const categories = getState().categories.categories;
    const categoryData: Category | undefined = categories.find((cat: Category) => cat.categoryName === category);

    if (!categoryData) {
      throw new Error(`Category '${category}' not found.`);
    }

    const productData: ProductItem | undefined = categoryData.items.find((product: ProductItem) => product.id === id);

    if (!productData) {
      throw new Error(`Product with ID '${id}' not found in category '${category}'.`);
    }

    dispatch(setProductItem(productData));
    dispatch(resetProductQuantity());
  } catch (error) {
    console.error(error);
  }
};



export const setProductQuantity = withMatcher((quantity: Quantity): SetProductQuantity => {
  return createAction(PRODUCT_ACTION_TYPES.SET_PRODUCT_QUANTITY, quantity);
});

export const decreaseQuantity = (): ThunkAction<void, RootState, unknown, AnyAction> => (
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>, 
  getState: () => RootState
    ) => {
  const quantity = getState().product.quantity;
  if (quantity > 1) {
    dispatch(setProductQuantity(quantity - 1));
  }
};

export const increaseQuantity = (): ThunkAction<void, RootState, unknown, AnyAction> => (
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>, 
  getState: () => RootState
  ) => {
  const quantity = getState().product.quantity;
  dispatch(setProductQuantity(quantity + 1));
};

export const resetProductQuantity = withMatcher((): ResetProductQuantity =>
  createAction(PRODUCT_ACTION_TYPES.RESET_PRODUCT_QUANTITY));