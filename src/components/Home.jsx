import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="Nav-item" id="home">
        <br />
        <h1>Your Ultimate Golf Equipment and Apparel Destination</h1>
        <img
          src="https://images.unsplash.com/photo-1500932334442-8761ee4810a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Fairway Finds"
          style={{
            maxWidth: "100%",
            height: "48vh",
            boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.4)",
            border: "3px solid #ccc",
            borderRadius: "4px",
            borderColor: "forestgreen",
          }} // Adjust styles as needed
        />
        <br />
      </div>
      <div className="Category">
        <Link to="./Products">
          <h3>Apparel</h3>
          <img
            src="https://images.unsplash.com/photo-1535132011086-b8818f016104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdvbGZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
            alt="apparel"
            style={{
              maxWidth: "100%",
              height: "20vh",
              boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.4)",
              border: "3px solid #ccc",
              borderRadius: "4px",
              borderColor: "forestgreen",
            }}
          />
        </Link>
        <Link to="./Products">
          <h3>Equipment</h3>
          <img
            src="https://images.unsplash.com/photo-1530028828-25e8270793c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="clubs"
            style={{
              maxWidth: "100%",
              height: "20vh",
              boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.4)",
              border: "3px solid #ccc",
              borderRadius: "4px",
              borderColor: "forestgreen",
            }}
          />
        </Link>
        <Link to="./Products">
          <h3>Accessories</h3>
          <img
            src="https://images.unsplash.com/photo-1656104561187-04a5a0815e5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="accessories"
            style={{
              maxWidth: "100%",
              height: "20vh",
              boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.4)",
              border: "3px solid #ccc",
              borderRadius: "4px",
              borderColor: "forestgreen",
            }}
          />
        </Link>
      </div>
    </>
  );
};

export default Home;
