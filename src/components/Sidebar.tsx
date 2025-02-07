import React from "react";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  selectedCategory: number | null;
  onSelectCategory: (id: number | null) => void;
}

const categories = [
  { id: null, name: "All Products" },
  { id: 1, name: "Shoes" },
  { id: 2, name: "Miscellaneous" },
  { id: 3, name: "Royal Items" },
  { id: 4, name: "Cars" },
  { id: 5, name: "Testing Category" },
  { id: 6, name: "Entertainments" },
];

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onSelectCategory }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (id: number | null) => {
    onSelectCategory(id);
    navigate(id !== null ? `/products?category=${id}` : "/products");
  };

  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className={selectedCategory === category.id ? "active-category" : ""}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
