import { productReducer, INITIAL_STATE } from '../product.reducer';
import { setProductItem, setProductQuantity, resetProductQuantity } from '../product.action';

describe('Product reducer tests', () => {
    test('setProductItem', () => {
        const mockProductItem = {
            id: 1,
            title: 'Item A',
            imageUrl: 'test',
            productCode: '123',
            description: 'test description',
            size: '1 kg',
            price: 10,
            ingredients: 'test ingredients',
            content: 'test content',
            quantity: 1,
        };

        const expectedState = {
            ...INITIAL_STATE,
            productItem: mockProductItem,
            quantity: 1
        };

        expect(productReducer(INITIAL_STATE, setProductItem(mockProductItem))).toEqual(expectedState);
    });

    test('setProductQuantity', () => {
        const mockProductQuantity = 3;
        const expectedState = {
            ...INITIAL_STATE,
            quantity: mockProductQuantity
        };

        expect(productReducer(INITIAL_STATE, setProductQuantity(mockProductQuantity))).toEqual(expectedState);
    });

    test('resetProductQuantity', () => {
        const expectedState = {
            ...INITIAL_STATE,
            quantity: 1
        };

        expect(productReducer(INITIAL_STATE, resetProductQuantity())).toEqual(expectedState);
    });
});