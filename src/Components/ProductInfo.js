import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FetchAPIContext } from '../Contexter/FetchAPIContext';

const ProductInfo = () => {
  const { id } = useParams();
  const { products } = useContext(FetchAPIContext);
  
  // Kontrollera om produkterna finns och är laddade
  if (!products || products.length === 0) {  //äntligen löst. förhindra att den renderar innan api
    return <div>On my way!</div>;
  }
  const product = products.find(product => product.id === parseInt(id));
  console.log("Antal bilder i arrayen:", product.images.length);
  console.log("Bildarrayen:", product.images);


    if (!product) {
      return <div>Product not found</div>;
    }
    
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductInfo;





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
//     <div className="product-info">
//       <h1>{product.title}</h1>
//       <img src={product.images[0]} alt={product.title} />
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       {/* Lägg till mer produktinformation här */}
//     </div>
//   );
// };

// export default ProductInfo;
