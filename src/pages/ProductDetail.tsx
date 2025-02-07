import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images?: string[];
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Ensure id is defined

    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img
        src={product.images?.[0] || "https://via.placeholder.com/300"}
        alt={product.title}
        onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/300")}
      />
      <p>{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
