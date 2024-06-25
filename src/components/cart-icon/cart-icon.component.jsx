import React, { useContext } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);
    var totalCount=0;
    {
        cartItems.map((item) => (totalCount+=item.quantity));
    }

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingBagIcon className="shopping-icon" />
            <span className='item-count'>{totalCount}</span>
        </div>
    );
};

export default CartIcon;
