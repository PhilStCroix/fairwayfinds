import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, setCartItems } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return totalPrice.toFixed(2);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement your own logic here for handling the form submission
    console.log("Form data:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
    });
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Checkout</h2>
      <div className="checkout-container">
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Postal Code:
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>Total Amount: ${calculateTotalPrice()}</label>
          <button type="submit" className="button" style={{ color: "white" }}>
            Place Order
          </button>
          <br />
          <br />
          <Link to="/ShoppingCart" className="button">
            Return Shopping Cart
          </Link>
        </form>
      </div>
    </>
  );
};

export default Checkout;
