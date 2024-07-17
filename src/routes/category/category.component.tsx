import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from '../../components/spinner/spinner.component';

import { CategoryContainer, CategoryTitle } from "./category.styles";
import { CategoryItem } from "../../store/categories/category.types";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState<CategoryItem[]>([]);

  useEffect(() => {
    setProducts(category ? categoriesMap[category] : []);
}, [category, categoriesMap]);
  
  return (
    <Fragment>
        <CategoryTitle>{(category as string).toUpperCase()}</CategoryTitle>
        {
          isLoading ? (
            <Spinner />
          ) : (
            <CategoryContainer>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} category={category as string} />
              ))}
            </CategoryContainer>
          )
        }
    </Fragment>
  );
};

export default Category;
