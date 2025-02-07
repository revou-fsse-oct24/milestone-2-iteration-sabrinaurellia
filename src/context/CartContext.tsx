import React, { createContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
