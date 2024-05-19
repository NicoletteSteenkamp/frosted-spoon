import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => (
  <nav className="centered-nav">
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
    </div>
  </nav>
);

export default Navigation;
