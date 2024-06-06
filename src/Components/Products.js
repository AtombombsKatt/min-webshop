import React, { useContext, useEffect, useState } from 'react';
import { FetchAPIContext } from '../Contexter/FetchAPIContext';
import { Link } from 'react-router-dom';
const Products = () => {
  const { products } = useContext(FetchAPIContext);

  useEffect(() => {
    console.log("Products updated:", products);
  }, [products]);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
            <h2>{product.title}</h2>
            
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;



// const Products = ({ selectedCategory, searchWord }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         let url; 
//         if (searchWord) { //tilldela rätt url
//           url = `https://dummyjson.com/products/search?q=${searchWord}`;
//         } else if (selectedCategory) {
//           url = `https://dummyjson.com/products/category/${selectedCategory}`;
//         } else {
//           url = 'https://dummyjson.com/products';
//         }
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setProducts(data.products);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [selectedCategory, searchWord]);

//   if (loading) {
//     return <div>Loading products...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//   const heading = searchWord
//   ? products.length > 0
//     ? `Search results for "${searchWord}"`
//     : `No results found for "${searchWord}"`
//   : 'All Products';

// return (
//   <div className="products">
//     <h1>{heading}</h1>
//     <ul>
//       {products.map((product) => (
//         <li key={product.id} className="product">
//           <Link to={`/products/${product.id}`}>
//             <h2>{product.title}</h2>
//             <img src={product.images[0]} alt={product.title} />
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// };


// export default Products;





//   let displayTitle;
//   if (searchWord) {
//     displayTitle = `Search results for "${searchWord}"`;
//   } else if (selectedCategory) {
//     displayTitle = `Products in ${selectedCategory}`;
//   } else {
//     displayTitle = 'All Products';
//   }

//   return (
//     <div className="products">
//       <h1>{displayTitle}</h1>
//       {products.length === 0 ? (
//         <div>No products found.</div>
//       ) : (
//         <ul>
//           {products.map((product) => (
//             <li key={product.id} className="product">
//               <Link to={`/products/${product.id}`}>
//               <h2>{product.title}</h2>
//               <img src={product.images[0]} alt={product.title} />
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//             </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

