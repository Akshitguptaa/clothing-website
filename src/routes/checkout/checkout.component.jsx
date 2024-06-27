import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutItems from '../../components/checkout-items/checkout-items.component';
import { Container, Header, HeaderBlock, Total } from './checkout.styles';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    var total = 0;
    {
        cartItems.map((item) => (total += (item.price * item.quantity)));
    }

    return (
        <Container>
            <Header>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </Header>

            {
                cartItems.map((cartitem) => {
                    const { name, id, price, quantity } = cartitem;

                    return (
                        <CheckoutItems key={id} cartItem={cartitem} />
                    )
                })
            }

            <Total>{`Total : ₹${total}`}</Total>
        </Container>
    )
};

export default Checkout;
