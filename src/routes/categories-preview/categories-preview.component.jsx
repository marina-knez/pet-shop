import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { selectCategories } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories);
    console.log(categories)

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
