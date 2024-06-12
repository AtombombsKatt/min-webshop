import React from 'react';
import useStarRating from '../hooks/useStarRating';

const StarRating = ({ rating }) => {
  const stars = useStarRating(rating);

  //loopa igenom stjärnorna och rendera ikonerna
  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating;
