import { screen } from "@testing-library/react";
import '@testing-library/jest-dom'; 
import { renderWithProviders } from "../../../utilities/test/test.utilities";
import CartIcon from "../cart-icon.component";

describe('Cart Icon tests', () => {
    test('Uses preloaded state to render', () => {
        const initialCartItems = [
            { id: 1, title: 'Item A', imageUrl: 'test', price: 10, quantity: 1 },
            { id: 2, title: 'Item B', imageUrl: 'test', price: 10, quantity: 2 }
        ];

        renderWithProviders(<CartIcon />, {
            preloadedState: {
                cart: {
                    cartItems: initialCartItems
                }
            }
        });

        const cartIconElement = screen.getByText('3');
        expect(cartIconElement).toBeInTheDocument();
    });
});