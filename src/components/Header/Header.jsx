import React from 'react';
import "./Header.css";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-wrapper">
          <img src={logo} alt="Brand-Logo" />
          <nav className="nav-bar">
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
