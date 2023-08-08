import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return totalPrice.toFixed(2);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>In your Cart</h2>
      <div className="shopping-cart-container">
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ listStyle: "none", padding: 0 }}>
              <div className="scproduct" style={{ textAlign: "center" }}>
                <h3 style={{ textAlign: "center" }}>{item.name}</h3>
                <p style={{ textAlign: "center" }}>Price: ${item.price}</p>
                <p style={{ textAlign: "center" }}>Quantity: {item.quantity}</p>
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
      <div
        style={{ textAlign: "center", marginTop: "20px" }}
        className="proceed"
      >
        <Link to="/CheckOut" className="button">
          Proceed to Checkout
        </Link>
        <br />
        <br />
        <Link to="/Products" className="button">
          Return to Products
        </Link>
        <br />
        <br />
      </div>
      {/* <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div> */}
    </>
  );
};

export default ShoppingCart;
