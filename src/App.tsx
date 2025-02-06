import React from 'react'
import "./App.css"

type Product = {
  id: number
  name: string
  price: number
}

const products: Product[] = [
  {
    id: 1,
    name: "iPhone",
    price: 400,
  },
  {
    id: 2,
    name: "Samsung",
    price: 500,
  },
]

function App() {
  return (
    <div className="App">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>
              <b>{product.name}</b>
              <br />
              <span>{product.price}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App