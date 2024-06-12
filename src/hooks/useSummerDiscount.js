// // useSummerDiscount.js
// import { useState, useEffect } from 'react';

// const useSummerDiscount = (product) => {
//   const [discountedPrice, setDiscountedPrice] = useState(0);

//   useEffect(() => {
//     if (product.category === 'sunglasses') {
//       // Beräkna priset med rabatt för solglasögon (t.ex. 10% rabatt)
//       const discountPrice = product.price * 0.7; // 30% rabatt
//       setDiscountedPrice(discountPrice);
//     } else {
//       // Inga rabatter för andra produkter
//       setDiscountedPrice(product.price);
//     }
//   }, [product]);

//   return discountedPrice;
// };

// export default useSummerDiscount;
