import React, { createContext, useContext, useState } from "react";

// Create a context to manage cart-related data
const CartContext = createContext();

// Export cartprovider component that manages the cart state and provides functions to modify it
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // If the item is already in the cart, increase the quantity
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context values conveniently in components
export const useCart = () => {
  return useContext(CartContext);
};
