import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext"; // Import useCart from your CartContext

const Details = ({ categories }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Use the addToCart function from the CartContext

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
    <>
      <div className="product-details-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.info}</p>
          <button
            className="button"
            onClick={() => addToCart(product)} // Use addToCart function from CartContext
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
