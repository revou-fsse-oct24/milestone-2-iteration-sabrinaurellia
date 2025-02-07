import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <ThemeProvider>
      <CartProvider>
        <Navbar />
        <div className="container">
          {/* Pass onSelectCategory to Sidebar */}
          <Sidebar 
  selectedCategory={selectedCategory} 
  onSelectCategory={setSelectedCategory} 
/>

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Pass selectedCategory to ProductList */}
              <Route path="/products" element={<ProductList selectedCategory={selectedCategory} />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
