// import React, { createContext, useState, useEffect } from 'react';




// export const FetchAPIContext = createContext();

// export const FetchAPIProvider = ({ children }) => {
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [searchWord, setSearchWord] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchCategories = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://dummyjson.com/products/categories');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setCategories(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchProductsByCategory = async (category) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://dummyjson.com/products/category/${category}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setProducts(data.products);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const searchProducts = async (searchWord) => {
//     setLoading(true);
//     console.log("searchProducts called with:", searchWord);
//     try {
//       const response = await fetch(`https://dummyjson.com/products/search?q=${searchWord}`);
//       console.log("Response status:", response.status);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log("Fetched search results:", data.products);
//       setProducts(data.products);
//     } catch (error) {
//       console.error("Error fetching search results:", error.message);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   return (
//     <FetchAPIContext.Provider
//       value={{
//         categories,
//         products,
//         selectedCategory,
//         searchWord,
//         setSelectedCategory,
//         setSearchWord,
//         fetchProductsByCategory,
//         searchProducts,
//         loading,
//         error,
//       }}
//     >
//       {children}
//     </FetchAPIContext.Provider>
//   );
// };
