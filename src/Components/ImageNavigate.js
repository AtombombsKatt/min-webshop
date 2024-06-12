// ImageNavigate.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageNavigate = ({ images, currentImageIndex, setCurrentImageIndex }) => {
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  return (
    <div className="relative">
      <img src={images[currentImageIndex]} alt={`Product ${currentImageIndex}`} className="w-full md:w-96 h-auto object-cover" />
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white"
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ height: '1em' }} />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white"
      >
        <FontAwesomeIcon icon={faChevronRight} style={{ height: '1em' }} />
      </button>
    </div>
  );
};

export default ImageNavigate;
