import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div>
      {/* Render each product */}
      {products.map((product) => (
        // Link to the product details page
        <Link to={`/details/${product.id}`} key={product.id}>
          {/* Display the product image */}
          <img src={product.image} alt={product.name} />
          {/* Display the product name */}
          <p>{product.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
