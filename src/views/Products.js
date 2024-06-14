import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetchProductsFromCategory from '../hooks/useFetchProductsFromCategory'; // hook för att hämta produkter från vald kategori
import useProductSort from '../hooks/useProductSort'; //hook för att sortera produkter
import StarRating from '../Components/StarRating';
const Products = () => {

  const { category } = useParams();
  const { products, loading, error } = useFetchProductsFromCategory(category);
  const {sortedProducts, sortByPriceLowToHigh, sortByPriceHighToLow, sortByRatingLowToHigh, sortByRatingHighToLow,
  } = useProductSort(products, loading, error);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // sortera produkter funcs
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'priceLowToHigh') {
      sortByPriceLowToHigh();
    } else if (selectedOption === 'priceHighToLow') {
      sortByPriceHighToLow();
    } else if (selectedOption === 'ratingLowToHigh') {
      sortByRatingLowToHigh();
    } else if (selectedOption === 'ratingHighToLow') {
      sortByRatingHighToLow();
    }
  };

  //rendera produkter med bild, namn pris, rating
  return (
    <div className='mt-4'>
      <div className="flex justify-end mb-4 pr-6">

        {/* knapparna för att kalla sorteringsfunktionerna */}
       <select 
          onChange={handleSortChange} 
          className="p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          defaultValue=""
        >
          <option value="" disabled>Sort Products by</option>
          <option value="priceLowToHigh">Price (Low to High)</option>
          <option value="priceHighToLow">Price (High to Low)</option>
          <option value="ratingLowToHigh">Rating (Low to High)</option>
          <option value="ratingHighToLow">Rating (High to Low)</option>
        </select>
      </div>

      <div className='flex flex-wrap justify-center md:justify-start pl-6 md:pl-48 m-6 border-b border-gray-300'>
        {/* gå igenom products, hämta bild, titel osv */}
        {sortedProducts.map(product => (
          <div className='flex -1 p-4' key={product.id}>
            {/* gå till produktinfo sidan */}
            <Link to={`/products/${product.id}`}> 
              <img src={product.thumbnail} alt={product.title} className='w-full h-auto' />
              <h2 className='text text-center text-lg font-bold mb-2'>{product.title}</h2>
              {/* om produkten har kategori solbrillor, stryk pris lägg till rabatt */}
              <p className={` text-center text-lg font-bold mb-2 ${product.category === 'sunglasses' ? 'line-through' : 'no-underline'}`}>
                  ${product.price}
              </p>
              {product.category === 'sunglasses' && (
              <p className='text-center text-lg  font-bold mb-2 text-red-700'>
                ${(product.price * 0.7).toFixed(2)}
              </p>
              )}
              {/* hämta stjärnor, använd ratingen för antal stjärnor avrundat */}
              <StarRating  rating={product.rating} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
       
      
