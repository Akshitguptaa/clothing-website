import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartitem={item} />
                ))}
            </div>
            <Button onClick={() => console.log("Go to Checkout clicked")}>Checkout</Button>
        </div>
    );
};

export default CartDropdown;
