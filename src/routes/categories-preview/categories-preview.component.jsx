import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

import { selectCategories, selectCategoriesIsLoading } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                categories.map(category => {
                    const products = category.items;
                    return (
                        <CategoryPreview key={category.categoryName} title={category.categoryName} products={products} category={category} />
                    )
                })
            )}
        </Fragment>

    )
}

export default CategoriesPreview;
