import { selectCartCount, selectCartItems, selectCartTotal, selectIsCartOpen } from '../cart.selector';

const mockState = {
    cart: {
        isCartOpen: false,
        cartItems: [
            { id: 1, title: 'Item A', imageUrl: 'test', price: 10, quantity: 1 },
            { id: 2, title: 'Item B', imageUrl: 'test', price: 20, quantity: 2 }
        ]
    }
}

describe('Cart selector tests', () => {
    test('selectCartItems should return cartData', () => {
        const cartData = selectCartItems(mockState);
        expect(cartData).toEqual(mockState.cart.cartItems);
    });

    test('selectIsCartOpen should return isCartOpen state', () => {
        const isCartOpen = selectIsCartOpen(mockState);
        expect(isCartOpen).toEqual(false);
    });

    test('selectCartCount should return the number of items present in the cart', () => {
        const cartCount = selectCartCount(mockState);
        const expectedCartCount = mockState.cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        expect(cartCount).toEqual(expectedCartCount);
    });

    test('selectCartTotal should return the total price of the items in the cart', () => {
        const cartTotal = selectCartTotal(mockState);
        const expectedCartTotal = parseFloat(mockState.cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0).toFixed(2));
        expect(cartTotal).toEqual(expectedCartTotal);
    });
});