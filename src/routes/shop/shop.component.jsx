import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context'; 
import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContainer } from './shop.styles';

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <ProductsContainer>
            {products.map((category) => (
                category.items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ))}
        </ProductsContainer>
    )
}

export default Shop;