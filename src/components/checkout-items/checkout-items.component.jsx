import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { CheckoutItemContainer, ImgContainer, RemoveButton, Value, Arrow, Name, Quantity } from './checkout-items.styles';

const CheckoutItems = ({ cartItem }) => {
    const { deleteItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const handleDelete = () => deleteItemFromCart(cartItem);

    const handleIncrement = () => addItemToCart(cartItem);

    const handleDecrement = () => removeItemFromCart(cartItem);

    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImgContainer>
                <img src={imageUrl} alt={name} />
            </ImgContainer>
            <Name as='span'>{name}</Name>
            <Quantity>
                <Arrow onClick={handleDecrement}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={handleIncrement}>&#10095;</Arrow>
            </Quantity>
            <Name as='span'>{price}</Name>
            <RemoveButton onClick={handleDelete}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItems;
