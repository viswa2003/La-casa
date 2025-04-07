import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const TopNavbar = () => {
  return (
    <div>
      <nav className="top-navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link">Order</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/specialofferspage" className="nav-link">Special Offers</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login or Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="homepage">
      <TopNavbar />
      
      <div className={`home-container ${isNavOpen ? 'nav-open' : ''}`}>
        <div className="home-content">
          <div className='logo1'>
        <img src="" alt="Hotel Logo" />
        </div>
          <h1 className={`home-title ${isNavOpen ? 'nav-open' : ''}`}>
            Welcome to <span className="brand-name">La Casa's</span> Web Page!
          </h1>
          <p className={`home-message ${isNavOpen ? 'nav-open' : ''}`}>
            Get ready for an amazing experience!
          </p>
          <div className="button-container">
            <Link to="/book" className="btn btn-primary">Book Your Seats</Link>
            <Link to="/menu" className="btn btn-secondary">View Menu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
