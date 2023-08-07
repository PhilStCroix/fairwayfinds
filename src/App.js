// import './App.css';
// import Header from './components/Header';
// import Navbar from './shared/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import Details from './components/Details';
// import ShoppingCart from './components/ShoppingCart';
// import CheckOut from './components/CheckOut';
// import Footer from './shared/Footer';
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from 'react';

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/products") // Replace with the URL of your JSON server
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);
//   return (
//     <Router>
//       <Header />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/details/:productId" element={<Details />} /> {/* Add :productId parameter */}
//         <Route path="/ShoppingCart" element={<ShoppingCart />} />
//         <Route path="/CheckOut" element={<CheckOut />} />
//         <Route path="/details/:product.id" element={<Details/>} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import './App.css';
import Header from './components/Header';
import Navbar from './shared/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Details from './components/Details';
import ShoppingCart from './components/ShoppingCart';
import CheckOut from './components/CheckOut';
import Footer from './shared/Footer';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

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
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products categories={categories} />} />
        <Route path="/details/:productId" element={<Details categories={categories} />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/CheckOut" element={<CheckOut />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;