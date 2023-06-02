import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, CategoryPreviewTitle, Preview } from "./category-preview.styles";

export type Product = {
    id: number;
    title: string;
    imageUrl: string;
    productCode: string;
    description: string;
    size: string;
    price: number;
    ingredients: string;
    content: string;
    quantity: number;
};

export type CategoryPreviewProps = {
    title: string;
    products: Product[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {

    return (
        <CategoryPreviewContainer>
            <h2>
                <CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
            </h2>
            <Preview>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map(product => 
                            <ProductCard key={product.id} product={product} category={title} />
                        )
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;
