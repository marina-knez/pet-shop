import { screen } from "@testing-library/react";
import '@testing-library/jest-dom'; 
import { renderWithProviders } from "../../../utilities/test/test.utilities";
import Navigation from "../navigation.component";

describe('Navigation tests', () => {
    test('it should not render a cart dropdown if isCartOpen is false', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                cart: {
                    isCartOpen: false,
                    cartItems: []
                }
            }
        });

        const dropdownTextElement = screen.queryByText(/your cart is empty/i);
        expect(dropdownTextElement).toBeNull();
    });

    test('it should render a cart dropdown if isCartOpen is true', () => {
        renderWithProviders(<Navigation />, {
            preloadedState: {
                cart: {
                    isCartOpen: true,
                    cartItems: []
                }
            }
        });

        const dropdownTextElement = screen.getByText(/your cart is empty/i);
        expect(dropdownTextElement).toBeInTheDocument();
    });
});