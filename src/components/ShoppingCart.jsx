import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  // Access cartItems and removeFromCart function from the CartContext
  const { cartItems, removeFromCart } = useCart();

  // Calculate the total price of all items in the cart
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return totalPrice.toFixed(2);
  };

  return (
    <>
      {/* Display a heading for the shopping cart */}
      <h2 style={{ textAlign: "center" }}>In your Cart</h2>
      <div className="shopping-cart-container">
        <ul>
          {/* Iterate over each item in the cart and display its details */}
          {cartItems.map((item) => (
            <li key={item.id} style={{ listStyle: "none", padding: 0 }}>
              <div className="scproduct" style={{ textAlign: "center" }}>
                {/* Display the name of the item */}
                <h3 style={{ textAlign: "center" }}>{item.name}</h3>
                {/* Display the price of the item */}
                <p style={{ textAlign: "center" }}>Price: ${item.price}</p>
                {/* Display the quantity of the item */}
                <p style={{ textAlign: "center" }}>Quantity: {item.quantity}</p>
                {/* Button to remove the item from the cart */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="button"
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        <br />
      </div>
      {/* Buttons for proceeding to checkout and returning to products */}
      <div
        style={{ textAlign: "center", marginTop: "20px" }}
        className="proceed"
      >
        {/* Button to proceed to checkout */}
        <Link to="/CheckOut">
          <button className="button">Proceed to Checkout</button>
        </Link>
        <br />
        <br />
        {/* Button to return to products */}
        <Link to="/Products">
          <button className="button">Return to Products</button>
        </Link>
        <br />
        <br />
      </div>
    </>
  );
};

export default ShoppingCart;
