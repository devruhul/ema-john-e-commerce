import React from "react";
import logo from "../../images/logo.png";
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
          <a href="/shop">Shop</a>
          <a href="/reviews">Order Reviews</a>
          <a href="/manage">Manage Orders</a>
      </nav>
    </div>
  );
};

export default Header;