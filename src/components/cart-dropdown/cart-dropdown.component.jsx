import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen} = useContext(CartContext);
    const nav= useNavigate();

    const goToCheckoutNavigate=()=>{
        nav('/checkout');
        setIsCartOpen(false);
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartitem={item} />
                ))}
            </div>
            <Button onClick={goToCheckoutNavigate} >Checkout</Button>
        </div>
    );
};

export default CartDropdown;
