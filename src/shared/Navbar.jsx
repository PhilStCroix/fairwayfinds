import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="Navbar">
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
        {location.pathname !== "/" && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {location.pathname !== "/products" && (
          <li>
            <Link to="/products">Products</Link>
          </li>
        )}
        {location.pathname !== "/ShoppingCart" && (
          <li>
            <Link to="/ShoppingCart">Shopping Cart</Link>
          </li>
        )}
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
