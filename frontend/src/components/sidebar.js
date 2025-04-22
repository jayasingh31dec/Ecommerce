import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: '250px', minHeight: '100vh' }}
    >
      <h4 className="text-center mb-4">🛍️ Categories</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <Link to="/" className="nav-link text-white d-flex align-items-center">
            <span role="img" aria-label="Home" className="me-2">🏠</span> Home
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/men" className="nav-link text-white d-flex align-items-center">
            <img
              src="/images/men.jpg"
              alt="Men"
              style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '4px' }}
            />
            Men
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/women" className="nav-link text-white d-flex align-items-center">
            <img
              src="/images/women.jpg"
              alt="Women"
              style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '4px' }}
            />
            Women
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/kids" className="nav-link text-white d-flex align-items-center">
            <img
              src="/images/kids.jpg"
              alt="Kids"
              style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '4px' }}
            />
            Kids
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/accessories" className="nav-link text-white d-flex align-items-center">
            <img
              src="/images/accessories.jpg"
              alt="Accessories"
              style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '4px' }}
            />
            Accessories
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/cosmetics" className="nav-link text-white d-flex align-items-center">
            <img
              src="/images/cosmetics.jpg"
              alt="Cosmetics"
              style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '4px' }}
            />
            Cosmetics
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/cart" className="nav-link text-white d-flex align-items-center">
            <span role="img" aria-label="Cart" className="me-2">🛒</span> Cart
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/payment" className="nav-link text-white d-flex align-items-center">
            <span role="img" aria-label="Payment" className="me-2">💳</span> Payment
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
