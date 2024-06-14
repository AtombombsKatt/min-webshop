import React, { useContext } from 'react';
import { useCart } from '../Contexter/CartContext';
//hämta cart context
const TotalAmount = () => {
  const { cart } = useCart();

  const totalAmount = cart.reduce((total, product) => {
    let price = product.price;

    // Om produkten är i kategorin "sunglasses", tillämpa rabatten (t.ex. 30%)
    if (product.category === 'sunglasses') {
      price *= 0.7; // 30% rabatt
    }

    return total + (price * product.quantity);
  }, 0);
  return (
    <div className="mt-4">
      <h3 className='text-lg font-bold mb-2'>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default TotalAmount;
