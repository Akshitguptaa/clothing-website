import React, { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        const updatedCartItems = addCartItem(cartItems, productToAdd);
        setCartItems(updatedCartItems);
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
