import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";

const Navbar: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const cartContext = useContext(CartContext);

  if (!themeContext || !cartContext) return null;

  const { darkMode, toggleDarkMode } = themeContext;
  const { cart } = cartContext;

  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopSmart</Link>
      <div className="navbar-right">
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
        </button>

        {/* Cart Icon with Quantity Badge */}
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={24} />
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </Link>

        {/* Sign In Button */}
        <Link to="/register" className="sign-up-btn">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
