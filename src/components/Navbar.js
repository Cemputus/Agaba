import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Portfolio</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/results">Results</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-actions">
        <button 
          className="icon-button" 
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
        <button 
          className="icon-button" 
          onClick={onLogout}
          aria-label="Logout"
        >
          🚪
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 