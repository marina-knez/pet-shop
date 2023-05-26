import { CategoryItem } from "../categories/category.types";

export enum PRODUCT_ACTION_TYPES {
    SET_PRODUCT_ITEM = 'product/SET_PRODUCT_ITEM',
    SET_PRODUCT_QUANTITY = 'product/SET_PRODUCT_QUANTITY',
    RESET_PRODUCT_QUANTITY = 'product/RESET_PRODUCT_QUANTITY'
};

export type ProductItem = CategoryItem;

export type Quantity = number;