import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.scss';
import CheckoutItems from '../../components/checkout-items/checkout-items.component';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    var total=0;
    {
        cartItems.map((item) => (total+=(item.price*item.quantity)));
    }

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map((cartitem) => {
                    const { name, id, price, quantity } = cartitem;

                    return (
                        <CheckoutItems key={id} cartItem={cartitem}/>
                    )
                })
            }

            <span className='total'>{`Total : ₹${total}`}</span>
        </div>
    )
};

export default Checkout;
