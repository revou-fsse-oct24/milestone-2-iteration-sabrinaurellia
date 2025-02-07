import { GetServerSideProps } from "next";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return {
    props: { products },
  };
};

const ProductsPage = ({ products }: { products: Product[] }) => {
  return (
    <div className="product-list-container">
      <h1>ShopSmart Products</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
