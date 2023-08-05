// ProductList.js

import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Link to={`/details/${product.id}`} key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
