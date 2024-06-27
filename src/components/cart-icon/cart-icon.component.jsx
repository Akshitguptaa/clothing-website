import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { CartIconContainer, ShoppingBagIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);
    var totalCount = 0;
    {
        cartItems.map((item) => (totalCount += item.quantity));
    }

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingBagIcon />
            <ItemCount>{totalCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
