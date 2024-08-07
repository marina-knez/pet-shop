import { createAction, Action, ActionWithPayload, withMatcher } from "../../utilities/reducer/reducer.utilities";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import { ThunkAction } from 'redux-thunk';
import { RootState } from "../store";
import { AnyAction } from "redux";
import { getCategoriesAndDocuments } from "../../utilities/firebase/firebase.utilities";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categories: Category[]): FetchCategoriesSuccess => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories));

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));

export const fetchCategoriesAsync = (): ThunkAction<
Promise<void>,
RootState,
unknown,
AnyAction
> => async (dispatch) => {
    dispatch(fetchCategoriesStart());

    try {
        const categoriesData = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesData));
    } catch(error) {
        dispatch(fetchCategoriesFailed(error as Error));
    }
};