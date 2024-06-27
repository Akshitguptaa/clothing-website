import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import { ProductCardContainer,ProductFooter,ProductName } from './product-card.styles';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    const { name, price, imageUrl } = product;

    const addProductToCart = () => addItemToCart(product);
    return (

        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ProductFooter>
                <ProductName>{name}</ProductName>
                <span className="price">{price}</span>
            </ProductFooter>
            <Button onClick={addProductToCart} button_type={BUTTON_TYPE_CLASSES.inverted}>Add To Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;