import React, { useState } from 'react'
import ProductCard from './ProductCard'
import Cart from './Cart'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Banana', price: '$0.99', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.49', category: 'Dairy', inStock: true },
]

const ProductList = ({ addToCart, cart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <label htmlFor="category-select">Filter by Category: </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ marginBottom: '1rem' }}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <h2>Available Products</h2>
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
}

export default ProductList