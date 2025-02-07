import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 100,
  images: ["https://via.placeholder.com/150"],
};

test("renders product title", () => {
  render(<ProductCard product={mockProduct} />);
  expect(screen.getByText("Test Product")).toBeInTheDocument();
});

test("renders product price", () => {
  render(<ProductCard product={mockProduct} />);
  expect(screen.getByText("$100")).toBeInTheDocument();
});
