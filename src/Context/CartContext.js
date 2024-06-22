import React, { createContext, useState } from 'react';


const CartContext = createContext();

function CartProvider({ children }) {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);



    const addToCart = (item, quantity = 1) => {

        const itemIndex = cartItems.findIndex((itemInCart) => itemInCart.id === item.id); // == -1 || !== -1

        if (itemIndex !== -1) {
            const updatedCartItem = [...cartItems];
            updatedCartItem[itemIndex].quantity += quantity;

            setCartItems(updatedCartItem);

        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }

        setCartCount((prevCartCount) => prevCartCount + quantity); //5
    }


    const removeFromCart = (itemId) => {
        const removeCartItem = cartItems.filter((item) => item.id !== itemId);
        setCartItems(removeCartItem);

        setCartCount((prevCartCount) => prevCartCount - 1);
    };



    return (
        <CartContext.Provider value={{ cartCount, setCartCount, cartItems, setCartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );

}

export { CartContext, CartProvider };
