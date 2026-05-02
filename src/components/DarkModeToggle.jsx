import React, { useState } from 'react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  function toggleMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div style={{
      background: darkMode ? '#1a1a1a' : 'white',
      color: darkMode ? 'white' : 'black',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1rem'
    }}>
      <button onClick={toggleMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  )
}

export default DarkModeToggle