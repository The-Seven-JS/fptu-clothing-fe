import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className='header-title'>
          <h1 className="header-title">FUCT</h1>
        </Link>
      </div>
      <div className="header-right">
        <nav className="header-menu">
          <NavLink to="/" className="nav-link">TRANG CHỦ</NavLink>
          <NavLink to="/" className="nav-link">FUCT NEWS</NavLink>
          <NavLink to="/test" className="nav-link">KIẾN THỨC THỜI TRANG</NavLink>
        </nav>
        <NavLink to="/test">
          <button className="header-test-button">LÀM TEST NGAY</button>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;