import React from 'react';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <button onClick={onToggle}>
        {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
      </button>
    </div>
  );
}

export default DarkModeToggle;