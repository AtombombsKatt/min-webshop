// src/hooks/useFetchProductsFromCategory.js

import { useState, useEffect } from 'react';

const useFetchProductsFromCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const fetchProductsFromCategory = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
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

    fetchProductsFromCategory();
  }, [category]);

  return { products, loading, error };
};

export default useFetchProductsFromCategory;
