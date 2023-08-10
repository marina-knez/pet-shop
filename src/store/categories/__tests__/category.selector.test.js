import { selectCategories, selectCategoriesIsLoading, selectCategoriesMap } from '../category.selector';

const mockState = {
    categories: {
        isLoading: false,
        categories: [
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
        ]
    }
}

describe('Category Selector tests', () => {
    test('selectCategories should return categoriesData', () => {
        const categoriesSlice = selectCategories(mockState);
        expect(categoriesSlice).toEqual(mockState.categories.categories);
    });

    test('selectCategoriesIsLoading should return isLoading state', () => {
        const isLoading = selectCategoriesIsLoading(mockState);
        expect(isLoading).toEqual(false);
    });

    test('selectCategoriesMap should convert the items array into the appropriate map', () => {
        const expectedCategoriesMap = {
            food: [
                { id: 1, title: 'Product 1' },
                { id: 2, title: 'Product 2' }
            ],
            bowls: [
                { id: 3, title: 'Product 3' },
                { id: 4, title: 'Product 4' }
            ]
        }

        const categoriesMap = selectCategoriesMap(mockState);
        expect(categoriesMap).toEqual(expectedCategoriesMap);
    });
});