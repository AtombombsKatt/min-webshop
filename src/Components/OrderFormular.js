import React, { useState } from 'react';
import OrderComplete from './OrderComplete';



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
      setIsOrderPlaced(true); // öppna popup för kvitto om formuläret är giltigt
    } else {
      // Visa fel om formuläret inte är giltigt
      console.log('Form validation failed:', formErrors);
    }
  };

  const validateForm = () => {
    
    const errors = {};
    // Kolla om förnamn och efternamn är ifyllda
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }
    

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  return (
    <div>
    <form onSubmit={handleSubmit} className='flex flex-col items-center p-4'>
  <div className='flex flex-col sm:flex-row p-4 items-center'> 
    <label className='p-4' style={{minWidth: '150px'}}> 
      First Name:
    </label>
    <input
      type='text'
      name='firstName'
      value={formData.firstName}
      onChange={handleChange}
      placeholder={formErrors.firstName ? formErrors.firstName : 'First Name'}
      className='w-full sm:w-2/3 h-10 p-2 border rounded'
    />
  </div>
  <div className='flex flex-col sm:flex-row p-4 items-center'> {/* Upprepa samma struktur för varje etikett och inputfält par */}
    <label className='p-4' style={{minWidth: '150px'}}>
      Last Name:
    </label>
    <input
      type='text'
      name='lastName'
      value={formData.lastName}
      onChange={handleChange}
      className='w-full sm:w-2/3 h-10 p-2 border rounded'
      placeholder={formErrors.lastName ? formErrors.lastName : 'Last name'}
    />
  </div>
  <div className='flex flex-col sm:flex-row p-4 items-center'> {/* Upprepa för resten av inputfälten */}
    <label className='p-4' style={{minWidth: '150px'}}>
      Phone Number:
    </label>
    <input
      type='text'
      name='phoneNumber'
      value={formData.phoneNumber}
      onChange={handleChange}
      className='w-full sm:w-2/3 h-10 p-2 border rounded'
      placeholder='+46 xxx xx xx'
     
    />
  </div>
  <div className='flex flex-col sm:flex-row p-4 items-center'>
    <label className='p-4' style={{minWidth: '150px'}}>
      Email:
    </label>
    <input
      type='email'
      name='email'
      value={formData.email}
      onChange={handleChange}
      className='w-full sm:w-2/3 h-10 p-2 border rounded'
      placeholder='Email @ '
    />
  </div>
  <div className='flex flex-col sm:flex-row p-4 items-center'>
    <label className='p-4' style={{minWidth: '150px'}}>
      Postal Code:
    </label>
    <input
      type='text'
      name='postalCode'
      value={formData.postalCode}
      onChange={handleChange}
      className='w-full sm:w-2/3 h-10 p-2 border rounded'
      placeholder='83456'
    />
  </div>
  <div className='flex flex-col sm:flex-row p-4 items-center'>
    <label className='p-4' style={{minWidth: '150px'}}>
      City:
    </label>
    <input
      type='text'
      name='city'
      value={formData.city}
      onChange={handleChange}
      className='w-full sm:w-2/3 h-10 p-2 border rounded'
      placeholder='Stockholm'
    />
  </div>
  <div className='flex flex-col sm:flex-row items-center'>
    {/* checkbox */}
    <input
      type='checkbox'
      name='emailPromotion'
      checked={formData.emailPromotion} 
      onChange={handleChange}
    />
    <label className='p-4' style={{minWidth: '150px'}}>
      I would like to receive emails about special offers and promotions
    </label>
  </div>
  <button type='submit'>Place Order</button>

</form>

{isOrderPlaced && (
        <OrderComplete onClose={() => setIsOrderPlaced(false)} />
      )}
</div>

  );
};

export default OrderFormular;
