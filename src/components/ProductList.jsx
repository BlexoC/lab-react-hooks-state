import React, { useState } from 'react'
import ProductCard from './ProductCard'
import Cart from './Cart'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Banana', price: '$0.99', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.49', category: 'Dairy', inStock: true },
]

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart([...cart, product])
  }

  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory)

  return (
    <div>
      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <h2>Available Products</h2>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}

      <Cart cart={cart} />
    </div>
  )
}

export default ProductList