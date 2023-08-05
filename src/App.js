import './App.css';
import Header from './components/Header';
import Navbar from './shared/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Details from './components/Details';
import ShoppingCart from './components/ShoppingCart';
import CheckOut from './components/CheckOut';
import Footer from './shared/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        {<Route path="/" element={<Home />} />}
        {<Route path="/products" element={<Products />} />}
        {<Route path="/details" element={<Details />} />}
        {<Route path="/ShoppingCart" element={<ShoppingCart />} />}
        {<Route path="/CheckOut" element={<CheckOut />} />}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
