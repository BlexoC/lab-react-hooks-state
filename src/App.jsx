import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);

  // Toggle dark mode
  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  // Add to cart (no duplicates)
  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className={darkMode ? 'dark' : 'light'} style={{ minHeight: '100vh', padding: '1rem' }}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>
      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />
      <ProductList addToCart={handleAddToCart} cart={cart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App