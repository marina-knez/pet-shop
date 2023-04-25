import { Fragment, useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context'; 
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categories } = useContext(CategoriesContext);

    return (
        <Fragment>
            {
                categories.map(category => {
                    const products = category.items;
                    return (
                        <CategoryPreview key={category.categoryName} title={category.categoryName} products={products} />
                    )
                })
            }
        </Fragment>

    )
}

export default CategoriesPreview;
