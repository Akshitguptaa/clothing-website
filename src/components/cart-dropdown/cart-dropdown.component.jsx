import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import { CartDropdownContainer,EmptyMessage,CartItems, } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen} = useContext(CartContext);
    const nav= useNavigate();

    const goToCheckoutNavigate=()=>{
        nav('/checkout');
        setIsCartOpen(false);
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartitem={item} />
                ))}
            </CartItems>
            <Button onClick={goToCheckoutNavigate} >Checkout</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
