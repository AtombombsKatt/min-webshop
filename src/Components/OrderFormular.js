import React, { useState } from 'react';
import { CartContext } from '../Contexter/CartContext';
import OrderComplete from './OrderComplete';
import { useContext } from 'react';

const OrderFormular = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    postalCode: '',
    city: '',
    emailPromotion: false,
  });

  
  const [formErrors, setFormErrors] = useState({});
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsOrderPlaced(true); // Öppna popup-fönstret för kvittot om formuläret är giltigt
    } else {
      // Visa felmeddelanden om formuläret inte är giltigt
      console.log('Form validation failed:', formErrors);
    }
  };

  const validateForm = () => {
    // Implementera valideringslogik här och uppdatera formErrors-variabeln
    const errors = {};
    // Exempel på validering: Kontrollera om förnamn och efternamn är ifyllda
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }
    // Fortsätt med andra valideringsregler för andra fält

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  return (
    <div>
    <form onSubmit={handleSubmit} className='flex flex-col items-center p-4'>
  <div className="flex flex-col sm:flex-row p-4 items-center"> {/* Använd flexbox för att gruppera varje etikett och inputfält par */}
    <label className='p-4' style={{minWidth: '150px'}}> {/* Använd en minimibredd för etiketten */}
      First Name:
    </label>
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      placeholder={formErrors.firstName ? formErrors.firstName : 'First Name'}
      className="w-full sm:w-2/3 h-10 p-2 border rounded"
    />
  </div>
  <div className="flex flex-col sm:flex-row p-4 items-center"> {/* Upprepa samma struktur för varje etikett och inputfält par */}
    <label className='p-4' style={{minWidth: '150px'}}>
      Last Name:
    </label>
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      className="w-full sm:w-2/3 h-10 p-2 border rounded"
    />
  </div>
  <div className="flex flex-col sm:flex-row p-4 items-center"> {/* Upprepa för resten av inputfälten */}
    <label className='p-4' style={{minWidth: '150px'}}>
      Phone Number:
    </label>
    <input
      type="text"
      placeholder="+46" 
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      className="w-full sm:w-2/3 h-10 p-2 border rounded"
     
    />
  </div>
  <div className="flex flex-col sm:flex-row p-4 items-center">
    <label className='p-4' style={{minWidth: '150px'}}>
      Email:
    </label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full sm:w-2/3 h-10 p-2 border rounded"
    />
  </div>
  <div className="flex flex-col sm:flex-row p-4 items-center">
    <label className='p-4' style={{minWidth: '150px'}}>
      Postal Code:
    </label>
    <input
      type="text"
      name="postalCode"
      value={formData.postalCode}
      onChange={handleChange}
      className="w-full sm:w-2/3 h-10 p-2 border rounded"
    />
  </div>
  <div className="flex flex-col sm:flex-row p-4 items-center">
    <label className='p-4' style={{minWidth: '150px'}}>
      City:
    </label>
    <input
      type="text"
      name="city"
      value={formData.city}
      onChange={handleChange}
      className="w-full sm:w-2/3 h-10 p-2 border rounded"
    />
  </div>
  <div className="flex flex-col sm:flex-row items-center">
    
    <input
      type="checkbox"
      name="emailPromotion"
      checked={formData.emailPromotion} // Använd checked-attributet för checkboxen
      onChange={handleChange}
    />
    <label className='p-4' style={{minWidth: '150px'}}>
      I would like to receive emails about special offers and promotions
    </label>
  </div>
  <button type="submit">Place Order</button>
  {/* {isOrderPlaced && (
        <OrderComplete
          trigger={<button>Show Order Complete Popup</button>}
          cart={cart}
        />
      )} */}
</form>
{isOrderPlaced && (
        <OrderComplete onClose={() => setIsOrderPlaced(false)} />
      )}
</div>

  );
};

export default OrderFormular;
