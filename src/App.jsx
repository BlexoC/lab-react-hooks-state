import React from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '1rem' }}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      <DarkModeToggle />
      <ProductList />
    </div>
  )
}

export default App