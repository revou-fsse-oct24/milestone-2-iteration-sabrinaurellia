import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cartContext = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  const addToCart = cartContext?.addToCart || (() => {});

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {/* Wishlist Heart Icon (Top Right Corner) */}
        <FaHeart
          className="wishlist-icon"
          color={liked ? "red" : "black"}
          onClick={() => setLiked(!liked)}
        />

        {/* ✅ Clickable Image Redirects to Product Detail Page */}
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images?.[0] || "https://via.placeholder.com/150"}
            alt={product.title}
            className="product-image"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150")}
          />
        </Link>
      </div>

      {/* ✅ Product Title - Clickable, No Underline */}
      <Link to={`/products/${product.id}`} className="product-title">
        {product.title}
      </Link>

      {/* ✅ Product Price - No Underline */}
      <p className="product-price">${product.price}</p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`add-to-cart-btn ${added ? "added" : ""}`}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
};


export default ProductCard;
