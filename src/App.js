import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Details from './components/Details';
import ShoppingCart from './components/ShoppingCart';
import CheckOut from './components/CheckOut';
import Footer from './shared/Footer';
import ThankYou from './components/ThankYou';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { CartProvider } from "./components/CartContext";


function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/categories") // Replace with the URL of your JSON server
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <CartProvider>
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products categories={categories} />} />
        <Route path="/details/:productId" element={<Details categories={categories} />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/ThankYou" element={<ThankYou />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;