import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "./CartContext"; // Import useCart from your CartContext

// Details component
const Details = ({ categories }) => {
  // Get the productId from the URL params
  const { productId } = useParams();

  // State variables
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Use the addToCart function from the CartContext
  const [showAddedToCart, setShowAddedToCart] = useState(false); // State for pop-up

  // Fetch the product details when the component mounts or the productId changes
  useEffect(() => {
    // Find the product with the matching productId from the categories
    const foundProduct = categories
      .flatMap((category) => category.products)
      .find((item) => item.id === Number(productId));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error(`Product with ID  not found.`);
      // Optionally, handle this case as needed, e.g., show an error message
    }
  }, [productId, categories]);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product);
    setShowAddedToCart(true);

    setTimeout(() => {
      setShowAddedToCart(false);
    }, 2000);
  };

  // Check if the product is not yet loaded
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Product details container */}
      <div className="product-details-container">
        {/* Product image */}
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        {/* Product info */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.info}</p>
          {/* Add to Cart button */}
          <button
            className="button"
            onClick={handleAddToCart} // Use handleAddToCart function
          >
            Add to Cart
          </button>
          &nbsp;&nbsp;&nbsp;
          {/* Return to Products button */}
          <Link to="/Products">
            <button className="button">Return to Products</button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          {/* Go to Shopping Cart button */}
          <Link to="/ShoppingCart">
            <button className="button">Go To Shopping Cart</button>
          </Link>
          {/* Display the pop-up when showAddedToCart is true */}
          {showAddedToCart && (
            <div className="added-to-cart-popup">
              <p>Item added to cart!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
