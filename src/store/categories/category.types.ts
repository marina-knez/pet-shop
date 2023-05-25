export enum CATEGORIES_ACTION_TYPES {
    FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED = 'categories/FETCH_CATEGORIES_FAILED'
};

export type CategoryItem = {
    id: number;
    title: string;
    imageUrl: string;
    productCode: string;
    description: string;
    size: string;
    price: number;
    ingredients: string;
    content: string;
    quantity: number;
};

export type Category = {
    categoryName: string;
    items: CategoryItem[];
};

export type CategoryMap = {
    [key: string]: CategoryItem[];
}