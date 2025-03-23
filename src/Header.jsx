import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/header.css';
import { Burger, Menu, MenuDropdown, MenuItem, MenuTarget } from '@mantine/core';

function Header() {
  
  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/" className='header-title' state={{page: 'main'}}>
          <h1 className="header-title">FUCT</h1>
        </NavLink>
      </div>
      <div className="header-right">
        <nav className="header-menu">
          <NavLink to="/" className={({ isActive, isPending }) =>
            `header-menu-link ${isActive ? "header-menu-a-active" : ""} ${isPending ? "header-menu-a-pending" : ""}`
          }>TRANG CHỦ</NavLink>
          <NavLink to="/news" className={({ isActive, isPending }) =>
            `header-menu-link ${isActive ? "header-menu-a-active" : ""} ${isPending ? "header-menu-a-pending" : ""}`
          }>FUCT NEWS</NavLink>
          <NavLink to="/knowledge" className={({ isActive, isPending }) =>
            `header-menu-link ${isActive ? "header-menu-a-active" : ""} ${isPending ? "header-menu-a-pending" : ""}`
          }>KIẾN THỨC THỜI TRANG</NavLink>
        </nav><div className="header-menu-mobile">
          <Menu>
            <MenuTarget>
              <Burger />
            </MenuTarget>
            <MenuDropdown>
              <MenuItem
                component={NavLink}
                to="/"
                className={({ isActive, isPending }) =>
                  `header-menu-link ${isActive ? 'header-menu-a-active' : ''} ${
                    isPending ? 'header-menu-a-pending' : ''
                  }`
                }
              >
                TRANG CHỦ
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/news"
                className={({ isActive, isPending }) =>
                  `header-menu-link ${isActive ? 'header-menu-a-active' : ''} ${
                    isPending ? 'header-menu-a-pending' : ''
                  }`
                }
              >
                FUCT NEWS
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/knowledge"
                className={({ isActive, isPending }) =>
                  `header-menu-link ${isActive ? 'header-menu-a-active' : ''} ${
                    isPending ? 'header-menu-a-pending' : ''
                  }`
                }
              >
                KIẾN THỨC THỜI TRANG
              </MenuItem>
            </MenuDropdown>
          </Menu>
        </div>
        <Link to="/test">
          <button className="header-test-button">LÀM TEST NGAY</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;