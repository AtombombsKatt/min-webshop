import { useState, useEffect } from 'react';
import relevantCategorySlugs from '../Components/RelevantCategorySlugs'; //mina kategorier
const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        console.log('Fetched categories:', data);

        
      
        // Filtrera endast de relevanta kategorierna
        const relevantCategories = data.filter(category => //filtrera datan efter mina kategorier
          relevantCategorySlugs.includes(category.slug)
        );
        console.log('Relevant categories:', relevantCategories);

        setCategories(relevantCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useFetchCategories;



// import { useState, useEffect } from 'react';

// const useFetchCategories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products/categories');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return { categories, loading, error };
// };

// export default useFetchCategories;
