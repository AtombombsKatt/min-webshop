import { useState, useEffect } from 'react';
//onödig?
const useCart = () => {
  const [cart, setCart] = useState({ products: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
        console.log('Loaded cart from localStorage:', storedCart);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const addToCart = (title, price, image) => {
    const newProduct = { title, price, image };
    const updatedProducts = [...cart.products, newProduct];
    const updatedCart = { ...cart, products: updatedProducts };
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  

  return { cart, loading, error, addToCart };
};

export default useCart;
