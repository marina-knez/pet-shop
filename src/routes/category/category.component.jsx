import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { selectCategories, selectCategoriesIsLoading } from '../../store/categories/category.selector';
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from '../../components/spinner/spinner.component';

import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const categoryData = categories.filter((cat) => cat.categoryName === category)[0];
    setProducts(categoryData ? categoryData.items : [])
  }, [category, categories])
  
  return (
    <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        {
          isLoading ? (
            <Spinner />
          ) : (
            <CategoryContainer>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} category={category} />
              ))}
            </CategoryContainer>
          )
        }
    </Fragment>
  );
};

export default Category;
