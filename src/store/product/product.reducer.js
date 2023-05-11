import { PRODUCT_ACTION_TYPES } from './product.types';

const INITIAL_STATE = {
    productItem: null,
  };
  
 export const productReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, paload } = action;

    switch (type) {
      case PRODUCT_ACTION_TYPES.SET_PRODUCT_ITEM:
        return {
          ...state,
          productItem: paload,
        };
      default:
        return state;
    }
  };