
import React, { useState, useEffect, useContext } from 'react';
import { FetchAPIContext } from '../Contexter/FetchAPIContext';
import { useNavigate } from 'react-router-dom';

const SidebarCategories = () => {
  const navigate = useNavigate(); // Importera useNavigate
  const { categories, fetchProductsByCategory, setSelectedCategory } = useContext(FetchAPIContext);

  const handleClickCategory = (category) => {
    setSelectedCategory(category);
    fetchProductsByCategory(category);
    navigate(`/products/category/${category}`);
  };

  // Ladda in kategorier vid montering
  // useEffect(() => {
  //   fetchCategories();
  // }, [fetchCategories]);

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories && categories.map((category) => (
          <li key={category.slug} onClick={() => handleClickCategory(category.slug)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategories;














// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/SidebarCategories.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// const SidebarCategories = ({ onSelectCategory }) => {
//   const navigate = useNavigate(); // Använd useNavigate för att få navigationsfunktionen
//   const [categories, setCategories] = useState([]); //state som en tom array
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products/category-list');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setCategories(data); //sätt kategorier
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchCategories();
//   }, []);

//   const handleClickCategory = (category) => {
//     onSelectCategory(category);
//     navigate(`/products/${category}`); //gå till /products/vald kategori
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h3>Categories</h3>
//       <ul>
//         {categories.map((category) => (
//           <li key={category} onClick={() => handleClickCategory(category)}>
//             {category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SidebarCategories;
