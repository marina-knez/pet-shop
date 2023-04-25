import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoryContainer } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const categoryData = categories.filter((cat) => cat.categoryName === category)[0];
    setProducts(categoryData ? categoryData.items : [])
  }, [category, categories])

  return (
    <CategoryContainer>
      <h2>{category}</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </CategoryContainer>
  );
};

export default Category;
