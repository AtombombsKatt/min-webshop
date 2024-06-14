import { useState, useEffect } from 'react';

const useSearchProducts = (searchWord) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchWord) return;

    const searchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchWord}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    searchProducts();
  }, [searchWord]);
  
  return { products, loading, error };
};

export default useSearchProducts;
