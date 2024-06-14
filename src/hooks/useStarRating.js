import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
//hämta star icons
const useStarRating = (rating) => {
  const stars = []; 
  const roundedRating = Math.round(rating); // Avrunda rating

//loopa igenom så länge som det är mindre än 5, om i är mindre än ratingen. Lägg in fylld stjärna
//om i är större lägg in tom stjärna
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(<FontAwesomeIcon className="text-yellow-500"  icon={solidStar} key={i} />);
    } else {
      stars.push(<FontAwesomeIcon className="text-yellow-500"  icon={regularStar} key={i} />);
    }
  }

  return stars;
};

export default useStarRating;
