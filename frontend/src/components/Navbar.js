import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo with proper Link */}
          <Link className="navbar-brand" to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevqd-fPrQn_BMGSFrvwa77dMEQJZei-uEiQK6buv5jXMl29Lx7eXqWZE&s" alt="Logo" width="100" />
          </Link>

          {/* Navbar Toggle for mobile view */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Navigation Links */}
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/men">Men</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kids">Kids</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/living">Living</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/women">Women</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/beauty">Beauty</Link>
              </li>
            </ul>

            {/* Search Form */}
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
}

export default Navbar;
