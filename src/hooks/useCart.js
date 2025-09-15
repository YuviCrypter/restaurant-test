// src/hooks/useCart.js
import { useState, useEffect } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from localStorage, if available
    try {
      const storedCart = localStorage.getItem("spiceandsizzle_cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    try {
      localStorage.setItem("spiceandsizzle_cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems]);

  const addToCart = (item, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex > -1) {
        // Item already in cart, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new item to cart
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  const updateCartQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) => {
      if (newQuantity <= 0) {
        return prevItems.filter((item) => item.id !== itemId);
      }
      return prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return {
    cartItems,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };
};

export default useCart;
