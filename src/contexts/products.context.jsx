import { createContext } from "react";

import PRODUCTS from '../db/db.json';
import { useState } from "react";

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};

    return (
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    )
}