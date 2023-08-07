// import React, { useEffect, useState } from "react";
// // import Products from "./Products";
// import { Link } from "react-router-dom";

// const ProductsPage = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/categories");
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="Nav-item" id="products">
//       <h1>All Our Products in one Place</h1>

//       {categories.map((category) => (
//         <div key={category.id} className="category-container">
//           <h2 className="category-name">{category.name}</h2>
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Name</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {category.products.map((product) => (
//                   <tr key={product.id}>
//                     <td>
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         style={{ width: "50px" }}
//                       />
//                     </td>
//                     <td>
//                       <Link
//                         to={{
//                           pathname: `/details/${product.id}`,
//                           state: { product },
//                         }}
//                       >
//                         {product.name}
//                       </Link>
//                     </td>
//                     <td>{product.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductsPage;

// // Products.js
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/categories");
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {categories.map((category) => (
//         <div key={category.id}>
//           <h2>{category.name}</h2>
//           <ul>
//             {category.products.map((product) => (
//               <li key={product.id}>
//                 <Link to={`/details/${product.id}`}>
//                   {product.name} - ${product.price}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;

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
//     (prod) => prod.id === Number(productId)
//   );

//   return (
//     <div>
//       <h2>{selectedProduct.name}</h2>
//       <p>Price: ${selectedProduct.price}</p>
//       <img src={selectedProduct.image} alt={selectedProduct.name} />
//     </div>
//   );
// };

// export default Products;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Nav-item" id="products">
      <h1>All Our Products in one Place</h1>

      {categories.map((category) => (
        <div key={category.id} className="category-container">
          <h2 className="category-name">{category.name}</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {category.products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>
                      <Link to={`/details/${product.id}`}>{product.name}</Link>
                    </td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
