import React from 'react';
import useFetchSearchProducts from './FetchSearchProducts';
import relevantCategorySlugs from '../Components/RelevantCategorySlugs';
import useFetchProductsFromCategory from './FetchProductsFromCategory';

const useSearchResults = ({ searchWord }) => {
  const { products: allProducts, loading: allProductsLoading, error: allProductsError } = useFetchProductsFromCategory();

  const filteredProducts = allProducts.filter(product =>
    relevantCategorySlugs.includes(product.category.slug)
  );
  console.log(allProducts)
  const { products: searchProducts, loading: searchLoading, error: searchError } = useFetchSearchProducts(searchWord);
  const displayProducts = searchWord ? searchProducts : filteredProducts;

  if (allProductsLoading || searchLoading) return <div>Loading...</div>;
  if (allProductsError || searchError) return <div>Error: {allProductsError || searchError}</div>;
  
  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {displayProducts.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default useSearchResults;
