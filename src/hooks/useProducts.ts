import { useState, useEffect } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: { name: string };
  images: string[];
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!response.ok) throw new Error("Failed to fetch products");

        const data: Product[] = await response.json();
        setProducts(data.slice(0, 12)); // Show only 12 products
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
