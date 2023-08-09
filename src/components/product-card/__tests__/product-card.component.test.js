import { screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; 
import { renderWithProviders } from "../../../utilities/test/test.utilities";
import ProductCard from "../product-card.component";

describe('Product Card tests', () => {
    test('it should add the product item when Product Card button is clicked', async () => {
        const mockProduct = {
            id: 1,
            title: 'Item A',
            imageUrl: 'item',
            price: 10
        }

        const { store } = renderWithProviders(<ProductCard product={mockProduct} />, {
            preloadedState: {
                cart: {
                    cartItems: []
                }
            }
        });

        const addToCartButtonElement = screen.getByText(/add to cart/i);
        await fireEvent.click(addToCartButtonElement);

        expect(store.getState().cart.cartItems.length).toBe(1);
    });
});