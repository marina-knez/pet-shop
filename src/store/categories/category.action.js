import { createAction } from "../../utilities/reducer/reducer.utilities";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { getCategories } from '../../utilities/fetch-db/fetch-db.utilities';

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());

    try {
        const categoriesData = await getCategories();
        dispatch(fetchCategoriesSuccess(categoriesData));
    } catch(error) {
        dispatch(fetchCategoriesFailed(error));
    }
}