import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false); // ✅ Defined at the top level

  if (!cartContext) return <p>Loading cart...</p>;

  const { cart, removeFromCart, clearCart } = cartContext;

  const cartItemsMap = cart.reduce((acc, item) => {
    acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
    acc[item.id].quantity += 1;
    return acc;
  }, {} as Record<number, any>);

  const cartItems = Object.values(cartItemsMap);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    clearCart(); // ✅ Clears the cart after successful checkout
    setTimeout(() => setCheckoutSuccess(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is currently empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.images?.[0] || "https://via.placeholder.com/150"} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
              Remove
            </button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button onClick={handleCheckout} className="checkout-btn">
          Checkout
        </button>
      )}
      {checkoutSuccess && <div className="checkout-success">Checkout Successful!</div>}
    </div>
  );
};

export default Cart;
