import React from 'react';
import { Link } from 'react-router-dom';
import useFetchCategories from '../hooks/FetchCategories';
import { useTheme } from '../Contexter/DarkmodeContext';
const SidebarCategories = ({ onSelectCategory }) => {
  const { categories, loading, error } = useFetchCategories();
  
  // console.log('Categories in SidebarCategories:', categories); vrf körs den två gånger?

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {categories.map((category) => (
        <div className='category-link hover:bg-gray-300 bg-blue-500  px-3 py-2 rounded-md ml-2 text-lg font-bold mb-2 border border-gray-300 'key={category.slug} onClick={() => onSelectCategory(category)}>
          <Link to={`/products/category/${category}`}>{category.slug}</Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarCategories;



// import React, { useState, useEffect, useContext } from 'react';
// import { FetchAPIContext } from '../Contexter/FetchAPIContext';
// import { useNavigate } from 'react-router-dom';

// const SidebarCategories = () => {
//   const navigate = useNavigate(); // Importera useNavigate
//   const { categories, fetchProductsByCategory, setSelectedCategory } = useContext(FetchAPIContext);

//   const handleClickCategory = (category) => {
//     setSelectedCategory(category);
//     fetchProductsByCategory(category);
//     navigate(`/products/category/${category}`);
//   };


//   return (
//     <div>
//       <h3>Categories</h3>
//       <ul>
//         {categories && categories.map((category) => (
//           <li key={category.slug} onClick={() => handleClickCategory(category.slug)}>
//             {category.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SidebarCategories;














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
