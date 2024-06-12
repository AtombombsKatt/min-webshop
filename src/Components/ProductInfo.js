// ProductInfo.js
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProductId from '../hooks/useFetchProductId';
import { useContext } from 'react'; 
import { CartContext } from '../Contexter/CartContext';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-regular-svg-icons';

import ImageNavigate from './ImageNavigate';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

const ProductInfo = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProductId(id);
  const { addToCart } = useContext(CartContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

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
console.log(product)
  return (
    <div className='flex flex-col items-center justify-center p-4 m-6  shadow-md rounded-lg max-w-3xl mx-auto'>
      <ImageNavigate
        images={product.images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    
      <h2 className='text-2xl font-bold mb-2 '>{product.title}</h2>
      <p className={`text-base font-bold mb-2 ${product.category === 'sunglasses' ? 'line-through' : 'no-underline'}`}>
        ${product.price}
      </p>
      {product.category === 'sunglasses' && (
        <p className='text-base font-bold mb-2 text-red-700'>
          ${(product.price * 0.7).toFixed(2)}
        </p>
      )}
      <button
        onClick={handleAddToCart}
        className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'
      >
        Add to Cart
      </button>
      <div className='flex flex-row justify-between w-full mt-4 mb-2'>
        <p className=' '>Rating: {product.rating}</p>
        <p>{product.availabilityStatus}</p>
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


// const ProductInfo = () => {
//   const { id } = useParams();
//   const { product, loading, error } = useFetchProductId(id);
//   const { cart, addToCart, loading: cartLoading, error: cartError } = useCart();

//   if (loading || cartLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (cartError) return <div>Cart Error: {cartError}</div>;

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <img src={product.thumbnail} alt={product.title} width={500} />
//       <button onClick={() => {
//         addToCart(product.id, 1);
//         console.log(`Product ${product.id} added to cart.`);
//       }}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductInfo;


// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductInfo = () => {
//   const { id } = useParams();
//   // Kontrollera om produkterna finns och är laddade
//   if (!products || products.length === 0) {  //äntligen löst. förhindra att den renderar innan api
//     return <div>On my way!</div>;
//   }
//   const product = products.find(product => product.id === parseInt(id));
//   console.log('Antal bilder i arrayen:', product.images.length);
//   console.log('Bildarrayen:', product.images);


//     if (!product) {
//       return <div>Product not found</div>;
//     }
    
//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <img src={product.images[0]} alt={product.title} />
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//     </div>
//   );
// };

// export default ProductInfo;





// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductInfo = () => {
//   const { id } = useParams(); // Hämta produktens ID från URL:en
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://dummyjson.com/products/${id}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className='product-info'>
//       <h1>{product.title}</h1>
//       <img src={product.images[0]} alt={product.title} />
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       {/* Lägg till mer produktinformation här */}
//     </div>
//   );
// };

// export default ProductInfo;
