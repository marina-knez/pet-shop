import { PRODUCT_ACTION_TYPES } from './product.types';

const INITIAL_STATE = {
    productItem: null,
    quantity: 1
  };
  
 export const productReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, paload } = action;

    switch (type) {
      case PRODUCT_ACTION_TYPES.SET_PRODUCT_ITEM:
        return {
          ...state,
          productItem: paload
        };
      case PRODUCT_ACTION_TYPES.SET_PRODUCT_QUANTITY:
        return {
          ...state,
          quantity: paload
      };
      case PRODUCT_ACTION_TYPES.RESET_PRODUCT_QUANTITY:
        return {
          ...state,
          quantity: 1,
      };
      default:
        return state;
    }
  };
