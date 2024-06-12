// import React, { useState } from 'react';



// const OrderForm: React.FC = () => {
//     interface FormData {
//         firstName: string;
//         lastName: string;
//         phoneNumber: string;
//         email: string;
//         postalCode: string;
//         city: string;
//         emailPromotion: boolean;
//       }
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     postalCode: '',
//     city: '',
//     emailPromotion: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     const newValue = type === 'checkbox' ? checked : value;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: newValue
//     }));
//   };
  
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Skicka formulärdata till backend eller hantera det på annat sätt
//     console.log('Form Data:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Phone Number:
//         <input
//           type="text"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Postal Code:
//         <input
//           type="text"
//           name="postalCode"
//           value={formData.postalCode}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           type="text"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Receive Promotions:
//         <input
//           type="checkbox"
//           name="emailPromotion"
//           checked={formData.emailPromotion} // Använd checked-attributet för checkboxen
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Place Order</button>
//     </form>
//   );
// };

// export default OrderForm;
