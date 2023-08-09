import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // Get the current location
  const location = useLocation();

  return (
    <nav className="Navbar">
      {/* Create a navigation list */}
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          padding: "0",
          margin: "0",
          listStyle: "none",
        }}
      >
        {/* Render the "Home" link if the current location is not "/" */}
        {location.pathname !== "/" && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {/* Render the "Products" link if the current location is not "/products" */}
        {location.pathname !== "/products" && (
          <li>
            <Link to="/products">Products</Link>
          </li>
        )}
        {/* Render the "Shopping Cart" link if the current location is not "/ShoppingCart" */}
        {location.pathname !== "/ShoppingCart" && (
          <li>
            <Link to="/ShoppingCart">Shopping Cart</Link>
          </li>
        )}
        {/* Render the "Check Out" link if the current location is not "/CheckOut" */}
        {location.pathname !== "/CheckOut" && (
          <li>
            <Link to="/CheckOut">Check Out</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
