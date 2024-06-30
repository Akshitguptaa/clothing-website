import React, { createContext, useReducer } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    setIsCartOpen: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { },
});

const CART_ACTION_TYPES = {
    TOGGLE_CART: 'TOGGLE_CART',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                isCartOpen: payload.isOpen,
            };

        case CART_ACTION_TYPES.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload.productToAdd),
            };

        case CART_ACTION_TYPES.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, payload.cartItemToRemove),
            };

        case CART_ACTION_TYPES.DELETE_ITEM:
            return {
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, payload.cartItemToRemove),
            };

        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`);
    }
};

const addItemToCart = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((item) =>
            item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);

    if (!existingCartItem) return cartItems;

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    } else {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
    }
};

const deleteItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const handleToggleCart = (isOpen) => {
        dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART, payload: { isOpen } });
    };

    const handleAddItemToCart = (productToAdd) => {
        dispatch({ type: CART_ACTION_TYPES.ADD_ITEM, payload: { productToAdd } });
    };

    const handleRemoveItemFromCart = (cartItemToRemove) => {
        dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM, payload: { cartItemToRemove } });
    };

    const handleDeleteItemFromCart = (cartItemToRemove) => {
        dispatch({ type: CART_ACTION_TYPES.DELETE_ITEM, payload: { cartItemToRemove } });
    };

    const value = {
        isCartOpen: state.isCartOpen,
        setIsCartOpen: handleToggleCart,
        cartItems: state.cartItems,
        addItemToCart: handleAddItemToCart,
        removeItemFromCart: handleRemoveItemFromCart,
        deleteItemFromCart: handleDeleteItemFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
