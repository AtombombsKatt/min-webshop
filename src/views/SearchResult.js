import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchSearchProducts from '../hooks/useFetchSearchProducts';
import StarRating from '../Components/StarRating';
import relevantCategorySlugs from '../Components/RelevantCategorySlugs';
const useSearchResults = ({ searchWord }) => {
  const { products: searchProducts, loading: searchLoading, error: searchError } = useFetchSearchProducts(searchWord);
  const [sortedProducts, setSortedProducts] = useState([]);

  // Filtrera produkter baserat på relevanta kategorislugs
  useEffect(() => {
    if (searchProducts.length > 0) {
      const filtered = searchProducts.filter(product =>
        relevantCategorySlugs.includes(product.category.toLowerCase().trim())
      );
      setSortedProducts(filtered);
    }
  }, [searchProducts]);

  // Sorteringen hög till låg eller tvärtom för pris & rating
  const handleSortChange = (e) => {
    const sortType = e.target.value;

    if (sortType === 'priceLowToHigh') {
      const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
      setSortedProducts(sorted);
    } else if (sortType === 'priceHighToLow') {
      const sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
      setSortedProducts(sorted);
    } else if (sortType === 'ratingLowToHigh') {
      const sorted = [...sortedProducts].sort((a, b) => a.rating - b.rating);
      setSortedProducts(sorted);
    } else if (sortType === 'ratingHighToLow') {
      const sorted = [...sortedProducts].sort((a, b) => b.rating - a.rating);
      setSortedProducts(sorted);
    } else {
      // Default sorting, om inget val görs
      setSortedProducts(searchProducts);
    }
  };

  // Rendera sökresult samma style som produkt.js. Styla om sen. för mycket varor ser inte bra ut. tex watches
  return (
    <div className='mt-4'>
      <div className='flex justify-end mb-4 pr-6'>

        {/* knapparna för att kalla sorteringsfunktionerna */}
        <select 
          onChange={handleSortChange} 
          className='p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
          defaultValue=''
        >
          <option value='' disabled>Sort Products by</option>
          <option value='priceLowToHigh'>Price (Low to High)</option>
          <option value='priceHighToLow'>Price (High to Low)</option>
          <option value='ratingLowToHigh'>Rating (Low to High)</option>
          <option value='ratingHighToLow'>Rating (High to Low)</option>
        </select>
      </div>

      <div className='flex flex-wrap justify-center md:justify-start pl-6 md:pl-48 m-6 border-b border-gray-300'>
        {/* gå igenom products, hämta bild, titel osv */}
        {sortedProducts.map(product => (
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4' key={product.id}>
            {/* gå till produktinfo sidan */}
            <Link to={`/products/${product.id}`}> 
              <img src={product.thumbnail} alt={product.title} className='w-full h-auto' />
              <h2 className='text text-center text-lg font-bold mb-2'>{product.title}</h2>
              {/* om produkten har kategori solbrillor, stryk pris lägg till rabatt */}
              <p className={`text-center text-lg font-bold mb-2 ${product.category === 'sunglasses' ? 'line-through' : 'no-underline'}`}>
                ${product.price}
              </p>
              {product.category === 'sunglasses' && (
                <p className='text-center text-lg font-bold mb-2 text-red-700'>
                  ${(product.price * 0.7).toFixed(2)}
                </p>
              )}
              {/* hämta stjärnor, använd ratingen för antal stjärnor avrundat */}
              <StarRating rating={product.rating} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default useSearchResults;
