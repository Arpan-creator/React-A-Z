// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`https://dbiozZek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
//       const data = await response.json();
//       setProduct(data);
//       setLoading(false);
//     } catch (error) {
//       setError('Failed to fetch product details');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProductDetails();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       {product ? (
//         <>
//           <h1>{product.name}</h1>
//           <p>Price: {product.price}</p>
//           <p>Description: {product.description}</p>
//         </>
//       ) : (
//         <p>Product not found</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
