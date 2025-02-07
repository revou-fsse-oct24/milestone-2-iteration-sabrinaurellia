import React, { useState } from "react";
import ProductList from "./ProductList";

const Home: React.FC = () => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <div className="home-container">
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
