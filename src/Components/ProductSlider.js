import React from 'react';
import Slider from 'react-slick';
//slickslider hämtad från npm
const ProductSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000 
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index}>
            
          <img src={product.thumbnail} alt={product.title} className='w-full max-w-md h-auto object-center mx-auto' />
          <h3 className='text-center text-lg font-bold mb-2'>{product.title}</h3>
        </div>
         
      ))}
    </Slider>
  );
};

export default ProductSlider;
