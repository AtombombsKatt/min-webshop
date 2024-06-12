import { useState, useEffect } from 'react';

const useProductSort = (products, loading, error) => {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setSortedProducts([...products]); // Kopiera produkterna för att undvika att modifiera originaldata
    }
  }, [loading, error, products]);

  const sortByPriceLowToHigh = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  const sortByPriceHighToLow = () => {
    const sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
    setSortedProducts(sorted);
  };
  const sortByRatingLowToHigh = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.rating - b.rating);
    setSortedProducts(sorted);
  };

  const sortByRatingHighToLow = () => {
    const sorted = [...sortedProducts].sort((a, b) => b.rating - a.rating);
    setSortedProducts(sorted);
  };

  return { sortedProducts, sortByPriceLowToHigh, sortByPriceHighToLow, sortByRatingLowToHigh,sortByRatingHighToLow};
};

export default useProductSort;
