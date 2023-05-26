import { setProductItem, setProductQuantity, resetProductQuantity } from './product.action';
import { ProductItem } from './product.types';
import { AnyAction } from "redux";

export type ProductItemState = {
  readonly productItem: ProductItem | null;
  readonly quantity: number;
}

export const INITIAL_STATE: ProductItemState = {
    productItem: null,
    quantity: 1
  };
  
 export const productReducer = (state = INITIAL_STATE, action: AnyAction): ProductItemState => {

  if(setProductItem.match(action)) {
    return {
      ...state,
      productItem: action.paload
    };
  }

  if(setProductQuantity.match(action)){
    return {
      ...state,
      quantity: action.paload
    };
  }

  if(resetProductQuantity.match(action)){
    return {
      ...state,
      quantity: 1,
    };
  }

  return state;
  };
