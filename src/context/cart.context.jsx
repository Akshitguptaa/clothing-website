import React, { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    deleteItemFromCart:()=>{},
});

const addItemToCart = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

    if (existingCartItem) {
        const updatedCartItems = cartItems.map(item =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        return updatedCartItems;
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if (!existingCartItem) return cartItems;

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }
};

const deleteItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if (existingCartItem) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const handleAddItemToCart = (productToAdd) => {
        const updatedCartItems = addItemToCart(cartItems, productToAdd);
        setCartItems(updatedCartItems);
    };

    const handleRemoveItemFromCart = (cartItemToRemove) => {
        const updatedCartItems = removeItemFromCart(cartItems, cartItemToRemove);
        setCartItems(updatedCartItems);
    };

    const handleDeleteItemFromCart = (cartItemToRemove) => {
        const updatedCartItems = deleteItemFromCart(cartItems, cartItemToRemove);
        setCartItems(updatedCartItems);
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart: handleAddItemToCart,
        removeItemFromCart: handleRemoveItemFromCart,
        deleteItemFromCart: handleDeleteItemFromCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
