import React, { useContext, useEffect } from 'react';
import OrderFormular from '../Components/OrderFormular';
import TotalAmount from '../Components/TotalAmmount';
import { useCart } from '../Contexter/CartContext';
const Order = () => {
  const { cart } = useCart();

  return (
    <div className='flex flex-row items-center justify-center mt-6  shadow-md'>
      {/* om kundvagnen e tom  */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <h2 className='font-bold text-xl'>Order Summary</h2>
          <ul>
             {/* gå igenom och visa products. rendera bild,titel,pris */}
            {cart.map((product, index) => (
              <li key={index} className='flex items-center mb-4'>
                <img src={product.thumbnail} alt={product.title} className='w-44 h-44 object-cover mr-4' />
                <div>
                <h3 className='font-bold text-lg'>{product.title}</h3> 
                {/* visa rabatt 30% om kategori är sunglasses */}
                <p className={`font-bold mb-2 ${product.category === 'sunglasses' ? 'line-through' : 'no-underline'}`}>
                  ${product.price}
                </p>
                {product.category === 'sunglasses' && (
                  <p className=' font-bold mb-2 text-red-700'>
                    ${(product.price * 0.7).toFixed(2)}
                  </p>
                )}
                  <p className='font-bold'> Quantity: {product.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* visa totalsumma */}
          <TotalAmount />
        </div>
        
      )}
      <div>
        <h1 className='text-2xl font-bold mb-4'>Place Your Order</h1>
        {/* hämta formuläret för att lägga till order */}
        <OrderFormular />
      </div>
    </div>
  );
};

export default Order;
    
      