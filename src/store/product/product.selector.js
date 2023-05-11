import { createSelector } from 'reselect';

const selectProductReducer = (state) => state.product;

export const selectProductItem = createSelector(
  [selectProductReducer],
  (product) => product.productItem
);