import React from 'react';
import { Link } from 'react-router-dom';
import useFetchCategories from '../hooks/useFetchCategories';
const SidebarCategories = ({ onSelectCategory }) => {
  const { categories, loading, error } = useFetchCategories();
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
//rendera kategori listan med map
  return (
    <div>
      {categories.map((category) => (
        <div className='category-link hover:bg-gray-300 bg-blue-500  px-3 py-2 rounded-md ml-2 text-lg font-bold mb-2 border border-gray-300 'key={category.slug} onClick={() => onSelectCategory(category)}>
          {/* länk till /products/category prop för product.js   */}
          <Link to={`/products/category/${category}`}>{category.slug}</Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarCategories;

