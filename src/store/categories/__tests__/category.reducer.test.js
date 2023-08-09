import { categoriesReducer, CATEGORIES_INITIAL_STATE } from "../category.reducer";
import { fetchCategoriesStart, fetchCategoriesFailed, fetchCategoriesSuccess } from '../category.action';

describe('Category Reducer tests', () => {
    test('fetchCategoriesStart', () => {
        const expectedState = {
            ...CATEGORIES_INITIAL_STATE,
            isLoading: true
        };

        expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())).toEqual(expectedState);
    });

    test('fetchCategoriesSuccess', () => {
        const mockData = [
            {
                categoryName: 'food',
                imageUrl: 'test',
                items: [
                    { id: 1, title: 'Product 1' },
                    { id: 2, title: 'Product 2' }
                ]
            },
            {
                categoryName: 'bowls',
                imageUrl: 'test2',
                items: [
                    { id: 3, title: 'Product 3' },
                    { id: 4, title: 'Product 4' }
                ]
            }
        ];

        const expectedState = {
            ...CATEGORIES_INITIAL_STATE,
            isLoading: false,
            categories: mockData
        };

        expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesSuccess(mockData))).toEqual(expectedState);
    });

    test('fetchCategoriesFailed', () => {
        const mockError = new Error('Error fetching categoires');

        const expectedState = {
            ...CATEGORIES_INITIAL_STATE,
            isLoading: false,
            error: mockError
        };

        expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesFailed(mockError))).toEqual(expectedState);
    });
});