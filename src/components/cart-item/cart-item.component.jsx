import { CartItemContainer,CartItemDetails,CartItemName } from "./cart-item.styles";

const CartItem = ({ cartitem }) => {
    
    const { imageUrl, price, name, quantity } = cartitem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt="{`${name}`}" />
            <CartItemDetails>
                <CartItemName>{name}</CartItemName>
                <span className='price'>{quantity}×₹{price}</span>
            </CartItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;