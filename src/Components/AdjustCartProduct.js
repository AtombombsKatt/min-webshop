import React from 'react';
import { useCart } from '../Contexter/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const AdjustCartProduct = ({ productId, quantity }) => {
  const {  removeFromCart, updateProductQuantity } = useCart();

  //öka antal med 1
  const increaseQuantity = () => {
    updateProductQuantity(productId, quantity + 1);
  };

//om det bara finns 1, kör remove. Annars minska med 1
  const decreaseQuantity = () => {
    if (quantity === 1) {
      removeFromCart(productId); 
    } else {
      updateProductQuantity(productId, quantity - 1);
    }
  };

//visa - + knappar, onclick kör funktionerna
  return (
    <div className='flex items-center'>
      <button onClick={decreaseQuantity} className='p-2 bg-gray-500 hover:bg-gray-200 rounded-l'>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span className='mx-2'>{quantity}</span>
      <button onClick={increaseQuantity} className='p-2 bg-gray-500 hover:bg-gray-300  rounded-r'>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AdjustCartProduct;
