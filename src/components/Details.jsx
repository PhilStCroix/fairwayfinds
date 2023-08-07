// import React from "react";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Details = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `http:localhost:5000/products/${productId}`
//         );
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading..</div>;
//   }

//   return (
//     <div>
//       <img src={product.image} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>{product.details}</p>
//       <p>Price: ${product.price}</p>
//     </div>
//   );
// };
// export default Details;

// Details.js
// Details.js
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Products from "./Products";

// const Details = ({ products }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/products/${productId}`
//         );
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading..</div>;
//   }

//   // Find the product from the products array
//   const selectedProduct = products.find(
//     (prod) => prod.id === parseInt(productId)
//   );

//   return (
//     <div>
//       <h2>{selectedProduct.name}</h2>
//       <p>Price: ${selectedProduct.price}</p>
//       <img src={selectedProduct.image} alt={selectedProduct.name} />
//     </div>
//   );
// };

// export default Details;
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const Details = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/products/${productId}`
//         );
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading..</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>Price: ${product.price}</p>
//       <img src={product.image} alt={product.name} />
//     </div>
//   );
// };

// export default Details;

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const Details = ({ products }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/categories/${productId}`
//         );
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>Price: ${product.price}</p>
//       <p>{product.info}</p>
//     </div>
//   );
// };

// export default Details;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Details = ({ products }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Find the product with the matching productId from the products array
//     const foundProduct = products.find((item) => item.id === Number(productId));

//     if (foundProduct) {
//       setProduct(foundProduct);
//     } else {
//       const fetchProductDetails = async () => {
//         try {
//           const response = await fetch(
//             `http://localhost:5000/products/${productId}`);
//           const data = await response.json();
//           setProduct(data);
//           )
//         }
//       }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>Price: ${product.price}</p>
//       <p>{product.info}</p>
//     </div>
//   );
// };

// export default Details;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Details = ({ products }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Find the product with the matching productId from the products array
//     const foundProduct = products.find((item) => item.id === Number(productId));

//     if (foundProduct) {
//       setProduct(foundProduct);
//     } else {
//       // If the product is not found in the products array, fetch it from the server
//       const fetchProductDetails = async () => {
//         try {
//           const response = await fetch(
//             `http://localhost:5000/categories/${productId}`
//           );
//           const data = await response.json();
//           setProduct(data);
//         } catch (error) {
//           console.error("Error fetching product details:", error);
//         }
//       };

//       fetchProductDetails();
//     }
//   }, [productId, products]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>Price: ${product.price}</p>
//       <p>{product.info}</p>
//     </div>
//   );
// };

// export default Details;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Details = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/categories/${productId}`
//         );

//         if (!response.ok) {
//           throw new Error(`Failed to fetch product with ID ${productId}`);
//         }

//         const data = await response.json();
//         setProduct(data);
//         setError(null);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setError(error.message);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>Price: ${product.price}</p>
//       <p>{product.info}</p>
//     </div>
//   );
// };

// export default Details;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Details = ({ categories }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = () => {
//       for (const category of categories) {
//         const foundProduct = category.products.find(
//           (product) => product.id === Number(productId)
//         );
//         if (foundProduct) {
//           setProduct(foundProduct);
//           return; // Exit loop if product is found
//         }
//       }

//       // Product with the specified ID was not found
//       console.error(`Product with ID ${productId} not found.`);
//       setProduct(null);
//     };

//     fetchProduct();
//   }, [productId, categories]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>Price: ${product.price}</p>
//       <p>{product.info}</p>
//     </div>
//   );
// };

// export default Details;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = ({ categories }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the matching productId from the categories
    const foundProduct = categories
      .flatMap((category) => category.products)
      .find((item) => item.id === Number(productId));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error(`Product with ID ${productId} not found.`);
      setProduct(null);
    }
  }, [productId, categories]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>{product.info}</p>
    </div>
  );
};

export default Details;
