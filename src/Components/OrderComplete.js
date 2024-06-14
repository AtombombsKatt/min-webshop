import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useCart } from '../Contexter/CartContext';
import { Link } from 'react-router-dom';
import LogoText from './LogoText';
const OrderComplete = ({ trigger, onClose }) => {
  const { cart } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    //popup installerad från npm
    <Popup open={true} modal closeOnDocumentClick={false}>
      {close => (
        <div className='bg-white p-6 rounded shadow-lg max-w-md mx-auto my-8'>
          <h2 className='text-2xl font-bold mb-4'>Order Placed Successfully!</h2>
          <p className='mb-4'>Thank you for your purchase. Here is your order summary:</p>
          <p>A full receit and delivery information will be sent to your Email</p>
          <ul className='mb-4'>
            {cart.map((product, index) => (
              <li key={index} className='flex justify-between items-center border-b py-2'>
                <div>
                  <p className='font-semibold'>{product.title}</p>
                  <p className='text-sm'>Quantity: {product.quantity}</p>
                </div>
                <p>${(product.price * product.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className='font-bold text-lg mb-4'>Total: ${calculateTotalPrice()}</div>
          <p className='text-green-500 font-semibold mb-4'>Payment Successful!</p>
          {/* loggan i kvitto */}
          <LogoText />
          {/* länk tillbaka till home '/' */}
          <Link to='/'>
            <button
              className='w-full py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600'
              onClick={() => {
                onClose();
              }}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </Popup>
  );
};

export default OrderComplete;
