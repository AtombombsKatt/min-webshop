import React from 'react';
import useFetchProductsFromCategory from '../hooks/useFetchProductsFromCategory';
import ProductSlider from '../Components/ProductSlider';
import { Link } from 'react-router-dom';

const Home = () => {
  const category = 'sunglasses';
  const { products, loading, error } = useFetchProductsFromCategory(category);
 
  

    //kontrollera att api anrop gjorts innan renderingen så /home inte crashar
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!products || products.length === 0) { 
      return <div>Sorry could not get content</div>;
    }
  return (
    <div className='flex flex-col items-center py-4'>
      <div className='flex flex-col items-center my-8'>
        <h1 className='logoText text-6xl font-bold text-center'>Hippo</h1>
        <h1 className='logoText text-6xl font-bold text-center'>Days</h1>
      </div>
      <Link to='/products/category/sunglasses'>
        <div className='mt-8'>
          <h2 className='text-4xl font-bold'>Summer is here!</h2>
          <h2 className='text-4xl font-bold pl-4'>30% off on all sunglasses!!</h2>
        </div>
      </Link>
      <Link to='/products/category/sunglasses'>
        <div className='max-w-3xl'>
          <ProductSlider products={products} />
        </div>
      </Link>
    </div>
  );
};

export default Home;
  
     
      
     
      
        
