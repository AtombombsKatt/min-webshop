import React, { useContext } from 'react';
import { CartContext } from '../Contexter/CartContext';
import { Link } from 'react-router-dom';
import TotalAmount from './TotalAmmount';
import AdjustCartProduct from './AdjustCartProduct';
import { useCart } from '../Contexter/CartContext';
const Cart = () => {
  const {cart} = useCart();
 

  return (
  <div className='mt-16 mb-16'>
    <h2 className='text-xl font-bold'>Items in Shopping Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <ul>
        {cart.map((product, index) => (
          <li key={index} className='flex items-center border-b pb-4'>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h3 className='text-lg font-bold mb-2'>{product.title}</h3>

              {/* om produktens kategori är solbrillor, stryk pris och lista rabatt pris under*/}
              <p className={`text-base font-bold mb-2 ${product.category === 'sunglasses' ? 'line-through' : 'no-underline'}`}>
                ${product.price}
              </p>
              {product.category === 'sunglasses' && (
                <p className='text-base font-bold mb-2 text-red-700'>
                  ${(product.price * 0.7).toFixed(2)}
                </p>
              )}
              
              {/* skicka värden för att öka o minska antal */}
              <AdjustCartProduct
                productId={product.id}
                quantity={product.quantity}
              />
            </div>
          </li>
        ))}
      </ul>
    )}
    {/* hämta totalamount för att rendera totala suman */}
    <TotalAmount />
    {cart.length > 0 && ( // Visa inte knappen om kundvagn är tom
      <Link to="/order">
        <button>Proceed to Checkout</button>
      </Link>
    )}
  </div>
  );
};

export default Cart;

