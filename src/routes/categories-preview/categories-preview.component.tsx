import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categories).map(categoryName => {
                    const products = categories[categoryName];
                    return (
                        <CategoryPreview key={categoryName} title={categoryName} products={products} />
                    )
                })
            )}
        </Fragment>

    )
}

export default CategoriesPreview;
