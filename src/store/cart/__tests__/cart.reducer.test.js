import { cartReducer, CART_INITIAL_STATE } from "../cart.reducer";
import { setCartItems, setIsCartOpen } from '../cart.action';

describe('Cart reducer tests', () => {
    test('setCartItems', () => {
        const mockCartItems =  [
            { id: 1, title: 'Item A', imageUrl: 'test', price: 10, quantity: 1 },
            { id: 2, title: 'Item B', imageUrl: 'test', price: 10, quantity: 2 }
        ];

        const expectedState = {
            ...CART_INITIAL_STATE,
            cartItems: mockCartItems
        };

        expect(cartReducer(CART_INITIAL_STATE, setCartItems(mockCartItems))).toEqual(expectedState);
    });

    test('setIsCartOpen', () => {
        const expectedState = {
            ...CART_INITIAL_STATE,
            isCartOpen: false
        };

        expect(cartReducer(CART_INITIAL_STATE, setIsCartOpen(false))).toEqual(expectedState);
    });
});