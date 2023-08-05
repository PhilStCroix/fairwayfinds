// Details.js

import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ products }) => {
  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.details}</p>
      <p>{product.price}</p>
      <p>{product.info}</p>
    </div>
  );
};

export default Details;
