import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, ProductCardInfo, ProductCardTitle } from './product-card.styles';

const ProductCard = ({ product }) => {
    const { title, imageUrl, price } = product;

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={title} title={title} />
            <ProductCardInfo>
                <ProductCardTitle>{title}</ProductCardTitle>
                <span>{price}</span>
            </ProductCardInfo>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} className="button">Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;