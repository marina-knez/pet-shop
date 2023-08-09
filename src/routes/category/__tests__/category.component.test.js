import { screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; 
import { renderWithProviders } from "../../../utilities/test/test.utilities";
import Category from "../category.component";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        category: 'food'
    }),
}));

describe('Category tests', () => {
    test('it should render a Spinner if isLoading is true', () => {
        renderWithProviders(<Category />, {
            preloadedState: {
                categories: {
                    isLoading: true,
                    categories: []
                }
            }
        });

        const spinnerElement = screen.getByTestId('spinner');
        expect(spinnerElement).toBeInTheDocument();
    });

    test('it should render products if isLoading is false and there are items present', () => {
        renderWithProviders(<Category />, {
            preloadedState: {
                categories: {
                    isLoading: false,
                    categories: [
                        {
                           categoryName: 'food',
                           items: [
                            { id: 1, title: 'Product 1' },
                            { id: 2, title: 'Product 2' }
                           ], 
                        },
                    ],
                },
            },
        });

        const spinnerElement = screen.queryByTestId('spinner');
        expect(spinnerElement).toBeNull();

        const product1Element = screen.getByText(/product 1/i);
        expect(product1Element).toBeInTheDocument();
    });
});