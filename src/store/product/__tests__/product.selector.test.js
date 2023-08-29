import { selectProductItem, selectProductQuantity } from "../product.selector";

const mockState = {
    product: {
        productItem: [
            { id: 1, title: 'Item A', imageUrl: 'test', price: 10, quantity: 1 },
            { id: 2, title: 'Item B', imageUrl: 'test', price: 20, quantity: 2 }
        ],
        quantity: 2
    }
    
};

describe('Product selector tests', () => {
    test('selectProductItem should return productItem data', () => {
        const productData = selectProductItem(mockState);
        expect(productData).toEqual(mockState.product.productItem);
    });

    test('selectProductQuantity should return product item quantity', () => {
        const productItemQuantity = selectProductQuantity(mockState);
        expect(productItemQuantity).toEqual(2);
    });
});