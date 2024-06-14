// ProductInfo.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetchProductId from '../hooks/useFetchProductId';
import { useState } from 'react';
import { useCart } from '../Contexter/CartContext';
import StarRating from '../Components/StarRating';
import ImageNavigate from'../Components/ImageNavigate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';




const ProductInfo = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProductId(id);
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

//toastify meddelande, lagts i cart
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} has been added to your cart!`, {
      onClick: () => navigate('/cart'),
      style: {
        backgroundColor: 'lightgray', 
        cursor: 'pointer'
      },
    });
  };
 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  //rendera olika egenskaper från objektet title,pris, rating, reviews etc.
  return (
    <div className='flex flex-col items-center justify-center p-4 m-6  shadow-md rounded-lg max-w-3xl mx-auto'>
      {/* rotera bild komponent */}
      <ImageNavigate
        images={product.images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <h2 className='text-2xl font-bold mb-2 '>{product.title}</h2>
      {/* Avgör om solbrillor eller inte för att visa rabatt pris och stryka gamla priset */}
      <p className={`text-lg font-bold mb-2 ${product.category === 'sunglasses' ? 'line-through' : 'no-underline'}`}>
        ${product.price}
      </p>
      {product.category === 'sunglasses' && (
        <p className='text-xl  font-bold mb-2 text-red-700'>
              {/* visa 30% rabatt pris med 2 digits */}
          ${(product.price * 0.7).toFixed(2)} 
        </p>
      )}
    {/* kalla handleAddToCart funktionen knapp, lägg i korg*/}
      <button
        onClick={handleAddToCart}
        className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'
      >
        Add to Cart
      </button>
      <div className='flex flex-row justify-between w-full mt-4 mb-2'>
        <p className='text-lg font-semibold text-orange-700'>Rating: {product.rating}</p>
        <p className='text-lg border-b border-gray-300 font-semibold'>{product.availabilityStatus}</p> 
        {/* komponent för att konvertera rating värde till stjärnor */}
        <StarRating  rating={product.rating} />
      </div>
      <div className='border-b border-gray-300'>
        <p className='text-lg '>{product.description}</p>
      </div>
      
      <div className='flex flex-row justify-between w-full mt-6'>
      <div className='flex flex-col space-y-4 border-b border-gray-300'> {/*Dessa två divvar vill jag att innehållet ska ligga åt vänster respektive höger */}
        <h3 className='font-bold text-xl'>Reviews:</h3>
        <StarRating  rating={product.rating} />
        {product.reviews.map((review, index) => (
          <div key={index} className='border-b border-gray-300'>
            <FontAwesomeIcon icon={faComment} className='mr-2' /> 
            <p className='font-bold'>{review.reviewerName}:</p>
            <p className='font-bold'>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col space-y-4'> {/*Dessa två divvar vill jag att innehållet ska ligga åt vänster respektive höger */}
        <h3 className='font-bold text-xl'>Specific information</h3>
        <p>Left in stock: {product.stock}</p>
        <p>Depth: {product.dimensions.depth}</p>
        <p>Height: {product.dimensions.height}</p>
        <p>Width: {product.dimensions.width}</p>
        <p>Weight: {product.weight}</p>
        <p>Category: {product.category}</p>
        <p>Warranty: {product.warrantyInformation}</p>
      </div>
    </div>
  </div>
  

  );
};

export default ProductInfo;
