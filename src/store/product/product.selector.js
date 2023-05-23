import { createSelector } from 'reselect';

const selectProductReducer = (state) => state.product;

export const selectProductItem = createSelector(
  [selectProductReducer],
  (product) => product.productItem
);

export const selectProductQuantity = createSelector(
  [selectProductReducer],
  (product) => product.quantity
);