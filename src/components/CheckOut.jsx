import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";

// Checkout component
const Checkout = () => {
  // Hooks
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  // Calculate total price of items in the cart
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return totalPrice.toFixed(2);
  };

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // You can implement your own logic here for handling the form submission
    console.log("Form data:", formData);

    // Clear form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
    });

    const submissionSuccessful = true;

    if (submissionSuccessful) {
      // Clear form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
      });

      // Clear the cart items after successful submission
      setCartItems([]);

      // Redirect to Thank You page
      navigate("/thankyou");
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Checkout</h2>
      <div className="checkout-container">
        <form onSubmit={handleSubmit}>
          {/* First Name */}
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
          {/* Last Name */}
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
          {/* Email */}
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
          {/* Address */}
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
          {/* City */}
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
          {/* Postal Code */}
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
          {/* Total Amount */}
          <label>Total Amount: ${calculateTotalPrice()}</label>
          {/* Place Order button */}
          <button type="submit" className="button">
            Place Order
          </button>

          <br />
          <br />
          {/* Return to Shopping Cart button */}
          <Link to="/ShoppingCart">
            <button className="button">Return to Shopping Cart</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Checkout;
