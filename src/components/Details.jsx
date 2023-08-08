// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { useCart } from "./CartContext"; // Import useCart from your CartContext

// const Details = ({ categories }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const { addToCart } = useCart(); // Use the addToCart function from the CartContext
//   const [showAddedToCart, setShowAddedToCart] = useState(false);

//   useEffect(() => {
//     // Find the product with the matching productId from the categories
//     const foundProduct = categories
//       .flatMap((category) => category.products)
//       .find((item) => item.id === Number(productId));

//     if (foundProduct) {
//       setProduct(foundProduct);
//     } else {
//       console.error(`Product with ID ${productId} not found.`);
//       setProduct(null);
//     }
//   }, [productId, categories]);

//   const handleAddToCart = () => {
//     addToCart(product);
//     setShowAddedToCart(true);

//     setTimeout(() => {
//       setShowAddedToCart(false);
//     }, 2000);
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="product-details-container">
//         <div className="product-image">
//           <img src={product.image} alt={product.name} />
//         </div>
//         <div className="product-info">
//           <h2>{product.name}</h2>
//           <p>Price: ${product.price}</p>
//           <p>{product.info}</p>
//           <button
//             className="button"
//             onClick={handleAddToCart} // Use addToCart function from CartContext
//           >
//             Add to Cart
//           </button>
//           {showAddedToCart && (
//             <div className="added-to-cart-popup">
//           <p>Added to Cart</p>
//         </div>
//           )}
//           &nbsp;&nbsp;&nbsp;
//           <Link to="/Products" className="button">
//             Return to Products
//           </Link>
//           &nbsp;&nbsp;&nbsp;
//           <Link to="/CheckOut" className="button">
//             Go to Checkout
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Details;

// components/Details.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "./CartContext"; // Import useCart from your CartContext

const Details = ({ categories }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Use the addToCart function from the CartContext
  const [showAddedToCart, setShowAddedToCart] = useState(false); // State for pop-up

  useEffect(() => {
    // Find the product with the matching productId from the categories
    const foundProduct = categories
      .flatMap((category) => category.products)
      .find((item) => item.id === Number(productId));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error(`Product with ID ${productId} not found.`);
      // Optionally, handle this case as needed, e.g., show an error message
    }
  }, [productId, categories]);

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
            onClick={handleAddToCart} // Use handleAddToCart function
          >
            Add to Cart
          </button>
          &nbsp;&nbsp;&nbsp;
          <Link to="/Products" className="button">
            Return to Products
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/ShoppingCart" className="button">
            Go To Shopping Cart
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
