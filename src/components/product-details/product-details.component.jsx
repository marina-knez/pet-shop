import { useSelector } from "react-redux";

import { selectProductItem } from "../../store/product/product.selector";

const ProductDetails = () => {
  const productItem = useSelector(selectProductItem);

  const { title, imageUrl, productCode, description, size, price, ingredients, content } = productItem;

  return (
    <div>
      <h2>Product Details</h2>
      <p>{title}</p>
      <img src={imageUrl} alt={title} title={title} />
      <p>Code: {productCode}</p>
      <p>Description: {description}</p>
      <p>Size: {size}</p>
      <p>Price: {price}</p>
      <p>Ingredients: {ingredients}</p>
      <p>Content: {content}</p>
    </div>
  )
}

export default ProductDetails;
