import React from 'react';
import "./Header.css";
import logo from "../../assets/images/Logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-wrapper">
          <Link to="/">
            <img src={logo} alt="Brand-Logo" />
          </Link>
          <nav className="nav-bar">
            <Link to="/">Shops</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
