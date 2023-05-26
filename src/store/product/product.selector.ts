import { createSelector } from 'reselect';
import { RootState } from '../store';
import { ProductItemState } from './product.reducer';

const selectProductReducer = (state: RootState): ProductItemState => state.product;

export const selectProductItem = createSelector(
  [selectProductReducer],
  (product) => product.productItem
);

export const selectProductQuantity = createSelector(
  [selectProductReducer],
  (product) => product.quantity
);