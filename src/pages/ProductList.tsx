import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category?: { id: number };
}

interface ProductListProps {
  selectedCategory: number | null;
}

const ProductList: React.FC<ProductListProps> = ({ selectedCategory }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();

  const categoryParam = searchParams.get("category");
  const categoryId = categoryParam ? parseInt(categoryParam, 10) : selectedCategory;

  useEffect(() => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const filteredProducts = categoryId
            ? data.filter((product) => product.category?.id === categoryId)
            : data;
          setProducts(filteredProducts);
        } else {
          setError("No products found");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, [categoryId]);

  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="product-list-container">
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>{error}</p>
      ) : paginatedProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <>
          <div className="filter-bar">
            <label>Show: </label>
            <select 
              value={itemsPerPage} 
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>
          </div>
          <div className="product-grid">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(products.length / itemsPerPage)}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default ProductList;
