import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
//lägg till i cart, om id finns öka antal. Om inte lägg ny
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find(item => item.id === product.id);
      if (productInCart) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  //ta bort med id
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  //funk för att uppdatera antal
  const updateProductQuantity = (productId, quantity) => {
    setCart((prevCart) => 
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  //skicka med värdena
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
//exportera usecart hook för allting
export const useCart = () => useContext(CartContext);