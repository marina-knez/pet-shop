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

    } catch (error) {
      console.error(error);
    }
  };